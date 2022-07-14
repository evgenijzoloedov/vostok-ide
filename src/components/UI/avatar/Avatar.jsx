import React from 'react';
import styles from './Avatar.module.css'
import avatar from '../../../assets/images/avatar.png'

export const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <img src={avatar} alt={"avatar"} className={styles.image}/>
        </div>
    );
};

