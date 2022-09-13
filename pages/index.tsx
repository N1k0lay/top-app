import type {GetStaticProps, NextPage} from 'next';
import {Htag, Button, P, Tag, Rating, Input, Textarea} from "../components";
import React, {useState} from "react";
import {withLayout} from '../layout/Layout';
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";
import {API} from "../helpers/api";


function Home({menu}: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag={"h1"} children='Hello'/>
            <Button appearance={'primary'} children={'Click'} arrow={"right"} onClick={() => {
                console.log('clock');
            }}/>
            <Button appearance={'ghost'} children={'Click'} arrow={"down"}/>
            <P size={"s"} children={"Lorem impus"}/>
            <P size={"m"} children={"Lorem impus"}/>
            <P size={"l"} children={"Lorem impus"}/>
            <Tag size={"m"} color={"red"} children="m r"/>
            <Tag size={"m"} color={"green"} children="m g"/>
            <Tag size={"m"} color={"gray"} children="m p"/>
            <Tag color={"red"} children="m r"/>
            <Tag size={"s"} color={"ghost"} children="m g"/>
            <Tag size={"s"} color={"primary"} children="m p"/>
            <Rating rating={rating} isEditable setRating={setRating}/>
            <Input placeholder={'test'} />
            <Textarea placeholder={'test'} />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {firstCategory});
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