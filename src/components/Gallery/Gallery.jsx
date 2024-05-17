import styles from "./Gallery.module.css";
import DisplayGallery from "./DisplayGallery";
import Items from "./GalleryItems.json";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <p>
        Some kind of gallery using some of my own images to demonstrate the
        passing of 'props' through components.
      </p>
      <DisplayGallery items={Items} />
    </div>
  );
}
