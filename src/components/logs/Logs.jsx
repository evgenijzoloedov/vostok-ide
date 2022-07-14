import React from 'react';
import {BlockWrapper} from "../wrappers/blockWrapper";
import styles from './Logs.module.css'
import {RowsList} from "../UI/rowsList";


const LOGS_MOCK = {
    title: "Логи",
    list: [
        {
            title: "Программа 1",
            badges: [{
                type: "alert",
                text: "Ошибка",

            },
                {
                    type: "additInfo",
                    text: "Позавчера",

                },
            ]
        },
        {
            title: "Программа 1",
            badges: [{
                type: "warning",
                text: "Предупреждение",

            },
                {
                    type: "additInfo",
                    text: "Вчера",
                },
            ]
        },
        {
            title: "Программа 1",
            badges: [{
                type: "info",
                text: "Информация",

            },
                {
                    type: "additInfo",
                    text: "00:02",
                },
            ]
        },
        {
            title: "Программа 1",
            badges: [{
                type: "alert",
                text: "Ошибка",

            },
                {
                    type: "additInfo",
                    text: "00:05",
                },
            ]
        },
        {
            title: "Программа 1",
            badges: [{
                type: "alert",
                text: "Ошибка",

            },
                {
                    type: "additInfo",
                    text: "00:10",
                },
            ]
        }
    ]
}


export const Logs = () => {
    return (
        <BlockWrapper className={styles.wrapper}>
            <RowsList title={LOGS_MOCK.title} list={LOGS_MOCK.list}/>
        </BlockWrapper>
    );
};

