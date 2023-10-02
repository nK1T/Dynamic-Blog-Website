import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuPost.module.css'

const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ankit Giri</span>
              <span className={styles.date}>-11.08.22</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage &&( <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John siri</span>
              <span className={styles.date}>-21.06.22</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ramesh Pal</span>
              <span className={styles.date}>-01.12.22</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ankit Giri</span>
              <span className={styles.date}>-11.08.22</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPost
