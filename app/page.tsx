import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Row from "@/components/Row";
import { categories } from "@/lib/mockData";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Trending Row (Large) */}
      <Row
        title="Trending Now"
        id="trending"
        isLargeRow={true}
      />

      {/* Other Categories */}
      {categories.filter(c => c.id !== 'trending').map((category) => (
        <Row
          key={category.id}
          title={category.title}
          id={category.id}
        />
      ))}

      {/* Spacer for bottom */}
      <div style={{ height: '50px' }} />
    </main>
  );
}
