"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { movies } from "../lib/mockData";

export default function Hero() {
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        // Select a random movie
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
    }, []);

    if (!movie) return null;

    return (
        <div
            className={styles.hero}
            style={{
                backgroundImage: `url(${movie.backdrop_path})`,
            }}
        >
            <div className={styles.overlay} />

            <div className={styles.contents}>
                <h1 className={styles.title}>{movie.title}</h1>

                <div className={styles.buttons}>
                    <button className={`${styles.button} ${styles.playButton}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3L19 12L5 21V3Z" />
                        </svg>
                        Play
                    </button>
                    <button className={`${styles.button} ${styles.infoButton}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path d="M12 16V12" strokeWidth="2" />
                            <path d="M12 8H12.01" strokeWidth="2" />
                        </svg>
                        More Info
                    </button>
                </div>

                <p className={styles.description}>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}
