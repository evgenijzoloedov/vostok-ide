import React from 'react';
import {BlockWrapper} from "../wrappers/blockWrapper";
import styles from './ConstructorBlocks.module.css'
import {Actions, Operators, Tools} from "../blocks/sections";


export const ConstructorBlocks = () => {
    return (

        <BlockWrapper className={styles.wrapper}>
            <Tools/>
            <Operators/>
            <Actions/>
        </BlockWrapper>
    );
};

