import React, { useEffect } from "react";
import styles from './blog.module.css';
import { useParams } from 'react-router-dom'; 
import data from "../../data/data";

const Blog = () => {
    const { blogId } = useParams();

    useEffect(() => {
        // window.scrollTo(0, 0);
    })
    
    if (!blogId) return;

    const blogToRender = Object.values(data).filter(item => item.heading === blogId);
    
    let displayBlog = <h2 className={styles.blogDefault}>Nothing to Display</h2>;
    if (blogToRender.length){
        displayBlog = blogToRender.map(blog => <div className={styles.blogContainer}>
            <div className={styles.blogImgContainer}>
                <img src={blog.img} className={styles.blogImg} />
            </div>
            <div className={styles.blogDetailsContainer}>
                <h1 className={styles.blogHeading}>{blog.heading}</h1>
                {blog.p.map((para, idx) => <p key={idx} className={styles.blogP}>{para}</p>)}
            </div>
        </div>)
    }
    return (
        <div className={styles.blogMain}>
            {displayBlog}
        </div>
    )
}

export default Blog;
