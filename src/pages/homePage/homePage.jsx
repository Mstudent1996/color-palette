import palettes from "../../assets/data/palettes.json";
import PaletteCard from "../../components/paletteCard/paletteCard";
import styles from "./homePage.module.css";
import FilterPanel from "../../components/filterPanel/filterPanel";
import { useMemo, useState } from "react";

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedColor, setSelectedColor] = useState(""); 

  // Henter alle unikke tags og farver
  const { allTags, allHues } = useMemo(() => {
    const tags = new Set();
    const hues = new Set();
    palettes.forEach((p) => {
      (p.tags || []).forEach((t) => tags.add(t));
      (p.hues || []).forEach((h) => hues.add(h));
    });

    // Sorterer tags og farver alfabetisk
    return {
      allTags: Array.from(tags).sort(), 
      allHues: Array.from(hues).sort(),
    };
  }, []);

  // Filtrerer paletter baseret på valgte tag og farve
  const filteredPalettes = useMemo(() => {
    return palettes.filter((p) => {
      const hasTag = !selectedTag || (p.tags && p.tags.includes(selectedTag));
      const hasHue =
        !selectedColor || (p.hues && p.hues.includes(selectedColor));
      return hasTag && hasHue;
    });
  }, [selectedTag, selectedColor]);

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Palettes</h1>

      <FilterPanel
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        tags={allTags} 
        hues={allHues} 
      />

      <div className={styles.container}>
        {filteredPalettes.length ? (
          filteredPalettes.map((p) => (
            <PaletteCard key={p.id} id={p.id} name={p.name} colors={p.colors} />
          ))
        ) : (
          <p>No palettes matches your chosen filter.</p>
        )}
      </div>
    </div>
  );
}
