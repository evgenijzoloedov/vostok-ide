import React from 'react';
import {ConstructorBlocks} from "../../components/constructorBlocks";
import styles from './Constructor.module.css'
import {useParams} from "react-router-dom";
export const Constructor = () => {
    const {id} = useParams()

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>{id} - Constructor</h1>
            </div>
            <ConstructorBlocks/>
        </>
    );
};
