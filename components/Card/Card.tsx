import React from 'react';
import {CardProps} from "./Card.props";
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({children, color = "white", className, ...props}: CardProps): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })}{...props}>
            {children}
        </div>
    );
};