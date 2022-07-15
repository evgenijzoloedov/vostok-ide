import React from 'react';
import styles from './RowItem.module.css'
import {BlockWrapper} from "../../wrappers/blockWrapper";
import {Badge} from "../badge";
import {Link} from "react-router-dom";


function Badges({badges}) {
    return (
        <div className={styles.badgesWrapper}>
            {badges.map((badge, index) => <Badge
                key={index}
                type={badge.type}
                text={badge.text}
            />)}
        </div>
    )
}


export const RowItem = ({
                            item
                        }) => {
    return (
        <BlockWrapper className={styles.wrapper}>

            {item?.type === 'link' ? <Link className={styles.rowWrapper} to={item.to}>

                <div className={styles.title}>{item.title}</div>
                {item.badges && item?.badges.length && <Badges badges={item.badges}/>}
            </Link> : <div className={styles.rowWrapper}>

                <div className={styles.title}>{item.title}</div>
                {item.badges && item?.badges.length && <Badges badges={item.badges}/>}
            </div>}

        </BlockWrapper>
    );
};

