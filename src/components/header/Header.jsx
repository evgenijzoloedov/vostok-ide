import React from 'react';
import styles from './Header.module.css'
import {BlockWrapper} from "../wrappers/blockWrapper";
import {Burger, Exit, Logo} from "../../assets/icons";
import {Avatar} from "../UI/avatar";
import cn from "classnames";

function Side({children, className}) {
    return (
        <div className={cn(styles.side, className)}>
            {children}
        </div>
    )
}

export const Header = () => {
    return (
        <header>
            <BlockWrapper className={styles.wrapper}>
                <Side className={styles.left}>
                    <Burger/>
                    <Logo/>
                </Side>
                <Side className={styles.right}>
                    <Avatar/>
                    <span className={styles.profileName}>
                        Алюков Данила
                    </span>
                    <Exit/>
                </Side>
            </BlockWrapper>
        </header>
    );
};

