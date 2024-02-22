import React from 'react';
import styles from './home.module.css';
import Blogs from '../../components/blogs/blogs';
import Banner from '../../components/banner/banner';

const Home = () => {
    return (
        <div className={styles.homeMain}>
            <Banner />
            <Blogs />
        </div>
    )
}

export default Home;