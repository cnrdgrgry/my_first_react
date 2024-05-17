import React from "react";
import GalleryItem from "./GalleryItem";
import styles from "./Gallery.module.css";

export default function DisplayGallery(props) {
  return (
    <div className={styles.container}>
      {props.items.map((item) => (
        <GalleryItem
          key={item.id}
          index={item.id}
          name={item.bicycles}
          sunset={item.sunset}
          image={item.image}
        />
      ))}
    </div>
  );
}
