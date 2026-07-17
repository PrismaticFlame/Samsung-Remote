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
    icon: <img src="/icons/youtube.svg" alt="YouTube" width={24} height={24}/>,
  },
  {
    label: 'Crunchyroll',
    id: '3202302030097',
    icon: <img src="/icons/crunchyroll_2.svg" alt="Crunchyroll" width={24} height={24}/>,
  },
  {
    label: 'Netflix',
    id: '3201907018807',
    icon: <img src="/icons/netflix.svg" alt="Netflix" width={24} height={24}/>,
  },
  {
    label: 'Disney+',
    id: '3201901017640',
    icon: <img src="/icons/disney.svg" alt="Disney+" width={24} height={24}/>,
  },
  {
    label: 'Prime',
    id: '3201910019365',
    icon: <img src="/icons/prime.svg" alt="Prime Video" width={24} height={24}/>,
  },
  {
    label: 'HBO Max',
    id: '3202301029760',
    icon: <img src="/icons/max.svg" alt="HBO Max" width={24} height={24}/>
  },
  {
    label: 'Spotify',
    id: '3201606009684',
    icon: <img src="/icons/spotify.svg" alt="Spotify" width={24} height={24}/>,
  },
  {
    label: 'Tubi',
    id: '3201504001965',
    icon: <img src="/icons/tubi.svg" alt="Tubi" width={24} height={24}/>,
  },
  {
    label: 'Plex',
    id: '3201512006963',
    icon: <img src="/icons/plex.svg" alt="Plex" width={24} height={24}/>,
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