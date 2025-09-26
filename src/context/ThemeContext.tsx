"use client";

import { ReactNode, useContext, useEffect, useState } from "react"
import { createContext } from "react";

type Theme = "light" | "dark";

type themeType = {
    theme: string, 
    toggleTheme: () => void
}

export const ThemeContext = createContext<themeType | undefined>(undefined);

export default function ThemeContextProvider({children} : {children: ReactNode}){
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if(!savedTheme) return;
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
            return;
        }
        setTheme("light");
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}