import { useState, useEffect } from 'react';

interface SystemInfo {
  city: string;
  browser: string;
  resolution: string;
  isOnline: boolean;
  date: string;
  time: string;
}

export function useSystemInfo(): SystemInfo {
  const [info, setInfo] = useState<SystemInfo>({
    city: '',
    browser: '',
    resolution: '',
    isOnline: true,
    date: '',
    time: '',
  });

  useEffect(() => {
    // Parse timezone to get city
    const getCity = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // Extract city from timezone (e.g., "Europe/Paris" -> "Paris")
      const parts = timezone.split('/');
      return parts[parts.length - 1].replace(/_/g, ' ');
    };

    // Parse user agent to get browser name
    const getBrowser = () => {
      const ua = navigator.userAgent;
      if (ua.includes('Firefox/')) {
        const version = ua.match(/Firefox\/(\d+)/)?.[1];
        return `Firefox ${version}`;
      } else if (ua.includes('Edg/')) {
        const version = ua.match(/Edg\/(\d+)/)?.[1];
        return `Edge ${version}`;
      } else if (ua.includes('Chrome/')) {
        const version = ua.match(/Chrome\/(\d+)/)?.[1];
        return `Chrome ${version}`;
      } else if (ua.includes('Safari/')) {
        const version = ua.match(/Version\/(\d+)/)?.[1];
        return `Safari ${version}`;
      }
      return 'Browser';
    };

    // Get viewport resolution (browser window size)
    const getResolution = () => {
      return `${window.innerWidth}×${window.innerHeight}`;
    };

    // Update date and time
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
      const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      setInfo((prev) => ({
        ...prev,
        date,
        time,
      }));
    };

    // Initialize static values
    setInfo({
      city: getCity(),
      browser: getBrowser(),
      resolution: getResolution(),
      isOnline: navigator.onLine,
      date: '',
      time: '',
    });

    // Update time immediately and then every second
    updateDateTime();
    const timeInterval = setInterval(updateDateTime, 1000);

    // Listen for online/offline events
    const handleOnline = () => setInfo((prev) => ({ ...prev, isOnline: true }));
    const handleOffline = () => setInfo((prev) => ({ ...prev, isOnline: false }));
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Listen for resize events
    const handleResize = () => {
      setInfo((prev) => ({ ...prev, resolution: getResolution() }));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return info;
}
