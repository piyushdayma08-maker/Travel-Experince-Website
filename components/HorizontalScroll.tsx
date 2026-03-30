import Image from 'next/image'
import { seasonHighlights } from '../lib/data/india'

export default function HorizontalScroll() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Best Places by Season</p>
            <h2 className="section-title text-3xl md:text-4xl mt-3 text-slate-900">
              See what each season brings - from snowy mountains to monsoon greens and winter deserts.
            </h2>
          </div>
          <p className="hidden md:block text-sm text-slate-500 max-w-xs">
            Each card is tied to weather that makes the experience smoother on the ground.
          </p>
        </div>
      </div>

      <div className="px-6">
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {seasonHighlights.map((panel) => (
            <div key={panel.id} className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px]">
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-soft">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Seasonal</p>
                  <h3 className="text-2xl font-semibold">{panel.title}</h3>
                  <p className="mt-2 text-sm text-white/80 max-w-xs">{panel.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
