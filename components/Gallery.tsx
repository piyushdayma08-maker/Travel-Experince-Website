"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { foods } from '../lib/data/india'

export default function Gallery() {
  return (
    <section>
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Famous Foods Across India</p>
          <h2 className="section-title text-3xl md:text-4xl mt-3 text-slate-900">
            Flavors that anchor every journey
          </h2>
        </div>
        <p className="hidden md:block text-sm text-slate-500 max-w-xs">
          From coastal kitchens to mountain cafes, taste the regions through their signature plates.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {foods.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
            className={`${idx % 3 === 0 ? 'md:col-span-2' : ''} group relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-soft`}
          >
            <article className="h-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white max-w-md">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">{item.region}</p>
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-white/80">{item.description}</p>
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
