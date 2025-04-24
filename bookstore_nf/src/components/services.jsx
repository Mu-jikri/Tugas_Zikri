import React from "react";
import styles from "../styles/services.module.css";
import books from "../utils/books";

function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Pemenang Penghargaan</h2>
      <div className={styles.cardContainer}>
        {books.map((book) => (
          <div key={book.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{book.title}</h3>
            <p className={styles.cardAuthor}>Penulis: {book.author}</p>
            <p className={styles.cardYear}>Tahun: {book.year}</p>
            <p className={styles.cardDescription}>{book.description}</p>
            <img
              className={styles.cardImage}
              src={book.image}
              alt={book.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
