"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { heroImage } from '../lib/data/india'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[720px] overflow-hidden">
      <Image
        src={heroImage}
        alt="India travel"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#f8f3ea]/90" />
      <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute bottom-16 left-10 h-72 w-72 rounded-full bg-sunset/25 blur-3xl" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">India Travel</p>
            <h1 className="section-title text-4xl md:text-6xl lg:text-7xl text-white mt-4 leading-tight">
              Travel India the way locals do - at the right time, in the right season.
            </h1>
            <p className="mt-5 text-white/80 max-w-xl">
              India changes every few months - pick the right place for the right time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#featured"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 shadow-soft"
              >
                Start Exploring
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#states"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 text-white px-6 py-3"
              >
                Explore by State
              </motion.a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-white/80 text-sm">
              <div>
                <p className="text-lg font-semibold text-white">28+</p>
                <p>States curated</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">56</p>
                <p>Destination picks</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">4.9</p>
                <p>Guest rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="card-glass rounded-[32px] p-6 shadow-soft hero-glow">
              <h3 className="section-title text-2xl text-slate-900">Tonight's highlight</h3>
              <p className="mt-2 text-slate-600">
                Rooftop dinner overlooking the City Palace and calm lake water.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-semibold text-slate-900">Udaipur</p>
                  <p className="text-slate-500">Lake-side heritage stay</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-semibold text-slate-900">Jaipur</p>
                  <p className="text-slate-500">Pink City artisan walk</p>
                </div>
              </div>
              <div className="mt-6 relative h-40 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1695956353120-54ce5e91632b?auto=format&fit=crop&w=1200&q=80"
                  alt="Udaipur palace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
