import React, {useEffect, useReducer} from 'react';
import {TopPageComponentProps} from "./TopPageComponent.props";
import {Advantages, HhData, Htag, Product, Sort, Tag} from "../../components";
import styles from "../TopPageComponent/TopPageComponent.module.css";
import {TopLevelCategory} from '../../interfaces/page.interfase';
import {SortEnum} from '../../components/Sort/Sort.props';
import {SortReducer} from './sort.reducer';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {

    const [{products: sortedProducts, sort}, dispathSort] = useReducer(SortReducer, {products, sort: SortEnum.Rating});

    useEffect(() => {
        dispathSort({type: "reset", initialState: products});
    }, [products]);

    const setSort = (sort: SortEnum) => {
        dispathSort({type: sort});
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag={"h1"}>{page.title}</Htag>
                {products && <Tag color={"gray"} size={"m"}>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p}></Product>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag={"h2"}>Вакансии - {page.category}</Htag>
                {products && <Tag color={"red"} size={"m"}>hh.ru</Tag>}
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag={"h2"}>Преимущества</Htag>
                <Advantages advantages={page.advantages}/>
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag={"h2"}>Получаемые навыки</Htag>
            {page.tags.map(t => (<Tag color={'primary'} key={t}>{t}</Tag>))}
        </div>
    );
};