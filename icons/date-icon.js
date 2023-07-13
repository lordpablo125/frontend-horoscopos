import React from 'react'

export default function DateIcon() {
  return (
    <svg
      fill="none"
      height="3rem"
      viewBox="0 0 24 24"
      id="date-down"
      data-name="Flat Line"
      className="icon flat-line"
    >
      <path
        id="secondary"
        d="M3,9H21a0,0,0,0,1,0,0V20a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V9A0,0,0,0,1,3,9Z"
      />

      <path
        id="primary"
        stroke="#94a3b8"
        d="M20,21H4a1,1,0,0,1-1-1V9H21V20A1,1,0,0,1,20,21ZM21,5a1,1,0,0,0-1-1H4A1,1,0,0,0,3,5V9H21ZM16,3V6M8,3V6m4,11V13"
      />

      <polyline
        id="primary-2"
        stroke="#94a3b8"
        data-name="primary"
        points="10 15 12 17 14 15"
      />
    </svg>
  )
}
