import { invoke } from '@tauri-apps/api/core';

const TV_ARGS_BASE = [
    '--host', import.meta.env.VITE_TV_HOST,
    '--token-file', import.meta.env.VITE_TV_TOKEN_FILE,
];

export async function sendKey(key: string) {
    try {
        await invoke('run_tv_command', {
            args: [...TV_ARGS_BASE, 'send-key', key],
        });
    } catch (e) {
        console.error('TV command failed:', e);
    }
}

export async function sendCommand(subcommand: string, extra: string[] = []) {
    try {
        const args = [...TV_ARGS_BASE, subcommand, ...extra];
        console.log('Sending', args);
        await invoke('run_tv_command', { args });
    } catch (e) {
        console.error('TV command failed:', e);
    }
}

export default function DPad() {
  return (
    <div className="dpad-container">
      <div className="dpad">
        {/* Up */}
        <button
          className="dpad-btn dpad-up"
          onClick={() => sendKey('KEY_UP')}
          aria-label="Up"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2L13 11H1L7 2Z" fill="currentColor" />
          </svg>
        </button>

        {/* Left */}
        <button
          className="dpad-btn dpad-left"
          onClick={() => sendKey('KEY_LEFT')}
          aria-label="Left"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7L11 1V13L2 7Z" fill="currentColor" />
          </svg>
        </button>

        {/* Center / OK */}
        <button
          className="dpad-btn dpad-center"
          onClick={() => sendKey('KEY_ENTER')}
          aria-label="OK"
        >
          <span>OK</span>
        </button>

        {/* Right */}
        <button
          className="dpad-btn dpad-right"
          onClick={() => sendKey('KEY_RIGHT')}
          aria-label="Right"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7L3 13V1L12 7Z" fill="currentColor" />
          </svg>
        </button>

        {/* Down */}
        <button
          className="dpad-btn dpad-down"
          onClick={() => sendKey('KEY_DOWN')}
          aria-label="Down"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 12L1 3H13L7 12Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}