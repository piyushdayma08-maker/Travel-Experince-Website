import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="section-title text-2xl text-slate-900">India Travel</h3>
          <p className="mt-3 text-slate-500 max-w-md">
            Practical, season-first travel planning for India. We focus on timing, local stays, and routes that feel smooth in real life.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <MapPin size={16} />
            <span>Aerocity, Delhi</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} />
            <span>(+91) 8306822550</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} />
            <span>piyushdayma08@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">
        (c) 2026 India Travel. All rights reserved.
      </div>
    </footer>
  )
}
