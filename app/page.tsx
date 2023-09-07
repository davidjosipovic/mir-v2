import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import General from "@/components/General";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const images = [
  { category: '1', imageUrl: 'Preview/IMG_5775.JPG' },
  { category: '1', imageUrl: 'Preview/IMG_6075.JPG' },
  { category: '1', imageUrl: 'Preview/IMG_8017.JPG' },
  { category: '2', imageUrl: 'Preview/IMG_8258.JPG' },
  { category: '2', imageUrl: 'Preview/IMG_8339.JPG' },
  { category: '2', imageUrl: 'Preview/P1180835.JPG' },
  { category: '3', imageUrl: 'Preview/P1180868.JPG' },
  { category: '3', imageUrl: 'Preview/P1180964.JPG' },
  { category: '3', imageUrl: 'Preview/P1210246.JPG' },
  { category: '3', imageUrl: 'Preview/P1220216.JPG' },
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
