import React, { FC, ReactNode, SyntheticEvent } from "react";
import "./index.css";

interface AvatarProps {
  imageUrl?: string;
  name?: string;
  className?: string;
  type?: string;
}

const Avatar: FC<AvatarProps> = ({ imageUrl, name, className, type }) => {
  const avatarTypeClass = type === "square" ? "rounded-none" : "rounded-full";

  const handleOnError = (e: SyntheticEvent<HTMLImageElement>): void => {
    e.currentTarget.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/avatar-bg.png";
  };

  const Name = name?.toUpperCase();

  const Red = ["A", "F", "K", "P", "U", "Z"];
  const Blue = ["B", "G", "L", "Q", "V"];
  const Green = ["C", "H", "M", "R", "W"];
  const Purple = ["D", "I", "N", "S", "X"];
  const Yellow = ["E", "J", "O", "T", "Y"];

  return (
    <div className="avatar">
      {imageUrl ? (
        <img
          className={`w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] display-block object-fit-cover border-2 border-borderColor ${avatarTypeClass} ${className}`}
          src={imageUrl}
          alt={Name}
          onError={handleOnError}
        />
      ) : Name ? (
        <span
          className={`w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] text-borderColor border-2 border-borderColor text-sm sm:text-lg flex justify-center items-center ${avatarTypeClass} ${
            Red.includes(Name.charAt(0))
              ? "bg-red"
              : Blue.includes(Name.charAt(0))
              ? "bg-blue"
              : Green.includes(Name.charAt(0))
              ? "bg-green"
              : Purple.includes(Name.charAt(0))
              ? "bg-purple"
              : "bg-yellow"
          } ${className}`}
        >
          {Name.length <= 2
            ? Name.slice(0, 2)
            : Name.match(/\s/)
            ? Name.split(" ")
                .map((word) => word.charAt(0))
                .join("")
            : Name.charAt(0)}
        </span>
      ) : (
        <img
          className={`w-[42px] sm:w-[52px] h-[42px] sm:h-[52px] display-block object-fit-cover ${avatarTypeClass} ${className}`}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/avatar-bg.png"
          alt={Name}
        />
      )}
    </div>
  );
};

interface AvatarGroupProps {
  children: ReactNode[];
  type?: string;
  show?: number;
  className?: string;
}

const AvatarGroup: FC<AvatarGroupProps> = ({
  children,
  type = "circle",
  show = 5,
  className = "",
}) => {
  if (React.Children.count(children) > show) {
    const remainingCount = React.Children.count(children) - show;
    const visibleChildren = React.Children.toArray(children).slice(0, show);

    return (
      <div className="avatar-group flex items-center justify-center">
        {visibleChildren.map((child, index) => (
          <Avatar
            key={index}
            imageUrl={(child as React.ReactElement<AvatarProps>).props.imageUrl}
            name={(child as React.ReactElement<AvatarProps>).props.name}
            type={type}
            className={className}
          />
        ))}
        <Avatar
          className={`!text-addText !bg-add ${className}`}
          name={`+${remainingCount}`}
          type={type}
        />
      </div>
    );
  }

  return <div className="avatar-group">{children}</div>;
};

export { Avatar, AvatarGroup };
