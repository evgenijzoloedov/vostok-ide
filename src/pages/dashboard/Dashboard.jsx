import React from 'react';
import {Logs} from "../../components/logs";
import styles from './Dashboard.module.css'
import {useParams} from "react-router-dom";
export const Dashboard = () => {
    const {id} = useParams()
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {id} - homeTask
                </h1>
            </div>
            <Logs/>
        </>
    );
};
