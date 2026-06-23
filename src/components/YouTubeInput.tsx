import { useState } from 'react';
import { sendCommand } from './DPad';

function extractVideoId(input: string): string | null {
    // Full URL: https://www.youtube.com/watch?v=VIDEO_ID
    const urlMatch = input.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (urlMatch) return urlMatch[1];

    // short url: https://youtu.be/VIDEO_ID
    const shortMatch = input.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) return shortMatch[1];

    // raw ID: just 11 characters
    if (/^[a-zA-Z0-9_-]{11}$/.test(input.trim())) return input.trim();

    return null;
}

export default function YouTubeInput() {
    const [value, setValue] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

    async function handleLaunch() {
        const id = extractVideoId(value);
        if (!id) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 2000);
            return;
        }

        setStatus('sending');
        const url = `https://www.youtube.com/watch?v=${id}`;
        await sendCommand('open-browser', [url]);
        setStatus('idle');
        setValue('');
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') handleLaunch();
        if (e.key === 'Escape') setValue('');
    }

    return (
        <div className="yt-input-container">
        <span className="control-label" style={{ marginBottom: '6px', display: 'block' }}>
            YOUTUBE
        </span>
        <div className="yt-input-row">
            <input
            className={`yt-input ${status === 'error' ? 'yt-input--error' : ''}`}
            type="text"
            placeholder="Paste URL or video ID"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            />
            <button
            className="yt-launch-btn"
            onClick={handleLaunch}
            disabled={status === 'sending'}
            aria-label="Launch on TV"
            >
            {status === 'sending' ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="yt-spinner">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
                </svg>
            ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
            </button>
        </div>
        {status === 'error' && (
            <span className="yt-error">Invalid YouTube URL or video ID</span>
        )}
        </div>
    );
}