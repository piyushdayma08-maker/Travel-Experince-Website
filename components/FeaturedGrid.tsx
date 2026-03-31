"use client"

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { destinations, Destination } from '../lib/data/india'

const seasonOptions = ['All', 'Winter', 'Summer', 'Monsoon']
const typeOptions = ['All','Mountains','Beach','Culture','Heritage','Spiritual','Nature','Wildlife','Desert','City']

export default function FeaturedGrid() {
  const [season, setSeason] = useState('All')
  const [type, setType] = useState('All')
  const [stateFilter, setStateFilter] = useState('All')

  const states = useMemo(() => {
    const list = Array.from(new Set(destinations.map((item) => item.state)))
    return ['All', ...list]
  }, [])

  const filtered = useMemo(() => {
    return destinations.filter((item) => {
      const matchesSeason = season === 'All' || item.bestSeason === season
      const matchesType = type === 'All' || item.type === type
      const matchesState = stateFilter === 'All' || item.state === stateFilter
      return matchesSeason && matchesType && matchesState
    })
  }, [season, type, stateFilter])

  return (
    <section>
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Destinations</p>
            <h2 className="section-title text-3xl md:text-4xl mt-3 text-slate-900">
              India changes with the calendar. Plan with the season, not just the map.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-lg">
            Pick a state, choose a season, and see what actually works when you are there.
          </p>
        </div>

        <div className="sticky top-20 z-20">
          <div className="glass border border-white/30 rounded-[28px] px-4 py-4 shadow-soft flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {states.map((item) => (
                <button
                  key={item}
                  onClick={() => setStateFilter(item)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    stateFilter === item ? 'bg-ocean text-white shadow-soft' : 'bg-white/70 text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {seasonOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setSeason(item)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    season === item ? 'bg-sunset text-white shadow-soft' : 'bg-white/70 text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {typeOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setType(item)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    type === item ? 'bg-sky-500 text-white shadow-soft' : 'bg-white/70 text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 auto-rows-[260px]">
        {filtered.map((item: Destination, idx: number) => {
          const isLarge = idx % 5 === 0
          const isWide = idx % 5 === 3
          return (
            <div
              key={item.id}
              className={`${isLarge ? 'lg:col-span-2 lg:row-span-2' : ''} ${isWide ? 'lg:col-span-2' : ''}`}
            >
              <div className="group relative h-full rounded-[28px] overflow-hidden shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <article className="h-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold">{item.name}</h3>
                      <span className="text-xs uppercase tracking-[0.3em] text-white/70">{item.state}</span>
                    </div>
                    <div className="mt-3 grid gap-2 text-sm text-white/80">
                      <p>Best season: {item.bestSeason}</p>
                      <p>Type: {item.type}</p>
                      <p>Famous food: {item.famousFood}</p>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}