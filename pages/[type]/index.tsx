import type {GetStaticProps, NextPage} from 'next';
import {Htag, Button, P, Tag, Rating} from "../../components";
import React, {useState} from "react";
import axios from 'axios';
import {MenuItem} from "../../interfaces/menu.interface";
import { withLayout } from '../../layout/Layout';
import {GetStaticPaths, GetStaticPropsContext} from "next";
import {firstLevelMenu} from "../../helpers/helpers";
import {ParsedUrlQuery} from "querystring";


function Type({firstCategory}:TypeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
Type: {firstCategory}
        </>
    );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths =  () => {
    return {
        paths: firstLevelMenu.map(m => `/${m.route}`),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if(!firstCategoryItem) {
        return {
            notFound: true
        };
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {firstCategory: firstCategoryItem.id});
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};

interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number
}