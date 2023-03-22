import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import { Features } from '@/components/Features'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Everything Starts as a Square - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  )
}
