import React from 'react';
import { sendCommand } from './DPad';

interface App {
    label: string;
    id: string;
    icon: React.ReactElement;
}

const APPS: App[] = [
  {
    label: 'YouTube',
    id: '111299001912',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" rx="3" fill="#FF0000" />
        <path d="M6 5L11.5 8L6 11V5Z" fill="white" />
      </svg>
    ),
  },
  {
    label: 'Netflix',
    id: '3201907018807',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" rx="3" fill="#141414" />
        <path d="M4 3H6.5L8 7.5L9.5 3H12L9.5 8.5L12 13H9.5L8 8.5L6.5 13H4L6.5 8.5L4 3Z" fill="#E50914" />
      </svg>
    ),
  },
  {
    label: 'Disney+',
    id: '3201901017640',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" rx="3" fill="#113CCF" />
        <text x="3" y="12" fontSize="9" fill="white" fontWeight="bold">D+</text>
      </svg>
    ),
  },
  {
    label: 'Prime',
    id: '3201910019365',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" rx="3" fill="#00A8E0" />
        <text x="2" y="12" fontSize="7" fill="white" fontWeight="bold">prime</text>
      </svg>
    ),
  },
  {
    label: 'Spotify',
    id: '3201606009684',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" rx="8" fill="#1DB954" />
        <path d="M4 6.5C6.5 5.5 9.5 5.5 12 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M4.5 8.5C6.5 7.8 9.5 7.8 11.5 8.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M5 10.5C6.8 10 9.2 10 11 10.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Plex',
    id: '3201512006963',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" rx="3" fill="#1F1F1F" />
        <path d="M5 4H8C9.7 4 11 5.3 11 7C11 8.7 9.7 10 8 10H7V12H5V4ZM7 8H8C8.6 8 9 7.6 9 7C9 6.4 8.6 6 8 6H7V8Z" fill="#E5A00D" />
      </svg>
    ),
  },
];

export default function AppShortcuts() {
    return (
        <div className="app-shortcuts">
            <span className="control-label" style={{ marginBottom: '8px', display: 'block' }}>APPS</span>
            <div className="app-grid">
                {APPS.map((app) => (
                    <button
                        key={app.id}
                        className="app-btn"
                        onClick={() => sendCommand('app-run', [app.id])}
                        aria-label={app.label}
                        title={app.label}
                    >
                        {app.icon}
                        <span>{app.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}