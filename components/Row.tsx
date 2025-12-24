"use client";

import { useEffect, useState } from "react";
import styles from "./Row.module.css";
import { movies } from "../lib/mockData";

interface RowProps {
    title: string;
    id: string; // category id
    isLargeRow?: boolean;
}

export default function Row({ title, id, isLargeRow }: RowProps) {
    const [rowMovies, setRowMovies] = useState<any[]>([]);

    useEffect(() => {
        if (id === 'trending') {
            // Just show all for trending or shuffle
            setRowMovies(movies);
        } else {
            // Filter by genre_id
            const filtered = movies.filter((movie) => movie.genre_ids.includes(id));
            setRowMovies(filtered);
        }
    }, [id]);

    return (
        <div className={styles.row}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.posters}>
                {rowMovies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`${styles.poster} ${isLargeRow && styles.posterLarge}`}
                        src={isLargeRow ? movie.poster_path : movie.backdrop_path}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}
