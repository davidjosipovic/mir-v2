import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import General from "@/components/General";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const images = [
  { category: 'A. FERRI 37', imageUrl: '/Preview/IMG_5775.JPG' },
  { category: 'A. FERRI 37', imageUrl: '/Preview/P1220216.JPG' },
  { category: 'PUTINI', imageUrl: '/Preview/IMG_8017.JPG' },
  { category: 'ARNOLONGO 2A', imageUrl: '/Preview/IMG_8258.JPG' },
  { category: 'PUTINI', imageUrl: '/Preview/IMG_8339.JPG' },
  { category: 'PUTINI', imageUrl: '/Preview/P1180835.JPG' },
  { category: 'PUTINI', imageUrl: '/Preview/P1180868.JPG' },
  { category: 'ARNOLONGO 2A', imageUrl: '/Preview/IMG_6075.JPG' },
];

export default function Home() {
  return (
    <main>
      <Hero/>
      <General/>
      <Services/>
      <Gallery images={images}/>
      <About/>
      <Contact/>


    </main>
  )
}
