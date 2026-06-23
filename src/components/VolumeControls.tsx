import { sendKey, sendCommand } from "./DPad";

export default function VolumeControls() {
    return (
    <div className="volume-controls">
      <div className="control-group">
        <span className="control-label">VOL</span>
        <div className="control-pair">
          <button onClick={() => sendKey('KEY_VOLUP')} aria-label="Volume Up">+</button>
          <button onClick={() => sendKey('KEY_VOLDOWN')} aria-label="Volume Down">−</button>
        </div>
      </div>

      <button
        className="mute-btn"
        onClick={() => sendKey('KEY_MUTE')}
        aria-label="Mute"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2L4 5H1V11H4L8 14V2Z" fill="currentColor" />
          <path d="M11 5.5C11.8 6.3 12.3 7.1 12.3 8C12.3 8.9 11.8 9.7 11 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M13 3.5C14.5 4.8 15.3 6.3 15.3 8C15.3 9.7 14.5 11.2 13 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>

      <div className="control-group">
        <span className="control-label">CH</span>
        <div className="control-pair">
          <button onClick={() => sendKey('KEY_CHUP')} aria-label="Channel Up">+</button>
          <button onClick={() => sendKey('KEY_CHDOWN')} aria-label="Channel Down">−</button>
        </div>
      </div>
    </div>
  );
}