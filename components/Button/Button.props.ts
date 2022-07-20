import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: string
    appearance: "primary" | "ghost"
    arrow?: 'right' | 'down' | 'none'
}