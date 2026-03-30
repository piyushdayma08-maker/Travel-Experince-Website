"use client"
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { testimonials } from '../lib/data/india'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

  return (
    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Testimonials</p>
        <h2 className="section-title text-3xl md:text-4xl mt-3 text-slate-900">
          Stories from travelers across India
        </h2>
        <p className="mt-4 text-slate-500">
          Guests share how the details, pacing, and local hosts made their journeys feel personal.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button className="h-10 w-10 rounded-full border border-white/40 glass" onClick={prev}>
            <ChevronLeft size={18} />
          </button>
          <button className="h-10 w-10 rounded-full border border-white/40 glass" onClick={next}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="card-glass rounded-3xl p-8 md:p-10 shadow-soft min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg md:text-xl text-slate-700">"{testimonials[index].text}"</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{testimonials[index].name}</p>
                <p className="text-sm text-slate-500">{testimonials[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
