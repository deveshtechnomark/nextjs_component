import { FC, ReactNode } from "react";
import "./index.css";
import "form-elements/dist/index.css";
interface AvatarProps {
    imageUrl?: string;
    name?: string;
    className?: string;
    type?: string;
    badge?: boolean;
    badgeText?: string;
}
declare const Avatar: FC<AvatarProps>;
interface AvatarGroupProps {
    children: ReactNode[];
    type?: string;
    show?: number;
    className?: string;
}
declare const AvatarGroup: FC<AvatarGroupProps>;
export { Avatar, AvatarGroup };
