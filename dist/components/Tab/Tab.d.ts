import React from "react";
interface tab {
    id: string;
    label: string;
}
interface TabBarProps {
    tabs: tab[];
    className?: string;
    getTabId: (arg1: string) => void;
}
declare const TabBar: ({ tabs, getTabId, className }: TabBarProps) => React.JSX.Element;
export default TabBar;
