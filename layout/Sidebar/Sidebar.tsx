import React from 'react';
import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import Logo from "../../layout/logo.svg";
import cn from "classnames";
import {Search} from "../../components";

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <Logo className={styles.logo}/>
            <Search />
            <Menu/>
        </div>
    );
};