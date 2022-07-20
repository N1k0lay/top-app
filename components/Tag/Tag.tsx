import React from 'react';
import styles from './Tag.module.css';
import {TagProps} from "./Tag.props";
import cn from 'classnames';

export const Tag = ({size = 'm', children, color = 'ghost', className, href, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.s]: size == "s",
            [styles.m]: size == "m",
            [styles.ghost]: color == "ghost",
            [styles.primary]: color == "primary",
            [styles.green]: color == "green",
            [styles.red]: color == "red",
        })} {...props}>
            {href
                ? <a href={href}>{children}</a>
                : <>{children}</>
            }
        </div>
    );
};