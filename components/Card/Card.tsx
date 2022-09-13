import React, {ForwardedRef, forwardRef} from 'react';
import {CardProps} from "./Card.props";
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = forwardRef(({children, color = "white", className, ...props}: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })}
             ref={ref}
             {...props}>
            {children}
        </div>
    );
});