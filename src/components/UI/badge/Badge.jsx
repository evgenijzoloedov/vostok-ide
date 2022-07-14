import React from 'react';
import styles from './Badge.module.css'
import {BlockWrapper} from "../../wrappers/blockWrapper";
import cn from "classnames";
// type types=alert|warning|info|additInfo|text


export const Badge = ({
                          text,
                          type = "text"
                      }) => {
    return (
        <BlockWrapper className={styles.wrapper}>
            <span className={cn(styles.badge, styles[type])}>
                {text}
            </span>
        </BlockWrapper>
    );
};

