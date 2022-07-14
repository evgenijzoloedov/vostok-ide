import React from 'react';
import styles from './Block.module.css'
import {BlockWrapper} from "../../wrappers/blockWrapper";
export const Block = ({title}) => {
    return (
        <div className={styles.wrapper}>
            <BlockWrapper className={styles.container}>

            </BlockWrapper>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
};

