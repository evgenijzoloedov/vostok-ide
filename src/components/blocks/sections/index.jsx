import React from 'react';
import styles from './Section.module.css'
import {Block} from "../block";

function BlockList({title, children}) {
    return (
        <div className={styles.section}>
            <span className={styles.title}>
                {title}
            </span>
            <div className={styles.list}>
             {children}
            </div>
        </div>
    );
};


const TOOLS_BLOCKS = ["Комментарий"]

export const Tools = () => {
    return (
        <BlockList title={"Инструменты"}>
            {TOOLS_BLOCKS.map((tool, index) => <Block key={index} title={tool}/>)}
        </BlockList>
    )
}

const OPERATORS_BLOCKS = ["Цикл", "Условие", "Цикл", "Условие"]
export const Operators = () => {
    return (
        <BlockList title={"Операторы"}>
            {OPERATORS_BLOCKS.map((operator, index) => <Block key={index} title={operator}/>)}
        </BlockList>
    )
}
const ACTIONS_BLOCKS = ["Установить сигнал", "Присвоить переменную", "Установить сигнал", "Присвоить переменную"]
export const Actions = () => {
    return (
        <BlockList title={"Действия"}>

            {ACTIONS_BLOCKS.map((action, index) => <Block key={index} title={action}/>)}
        </BlockList>
    )
}
