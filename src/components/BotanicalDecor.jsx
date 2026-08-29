import React from 'react';

export function InstagramIcon({ size = 18, color = "currentColor", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function BotanicalBranch({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ stroke: 'var(--olive)', opacity: 0.65, ...style }}
    >
      {/* Delicate hand-drawn stem */}
      <path
        d="M60 170 C58 130, 62 80, 58 10"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <path
        d="M59 135 C42 128, 30 115, 32 100 C45 106, 56 120, 59 135 Z"
        strokeWidth="1"
        fill="rgba(83, 96, 68, 0.08)"
      />
      {/* Leaf 2 */}
      <path
        d="M60 110 C75 102, 88 90, 86 75 C72 82, 63 95, 60 110 Z"
        strokeWidth="1"
        fill="rgba(83, 96, 68, 0.08)"
      />
      {/* Leaf 3 */}
      <path
        d="M59 80 C40 70, 32 55, 35 42 C48 48, 55 64, 59 80 Z"
        strokeWidth="1"
        fill="rgba(83, 96, 68, 0.08)"
      />
      {/* Leaf 4 */}
      <path
        d="M58 55 C72 45, 80 32, 78 20 C66 26, 60 40, 58 55 Z"
        strokeWidth="1"
        fill="rgba(83, 96, 68, 0.08)"
      />
      {/* Top Leaf */}
      <path
        d="M58 15 C52 8, 56 2, 60 2 C64 2, 67 8, 58 15 Z"
        strokeWidth="1"
        fill="rgba(83, 96, 68, 0.12)"
      />
    </svg>
  );
}

export function BotanicalCorner({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ stroke: 'var(--olive)', opacity: 0.45, ...style }}
    >
      <path
        d="M10 90 Q 30 40 90 10"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <path
        d="M35 55 C 25 45 28 35 40 38 C 45 48 38 58 35 55 Z"
        strokeWidth="0.9"
        fill="rgba(83, 96, 68, 0.06)"
      />
      <path
        d="M60 32 C 62 20 74 22 72 32 C 64 36 58 36 60 32 Z"
        strokeWidth="0.9"
        fill="rgba(83, 96, 68, 0.06)"
      />
    </svg>
  );
}

export function MonogramRC({ className = "", size = 48 }) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: 'var(--white)',
        fontFamily: 'var(--font-display)',
        color: 'var(--brown)',
        fontSize: size * 0.45,
        letterSpacing: '0.04em',
        fontStyle: 'italic',
        fontWeight: 500,
        boxShadow: 'var(--shadow-subtle)',
      }}
    >
      RC
    </div>
  );
}
