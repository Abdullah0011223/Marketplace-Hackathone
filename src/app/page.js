'use client'
import React from 'react'
import Hero from './components/HeroSecP1'
import Table from './components/HeroSecP2'
import TopPicks from './components/TopPicks'
import NewArrival from './components/NewArrival'
import Blog from './components/Blog'
import InstagramBanner from './components/InstagramBanner'

const Page = () => {
  return (
    <div className='overflow-hidden w-dvw min-h-screen '>
      <Hero/>
      <Table/>
      <TopPicks />
      <NewArrival />
      <Blog/>
      <InstagramBanner />
    </div>
  )
}

export default Page

