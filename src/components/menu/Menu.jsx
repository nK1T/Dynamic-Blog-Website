import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "@/components/menuPost/MenuPost";
import MenuCategories from "../menuCategories/MenuCategories";

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false}/>
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>
      <h2 className={styles.subtitle}>Chosen by the Editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPost withImage={true}/>
    </div>
  );
}

export default Menu;
