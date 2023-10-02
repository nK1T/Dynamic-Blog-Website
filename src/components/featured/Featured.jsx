import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Ankit Giri here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="logo" className={styles.image}fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quos dignissimos ad? Quibusdam magni illo ullam eligendi veniam rerum iusto deleniti, magnam pariatur quae ex, velit blanditiis vitae. At, provident.
          Quasi quos molestiae enim autem quod minus magnam quaerat atque, tenetur dicta? Ea volu</p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
