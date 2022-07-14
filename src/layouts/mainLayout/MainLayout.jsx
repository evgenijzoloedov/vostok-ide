import React from 'react';
import styles from './MainLayout.module.css'
import {Header} from "../../components/header";
import {Sidebar} from "../../components/sidebar";
export const MainLayout = ({children}) => {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <Header/>
                <main className={styles.main}>
                    <Sidebar/>
                    {children}
                </main>
            </div>
        </div>
    );
};

