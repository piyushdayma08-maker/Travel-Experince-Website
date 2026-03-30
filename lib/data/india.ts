export type Destination = {
  id: string
  name: string
  state: string
  bestSeason: 'Winter' | 'Summer' | 'Monsoon'
  type: string
  famousFood: string
  description: string
  image: string
}

export type SeasonHighlight = {
  id: string
  title: string
  description: string
  image: string
}

export type StateCard = {
  id: string
  name: string
  highlights: string
  image: string
}

export type FoodItem = {
  id: string
  name: string
  state: string
  description: string
  image: string
}

export type Testimonial = {
  id: string
  name: string
  role: string
  text: string
  image: string
}

export const heroImage = 'https://images.unsplash.com/photo-1741788699169-29b2679d3c72?auto=format&fit=crop&w=1600&q=80'

export const seasonHighlights: SeasonHighlight[] = [
  {
    id: 'winter',
    title: 'Winter',
    description: 'Clear skies for Rajasthan forts, the Rann, and the Ganga ghats.',
    image: 'https://images.unsplash.com/photo-1706961121783-4ae6c933983a?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'summer',
    title: 'Summer',
    description: 'Head to hill stations and valleys when the plains heat up.',
    image: 'https://images.unsplash.com/photo-1711943728939-d50142512e5b?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'monsoon',
    title: 'Monsoon',
    description: 'Kerala backwaters, lush tea gardens, and waterfall drives.',
    image: 'https://images.unsplash.com/photo-1704365159747-1f7b8913044f?auto=format&fit=crop&w=1400&q=80'
  }
]

export const destinations: Destination[] = [
  {
    id: 'jaipur-hawa-mahal',
    name: 'Hawa Mahal, Jaipur',
    state: 'Rajasthan',
    bestSeason: 'Winter',
    type: 'Heritage',
    famousFood: 'Dal Baati Churma',
    description: 'Early morning light and quieter lanes make the Pink City feel softer and easier to walk.',
    image: 'https://images.unsplash.com/photo-1706961121783-4ae6c933983a?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'udaipur-city-palace',
    name: 'City Palace, Udaipur',
    state: 'Rajasthan',
    bestSeason: 'Winter',
    type: 'Heritage',
    famousFood: 'Gatte ki Sabzi',
    description: 'Lake Pichola sunsets and palace courtyards are best before the summer heat arrives.',
    image: 'https://images.unsplash.com/photo-1695956353120-54ce5e91632b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'varanasi-ghats',
    name: 'Ghats of Varanasi',
    state: 'Uttar Pradesh',
    bestSeason: 'Winter',
    type: 'Spiritual',
    famousFood: 'Kachori Sabzi',
    description: 'Arrive before sunrise for boat rides and a calmer view of the Ganga rituals.',
    image: 'https://images.unsplash.com/photo-1717070882156-108ae2c5c343?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'agra-taj-mahal',
    name: 'Taj Mahal, Agra',
    state: 'Uttar Pradesh',
    bestSeason: 'Winter',
    type: 'Heritage',
    famousFood: 'Petha',
    description: 'Cold mornings keep the marble bright and the queues manageable.',
    image: 'https://images.unsplash.com/photo-1741788699169-29b2679d3c72?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'goa-calangute',
    name: 'Calangute Beach',
    state: 'Goa',
    bestSeason: 'Winter',
    type: 'Beach',
    famousFood: 'Prawn Balchao',
    description: 'Dry season brings blue water, easier swims, and beach shacks in full swing.',
    image: 'https://images.unsplash.com/photo-1649227542141-840399b3b1bd?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'goa-old-goa',
    name: 'Old Goa Churches',
    state: 'Goa',
    bestSeason: 'Winter',
    type: 'Culture',
    famousFood: 'Bebinca',
    description: 'Quiet afternoons are best for slow walks through the Portuguese quarter.',
    image: 'https://images.unsplash.com/photo-1649227542141-840399b3b1bd?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'kerala-alappuzha',
    name: 'Alappuzha Backwaters',
    state: 'Kerala',
    bestSeason: 'Monsoon',
    type: 'Nature',
    famousFood: 'Karimeen Pollichathu',
    description: 'Houseboats feel most cinematic in the rains when the palms turn deep green.',
    image: 'https://images.unsplash.com/photo-1704365159747-1f7b8913044f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'kerala-munnar',
    name: 'Munnar Tea Hills',
    state: 'Kerala',
    bestSeason: 'Monsoon',
    type: 'Mountains',
    famousFood: 'Appam with Stew',
    description: 'Misty mornings and tea gardens make the drive from Kochi worth the climb.',
    image: 'https://images.unsplash.com/photo-1704365159747-1f7b8913044f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'himachal-manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    bestSeason: 'Winter',
    type: 'Mountains',
    famousFood: 'Siddu',
    description: 'Snowfall evenings and cedar-lined stays make Manali feel like a winter retreat.',
    image: 'https://images.unsplash.com/photo-1711943728939-d50142512e5b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'himachal-spiti',
    name: 'Spiti Valley',
    state: 'Himachal Pradesh',
    bestSeason: 'Summer',
    type: 'Mountains',
    famousFood: 'Thukpa',
    description: 'Roads open in summer, and the high desert feels stark and quiet.',
    image: 'https://images.unsplash.com/photo-1711943728939-d50142512e5b?auto=format&fit=crop&w=1600&q=80'
  }
]

export const stateCards: StateCard[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    highlights: 'Jaipur, Udaipur, Jaisalmer',
    image: 'https://images.unsplash.com/photo-1706961121783-4ae6c933983a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    highlights: 'Alappuzha, Munnar, Kochi',
    image: 'https://images.unsplash.com/photo-1704365159747-1f7b8913044f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    highlights: 'Manali, Spiti, Dharamshala',
    image: 'https://images.unsplash.com/photo-1711943728939-d50142512e5b?auto=format&fit=crop&w=1200&q=80'
  }
]

export const foods: FoodItem[] = [
  {
    id: 'rajasthan-dal-baati',
    name: 'Dal Baati Churma',
    state: 'Rajasthan',
    description: 'Slow cooked dal with baked wheat baatis and a sweet crumble.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/%22Delectable_Dal_Baati_Churma%22.jpg'
  },
  {
    id: 'up-kachori',
    name: 'Kachori Sabzi',
    state: 'Uttar Pradesh',
    description: 'A hot breakfast ritual in the lanes of Banaras.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Kachori-sabzi.jpg'
  },
  {
    id: 'goa-prawn-balchao',
    name: 'Prawn Balchao',
    state: 'Goa',
    description: 'A spicy, tangy seafood staple that pairs with rice.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Prawns_Balchao.jpg?width=1200'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: 'ananya',
    name: 'Ananya Rao',
    role: 'Product Designer, Bengaluru',
    text: 'We planned Rajasthan in January. The mornings were calm, and the palace visits were easy without the heat.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rahul',
    name: 'Rahul Mehta',
    role: 'Founder, Mumbai',
    text: 'Tried Spiti in summer. Roads were rough but the skies were unreal and the homestays felt honest.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'meera',
    name: 'Meera Iyer',
    role: 'Writer, Chennai',
    text: 'Kerala in monsoon was exactly right. Quiet backwaters, green everywhere, and no crowds.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
  }
]
