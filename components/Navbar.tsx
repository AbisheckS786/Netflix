"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.navbar} ${show && styles.black}`}>
            <div className={styles.left}>
                <div className={styles.logo}>NETFLIX</div>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>Home</li>
                    <li className={styles.navLink}>TV Shows</li>
                    <li className={styles.navLink}>Movies</li>
                    <li className={styles.navLink}>New & Popular</li>
                    <li className={styles.navLink}>My List</li>
                </ul>
            </div>

            <div className={styles.right}>
                {/* Search Icon (SVG) */}
                <svg
                    className={styles.icon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>

                {/* Bell Icon (SVG) */}
                <svg
                    className={styles.icon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>

                <img
                    className={styles.avatar}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="User"
                />
            </div>
        </div>
    );
}
