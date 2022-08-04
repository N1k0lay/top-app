import React, {useContext} from 'react';
import styles from './Menu.module.css';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import CoursesIcon from '../Menu/icons/courses.svg';
import ServicesIcon from '../Menu/icons/services.svg';
import BooksIcon from '../Menu/icons/books.svg';
import ProductsIcon from '../Menu/icons/products.svg';
import {TopLevelCategory} from "../../interfaces/page.interfase";
import cn from "classnames";


const firsLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);


    const buildFirstLevel = () => {
        return <>
            {firsLevelMenu.map(m => (
                <div key={m.route}>
                    <a href={`/${m.route}`}>
                        <div className={cn(styles.firstLevel, {
                            [styles.firstLevelActive]: m.id == firstCategory
                        })}>{m.icon} <span>{m.name}</span></div>
                    </a>
                    {m.id == firstCategory && buildSecondLevel(m)}
                </div>
            ))}
        </>;
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (<div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.thirdLevelBlock, {
                            [styles.thirdLevelBlockOpen]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: false,
                })}>{p.category}</a>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};