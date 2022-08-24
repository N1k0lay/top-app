import React from 'react';
import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import Logo from "../../layout/logo.svg";
import cn from "classnames";

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <Logo className={styles.logo}/>
            <div>Search</div>
            <Menu/>
        </div>
    );
};