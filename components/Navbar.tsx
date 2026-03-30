"use client"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Destinations', href: '#featured' },
  { label: 'Seasons', href: '#seasons' },
  { label: 'States', href: '#states' },
  { label: 'Foods', href: '#foods' },
  { label: 'Testimonials', href: '#testimonials' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed w-full z-40 top-0">
      <div className="backdrop-blur-xs glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold text-slate-900">
            India<span className="text-sunset ml-1">Travel</span>
          </a>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            {navItems.map((item) => (
              <a key={item.href} className="hover:text-ocean transition text-slate-700" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden flex items-center gap-3">
            <button className="p-2 rounded-md" onClick={() => setOpen((v) => !v)} aria-label="menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass border-b border-white/10">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} className="py-1" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
