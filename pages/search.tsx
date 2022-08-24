import type {GetStaticProps, NextPage} from 'next';
import {Htag, Button, P, Tag, Rating} from "../components";
import React, {useState} from "react";
import {withLayout} from '../layout/Layout';
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";


function Search(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>

        </>
    );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {firstCategory});
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number
}