import React from 'react';
import styles from './Sidebar.module.css'
import {BlockWrapper} from "../wrappers/blockWrapper";
import {RowsList} from "../UI/rowsList";
import {RowItem} from "../UI/rowItem";


const sideBarOptions = [
    {
        title: "Программы",


        list: [
            {
                title: "Программа 1",
                type:"link",
                to:"/program/1"
            },
            {
                title: "Программа 2",
                type:"link",
                to:"/program/2"
            },
        ]
    },
    {
        title: "Мои задания",
        list: [
            {
                title: "Домашнее задание 1",
                type:"link",
                to:"/hometask/1"
            },
        ]
    },
    {
        title: "Устройства",
        list: [
            {
                title: "Умный сад",
                badges: [{
                    type: "text",
                    text: "Онлайн"
                }]
            },
        ]
    },
]


export const Sidebar = () => {
    return (
        <BlockWrapper className={styles.wrapper}>
            <div className={styles.optionWrapper}>
                {sideBarOptions.map((option, index) => <RowsList list={option.list} title={option.title}/>)}
            </div>
            <div>
                <RowItem item={{title:"Обучение"}}/>
            </div>
        </BlockWrapper>
    );
};

