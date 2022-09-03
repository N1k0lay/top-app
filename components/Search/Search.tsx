import React, {useState} from 'react';
import {SearchProps} from "./Search.props";
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg';
import {useRouter} from "next/router";

export const Search = ({className, ...props}: SearchProps):JSX.Element => {

    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        void router.push({
            pathname: `/search`,
            query: {
                q: search,
            }
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key == 'Enter') {
            goToSearch();
        }
    };

    return (
        <div className={styles.search} {...props}>
            <Input
                placeholder={"Поиск..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.input}
                onKeyDown={handleKeyDown}
            ></Input>
            <Button
                appearance={"primary"}
                className={styles.button}
                onClick={goToSearch}
            > <GlassIcon/>
            </Button>
        </div>
    );
};