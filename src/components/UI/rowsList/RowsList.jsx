import React from 'react';
import styles from './RowsList.module.css'
import {RowItem} from "../rowItem";




export const RowsList = ({title, list}) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>
                {title}
            </span>
            <div className={styles.list}>
                {
                    list.map((item, index)=><RowItem key={index} item={item}/>)
                }
            </div>
        </div>
    );
};

