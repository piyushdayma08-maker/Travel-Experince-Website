"use client"
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { stateCards } from '../lib/data/india'

export default function JourneySections() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ctx: any
    let gsap: any

    const init = async () => {
      const gsapModule = await import('gsap')
      const scrollModule = await import('gsap/ScrollTrigger')
      gsap = gsapModule.gsap || gsapModule.default
      const ScrollTrigger = scrollModule.ScrollTrigger || scrollModule.default

      try {
        gsap.registerPlugin(ScrollTrigger)
      } catch (e) {}

      ctx = gsap.context(() => {
        const items = (gsap.utils.toArray('.journey-item') as HTMLElement[])
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          )

          const image = item.querySelector('.journey-image')
          if (image) {
            gsap.fromTo(
              image,
              { y: 20, scale: 1.06 },
              {
                y: -20,
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: item,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.6
                }
              }
            )
          }
        })
      }, sectionRef)
    }

    init()

    return () => {
      if (ctx && ctx.revert) ctx.revert()
    }
  }, [])

  return (
    <section id="states" className="py-20">
      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Explore by State</p>
          <h2 className="section-title text-3xl md:text-4xl mt-3 text-slate-900">
            Pick a state and plan around its real weather windows.
          </h2>
        </motion.div>

        <div className="space-y-14">
          {stateCards.map((d, i) => (
            <article
              key={d.id}
              className={`journey-item grid gap-8 items-center md:grid-cols-[1.1fr_0.9fr] ${
                i % 2 === 1 ? 'md:grid-cols-[0.9fr_1.1fr]' : ''
              }`}
            >
              <div className={`card-glass rounded-3xl p-6 md:p-8 shadow-soft ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <h3 className="section-title text-2xl md:text-3xl text-slate-900">{d.name}</h3>
                <p className="mt-3 text-slate-600">{d.highlights}</p>
                <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
                  <span className="px-3 py-1 rounded-full bg-white/70">Two destination picks</span>
                  <span className="h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-sunset" />
                </div>
              </div>
              <div className={`relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-soft ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover journey-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

