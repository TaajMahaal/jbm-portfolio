import React, { useState } from 'react';
import BootSequence from './BootSequence';
import AutoTilingDesktop from './AutoTilingDesktop';
import HexagonalBackground from './HexagonalBackground';
import CRTOverlay from './CRTOverlay';
import KonamiCode from './KonamiCode';

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      <HexagonalBackground />
      <CRTOverlay />
      <KonamiCode />
      {!bootComplete ? (
        <BootSequence onComplete={() => setBootComplete(true)} />
      ) : (
        <AutoTilingDesktop />
      )}
    </>
  );
}
