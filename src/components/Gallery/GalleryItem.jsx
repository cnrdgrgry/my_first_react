import React from "react";
import styles from "./Gallery.module.css";

export default function GalleryItem({ bicycles, sunset, image, index }) {
  return (
    <div className={styles.card}>
      <h3>{`Picture number ${index}`}</h3>
      <p>
        Is it Sunset? <span>{sunset ? "Yes" : "No"}</span>
      </p>
      <p>
        Are there bicycles? <span>{bicycles ? "Yes" : "No"}</span>
      </p>
      <img src={image} className={styles.galleryimg} alt="Gallery" />
    </div>
  );
}
