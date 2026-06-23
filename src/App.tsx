import DPad from "./components/DPad";
import VolumeControls from './components/VolumeControls';
import AppShortcuts from './components/AppShortcuts';
import { sendKey, sendCommand } from './components/DPad';
import './index.css';

export default function App() {
  return (
    <div className="remote">
      {/* Header */}
      <div className="remote-header">
        <span className="remote-brand">SAMSUNG</span>
        <button
          className="power-btn"
          onClick={() => sendKey('KEY_POWER')}
          aria-label="Power"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 3C2.3 4 1 5.9 1 8C1 10.8 3.2 13 6 13H8C10.8 13 13 10.8 13 8C13 5.9 11.7 4 10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Nav controls */}
      <div className="nav-controls">
        <button onClick={() => sendCommand('home')} aria-label="Home">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 6L7 1L13 6V13H9V9H5V13H1V6Z" fill="currentColor" />
          </svg>
          <span>Home</span>
        </button>
        <button onClick={() => sendCommand('back')} aria-label="Back">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back</span>
        </button>
        <button onClick={() => sendKey('KEY_MENU')} aria-label="Menu">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 3H13M1 7H13M1 11H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>Menu</span>
        </button>
        <button onClick={() => sendCommand('source')} aria-label="Source">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 11V13M9 11V13M3 13H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>Source</span>
        </button>
      </div>

      <div className="divider" />

      {/* Volume + D-Pad + Channel */}
      <VolumeControls />

      <div className="divider" />

      <DPad />

      <div className="divider" />

      {/* App shortcuts */}
      <AppShortcuts />
    </div>
  );
}