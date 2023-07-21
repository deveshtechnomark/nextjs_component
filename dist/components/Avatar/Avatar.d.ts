import { FC, ReactNode } from "react";
interface AvatarProps {
    imageUrl?: string;
    name?: string;
    className?: string;
    type?: string;
    badge?: boolean;
    badgeText?: string;
    variant?: string;
}
declare const Avatar: FC<AvatarProps>;
interface AvatarGroupProps {
    children: ReactNode[];
    type?: string;
    show?: number;
    className?: string;
    variant?: string;
}
declare const AvatarGroup: FC<AvatarGroupProps>;
export { Avatar, AvatarGroup };
