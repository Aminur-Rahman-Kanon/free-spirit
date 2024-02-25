import React from "react";
import styles from './blogs.module.css';
import religion from '../../assets/religion.jpg';
import { Link } from 'react-router-dom';
import data from "../../data/data";

const Blogs = () => {
    return (
        <div className={styles.blogsContainer}>
            <h1 className={styles.blogsH1}>Blogs</h1>
            <div className={styles.blogs}>
                {Object.values(data).map(item => <Link key={item.heading} to={`/blog/${item.heading}`} className={styles.blog}>
                    <div className={styles.blogImgContainer}>
                        <img src={item.img} className={styles.blogImg}/>
                    </div>
                    <div className={styles.blogDetailsContainer}>
                        <h2 className={styles.blogH2}>{item.heading}</h2>
                        {item.p.slice(0, 2).map((para, idx) => <p key={idx} className={styles.blogP}>{para}</p>)}
                        <div className={styles.infoContainer}>
                            <span className={styles.info}>By Aminur Rahman</span>
                            <span className={styles.info}>{item.date}</span>
                        </div>
                    </div>
                </Link>)}
            </div>
        </div>
    )
}

export default Blogs;
