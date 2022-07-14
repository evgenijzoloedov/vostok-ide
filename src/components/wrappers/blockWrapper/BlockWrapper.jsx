import React from 'react';
import styles from './BlockWrapper.module.css'
import cn from 'classnames'

export const BlockWrapper = ({
    children,
    className
                             }) => {
    return (
        <div className={cn(styles.wrapper,className)}>
            {children}
        </div>
    );
};

