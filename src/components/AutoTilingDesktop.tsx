import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile, experiences, skills, education } from '../data/cv';
import { useSystemInfo } from '../hooks/useSystemInfo';
import SyncedWindow from './SyncedWindow';
import TimelineOrb from './TimelineOrb';

interface Pane {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function AutoTilingDesktop() {
  const systemInfo = useSystemInfo();

  return (
    <div className="h-screen flex flex-col">
      {/* Statusbar */}
      <div className="statusbar px-4 py-3 flex items-center justify-between relative z-30">
        {/* Left: Title + Connection */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold tracking-tight status-title">
            jbm@portfolio
          </span>
          <span className={`text-xs font-semibold ${systemInfo.isOnline ? 'status-online' : 'text-red-400'}`}>
            {systemInfo.isOnline ? '●' : '○'} {systemInfo.isOnline ? 'online' : 'offline'}
          </span>
        </div>

        {/* Center: City + Browser */}
        <div className="flex items-center gap-6 text-sm text-teal-300">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{systemInfo.city}</span>
          </div>
          <div className="statusbar-separator" />
          <div className="flex items-center gap-2">
            <span>🌐</span>
            <span>{systemInfo.browser}</span>
          </div>
        </div>

        {/* Right: Resolution + Date + Time */}
        <div className="flex items-center gap-4 text-sm terminal-text">
          <span>{systemInfo.resolution}</span>
          <div className="statusbar-separator" />
          <span>{systemInfo.date}</span>
          <div className="statusbar-separator" />
          <span className="font-mono">{systemInfo.time}</span>
        </div>
      </div>

      {/* CRT Sweep Effect */}
      <div className="crt-sweep" />

      {/* Asymmetric tiling layout */}
      <div className="flex-1 px-4 py-8 gap-4 flex overflow-hidden">
        {/* Left column: Experiences (full height) */}
        <SyncedWindow
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="w-1/3 retro-window flex flex-col overflow-hidden"
        >
          <div className="retro-title-bar">
            <span>~/experience</span>
          </div>
          <div className="flex-1 overflow-auto content-padding">
            <WorkContent showAll />
          </div>
        </SyncedWindow>

        {/* Middle column: About + Education */}
        <div className="w-1/3 flex flex-col gap-4">
          {/* About */}
          <SyncedWindow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex-[1.5] retro-window flex flex-col overflow-hidden"
          >
            <div className="retro-title-bar">
              <span>~/about</span>
            </div>
            <div className="flex-1 overflow-auto content-padding">
              <AboutContent />
            </div>
          </SyncedWindow>

          {/* Education */}
          <SyncedWindow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="flex-1 retro-window flex flex-col overflow-hidden"
          >
            <div className="retro-title-bar">
              <span>~/education</span>
            </div>
            <div className="flex-1 overflow-auto content-padding">
              <EducationContent />
            </div>
          </SyncedWindow>
        </div>

        {/* Right column: Skills + Terminal */}
        <div className="w-1/3 flex flex-col gap-4">
          {/* Skills */}
          <SyncedWindow
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex-[1.5] retro-window flex flex-col overflow-hidden"
          >
            <div className="retro-title-bar">
              <span>~/skills</span>
            </div>
            <div className="flex-1 overflow-auto content-padding">
              <SkillsContent />
            </div>
          </SyncedWindow>

          {/* Terminal */}
          <SyncedWindow
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="flex-1 retro-window flex flex-col overflow-hidden"
          >
            <div className="retro-title-bar">
              <span>~/terminal</span>
            </div>
            <div className="flex-1 overflow-auto content-padding">
              <TerminalContent />
            </div>
          </SyncedWindow>
        </div>
      </div>
    </div>
  );
}

function TerminalContent() {
  const [lines, setLines] = useState<Array<{type: 'input' | 'output' | 'error', content: string}>>([
    { type: 'output', content: 'jbm@portfolio:~$ _ ' },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const terminalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    setLines((prev) => [...prev, { type: 'input', content: cmd }]);
    setCommandHistory((prev) => [...prev, cmd]);

    let output: string;
    let type: 'output' | 'error' = 'output';

    switch (trimmedCmd) {
      case 'help':
        output = `Available commands:
  help        Show this help
  whoami      Display user info
  ls          List sections
  clear       Clear terminal
  about       About me
  contact     Contact info
  neofetch    System info`;
        break;

      case 'whoami':
        output = 'jean-baptiste.machemie\nEngineering Manager @ Jump\nMicroservices • Kubernetes • Leadership';
        break;

      case 'ls':
      case 'ls -la':
        output = `total 4
drwxr-xr-x  4 jbm jbm  128 Jan 26 2024 .
drwxr-xr-x  3 jbm jbm   96 Jan 26 2024 ..
-rw-r--r--  1 jbm jbm 2048 Jan 26 2024 about.md
-rw-r--r--  1 jbm jbm 4096 Jan 26 2024 experience.json
-rw-r--r--  1 jbm jbm 1024 Jan 26 2024 skills.yml`;
        break;

      case 'clear':
        setLines([]);
        return;

      case 'about':
        output = `Jean-Baptiste Machemie
Engineering Manager @ Jump

Specializing in:
• Building & leading engineering teams
• Microservices architecture
• Kubernetes & cloud infrastructure
• Security-first development

Background in digital forensics at French Ministry of Interior`;
        break;

      case 'contact':
        output = `Email:    jb.machemie@gmail.com
LinkedIn: linkedin.com/in/jean-baptiste-machemie-6900a7181
Location: Limoges, France`;
        break;

      case 'neofetch':
        output = `                    jbm@portfolio
   _____           ─────────────────
  /     \\          OS: Engineering OS
 |  ●_● |          Host: Limoges, FR
  \\  >  /          Kernel: Leadership-6.0
  /     \\          Uptime: 13 years
 /|     |\\         Shell: zsh 5.9
/_|     |_\\        Packages: k8s, terraform
                   Theme: Holographic
                   Icons: NerdFont`;
        break;

      default:
        output = `command not found: ${cmd}\nType 'help' for available commands`;
        type = 'error';
    }

    setLines((prev) => [...prev, { type, content: output }, { type: 'output', content: '' }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div
      ref={terminalRef}
      role="log"
      aria-live="polite"
      aria-label="Terminal interactif"
      className="h-full flex flex-col font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-y-auto">
        {lines.map((line, index) => (
          <div key={index} className={line.type === 'error' ? 'text-red-400' : 'text-teal-300 text-shadow-teal'}>
            {line.type === 'input' ? (
              <div className="flex">
                <span className="terminal-prompt">❯ </span>
                <span className="ml-2 terminal-text">{line.content}</span>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap">{line.content}</pre>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={(e) => { e.preventDefault(); executeCommand(input); setInput(''); }} className="flex items-center mt-4">
        <span className="terminal-prompt">❯ </span>
        <div className="flex-1 ml-2 relative">
          <label htmlFor="terminal-input" className="sr-only">
            Ligne de commande
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent outline-none terminal-text terminal-input-hidden-caret"
            autoFocus
            spellCheck="false"
            aria-describedby="terminal-help"
          />
          <span id="terminal-help" className="sr-only">
            Tapez 'help' pour voir les commandes disponibles
          </span>
          <span className="terminal-cursor-block" style={{ left: `${input.length * 0.6}em` }}></span>
        </div>
      </form>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="space-y-4 text-teal-100 h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 holo-text">{profile.name}</h2>

      <div className="space-y-3 text-sm leading-relaxed">
        <div className="flex items-center gap-2">
          <span className="text-gold-400">▸</span>
          <div>
            <span className="text-gray-400">role: </span>
            <span className="text-teal-300">{profile.title}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gold-400">▸</span>
          <div>
            <span className="text-gray-400">subtitle: </span>
            <span className="text-teal-300">{profile.subtitle}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gold-400">▸</span>
          <div>
            <span className="text-gray-400">location: </span>
            <span className="text-teal-300">{profile.location}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-teal-500/20">
          <p className="text-gray-300 leading-relaxed mb-3">{profile.tagline}</p>
        </div>

        <div className="mt-4 pt-4 border-t border-teal-500/20">
          <h3 className="text-xs font-bold text-gold-400 mb-2">Core Expertise</h3>
          <div className="flex flex-wrap gap-2">
            <span className="skill-badge">
              Microservices
            </span>
            <span className="skill-badge">
              Kubernetes
            </span>
            <span className="skill-badge">
              Terraform
            </span>
            <span className="skill-badge">
              Leadership
            </span>
            <span className="skill-badge">
              Architecture
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-teal-500/20">
          <h3 className="text-xs font-bold text-gold-400 mb-3">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-teal-400">→</span>
              <a href={`mailto:${profile.email}`} className="text-xs text-teal-300 hover:text-gold-400 transition-colors">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-teal-400">→</span>
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-teal-300 hover:text-gold-400 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkContent({ showAll = false }: { showAll?: boolean }) {
  const experiencesToShow = showAll ? experiences : experiences.slice(0, 4);
  const timelineRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="space-y-4 text-teal-100 h-full overflow-y-auto">
      <h2 className="section-header holo-text">Experience</h2>
      <div ref={timelineRef} className="relative space-y-5 pb-4 overflow-visible">
        {/* Timeline line */}
        <div className="absolute left-[24px] top-2 bottom-[-8px] w-px bg-teal-400/60"></div>

        {/* Animated glowing orb */}
        <TimelineOrb containerRef={timelineRef} />

        {experiencesToShow.map((exp, index) => (
          <div key={index} className="relative pl-12">
            {/* Circle on timeline */}
            <div data-timeline-point className="absolute left-[20px] top-2 w-2 h-2 rounded-full z-10" style={{backgroundColor: '#edc800', boxShadow: '0 0 10px rgba(237, 200, 0, 0.6)'}} />
            <h3 className="text-sm font-bold text-gold-400">{exp.role}</h3>
            <p className="text-xsm text-gray-100">{exp.company}</p>
            <p className="text-xsm text-gray-400 mb-2">{exp.period}</p>
            {exp.description && (
              <p className="text-xsm text-gray-100 mb-2 leading-relaxed">{exp.description}</p>
            )}
            {exp.highlights && (
              <ul className="space-y-1 text-xsm text-gray-300 mt-2">
                {exp.highlights.slice(0, showAll ? undefined : 2).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 -mt-0.5">
                    <span className="text-teal-400 flex-shrink-0">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationContent() {
  return (
    <div className="space-y-4 text-teal-100 h-full overflow-y-auto">
      <h2 className="section-header holo-text">Education</h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-4 border-l-2 border-teal-500/30">
            <div className="absolute left-0 top-0 w-2 h-2 bg-gold-400 rounded-full -translate-x-[5px]"
                 style={{boxShadow: '0 0 10px rgba(237, 200, 0, 0.6)'}} />
            <h3 className="text-sm font-bold text-gold-400">{edu.degree}</h3>
            <p className="text-xs text-gray-400">{edu.institution}</p>
            <p className="text-xs text-gray-500 mb-2">{edu.year} • {edu.location}</p>

            <div className="mt-2 space-y-1">
              <div className="text-xs text-gray-400">
                <span className="text-teal-400">→</span> Security Specifications
              </div>
              <div className="text-xs text-gray-400">
                <span className="text-teal-400">→</span> Cryptography
              </div>
              <div className="text-xs text-gray-400">
                <span className="text-teal-400">→</span> Secure Systems Design
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-teal-500/20">
        <h3 className="text-xs font-bold text-gold-400 mb-2">Languages</h3>
        <div className="flex gap-2 flex-wrap">
          <span className="skill-badge">
            French (Native)
          </span>
          <span className="skill-badge">
            English (Professional)
          </span>
        </div>
      </div>
    </div>
  );
}

function SkillsContent() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  const categoryLabels: Record<string, string> = {
    devops: 'DevOps',
    backend: 'Backend',
    frontend: 'Frontend',
    security: 'Security',
    tools: 'Tools',
  };

  return (
    <div className="space-y-4 text-teal-100 h-full overflow-y-auto">
      <h2 className="section-header holo-text">Skills</h2>
      <div className="space-y-4">
        {Object.entries(groupedSkills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-xs font-bold text-gold-400 mb-2 flex items-center gap-2">
              <span className="text-teal-400">▸</span>
              {categoryLabels[category] || category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillList.slice(0, 8).map((skillName, index) => (
                <span key={index} className="skill-badge">
                  {skillName}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
