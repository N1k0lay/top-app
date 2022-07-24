import type {NextPage} from 'next';
import {Htag, Button, P, Tag, Rating} from "../components";
import React, {useState} from "react";
import {withLayout } from '../layout/Layout';


const Home: NextPage = () => {
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
        </>
    );
};

export default withLayout(Home);