"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex">
      <ul className="flex">
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li className={styles.dropdown}>
          <button
            className={styles.link}
            onClick={() => setOpen((prev) => !prev)}
            type="button"
          >
            Our Service
          </button>
          {open && (
            <ul className={styles.dropdownMenu}>
              <li>
                <Link
                  href="/ourservice/web"
                  className={styles.dropdownItem}
                  onClick={() => setOpen(false)}
                >
                  Web
                </Link>
              </li>
              <li>
                <Link
                  href="/ourservice/mobile"
                  className={styles.dropdownItem}
                  onClick={() => setOpen(false)}
                >
                  Mobile
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
