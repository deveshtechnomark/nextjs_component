import React, { useState } from "react";

import style from "./Tab.module.scss";

interface tab {
    id: string;
    label: string;
}

interface TabBarProps {
    tabs: tab[];
    className?: string;
    getTabId: (arg1: string) => void;
}

const TabBar = ({ tabs, getTabId, className }: TabBarProps) => {
    const [tabId, setTabId] = useState("1");
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: any) => {
        setTabId(e.target.id);
        getTabId(e.target.id);
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 700);
    };

    return (
        <ul
            className={`h-12 flex flex-row bg-transparent overflow-x-auto ${className}`}
        >
            {tabs.map((tab, index: any) => (
                <li
                    key={index + 1}
                    id={tab.id}
                    className={`${style.tab} ${tabId === tab.id ? style.active : ""}`}
                    onClick={handleClick}
                >
                    {isClicked && tabId === tab.id && (
                        <span className={`${style.tab__ripple}`}></span>
                    )}
                    {tab.label}
                </li>
            ))}
        </ul>
    );
};

export default TabBar;