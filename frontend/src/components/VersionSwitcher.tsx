import { useState } from 'react'

const VERSIONS = [
  { id: 1, label: 'V1', desc: 'Pink Classic' },
  { id: 2, label: 'V2', desc: 'Soft & Minimal' },
  { id: 3, label: 'V3', desc: 'Dark Luxury' },
  { id: 4, label: 'V4', desc: 'Bold Editorial' },
  { id: 5, label: 'V5', desc: 'Glam Gradient' },
]

export default function VersionSwitcher({ current }: { current: number }) {
  const [open, setOpen] = useState(false)

  const select = (v: number) => {
    const url = new URL(window.location.href)
    url.searchParams.set('v', String(v))
    window.location.href = url.toString()
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden w-44">
          {VERSIONS.map((v) => (
            <button
              key={v.id}
              onClick={() => select(v.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-neutral-50 ${current === v.id ? 'bg-[#FF66C4]/10 font-semibold text-[#FF66C4]' : 'text-neutral-700'}`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${current === v.id ? 'bg-[#FF66C4] text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                {v.label}
              </span>
              {v.desc}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-[#FF66C4] text-white text-xs font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
      >
        V{current}
      </button>
    </div>
  )
}
