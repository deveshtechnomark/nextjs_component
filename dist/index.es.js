import React from 'react';

var styles = {"avatarGroup":"index-module_avatarGroup__pGxEK","avatar":"index-module_avatar__6S1Wo"};

var Avatar = function Avatar(_a) {
  var imageUrl = _a.imageUrl,
    name = _a.name,
    className = _a.className,
    type = _a.type;
  var avatarTypeClass = type === "square" ? "rounded-none" : "rounded-full";
  var handleOnError = function handleOnError(e) {
    e.currentTarget.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/avatar-bg.png";
  };
  var Name = name === null || name === void 0 ? void 0 : name.toUpperCase();
  var Red = ["A", "F", "K", "P", "U", "Z"];
  var Blue = ["B", "G", "L", "Q", "V"];
  var Green = ["C", "H", "M", "R", "W"];
  var Purple = ["D", "I", "N", "S", "X"];
  return React.createElement("div", {
    className: styles.avatar
  }, imageUrl ? React.createElement("img", {
    className: "w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] display-block object-fit-cover border-2 border-borderColor ".concat(avatarTypeClass, " ").concat(className),
    src: imageUrl,
    alt: Name,
    onError: handleOnError
  }) : Name ? React.createElement("span", {
    className: "w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] text-borderColor border-2 border-borderColor text-sm sm:text-lg flex justify-center items-center ".concat(avatarTypeClass, " ").concat(Red.includes(Name.charAt(0)) ? "bg-red" : Blue.includes(Name.charAt(0)) ? "bg-blue" : Green.includes(Name.charAt(0)) ? "bg-green" : Purple.includes(Name.charAt(0)) ? "bg-purple" : "bg-yellow", " ").concat(className)
  }, Name.length <= 2 ? Name.slice(0, 2) : Name.match(/\s/) ? Name.split(" ").map(function (word) {
    return word.charAt(0);
  }).join("") : Name.charAt(0)) : React.createElement("img", {
    className: "w-[42px] sm:w-[52px] h-[42px] sm:h-[52px] display-block object-fit-cover ".concat(avatarTypeClass, " ").concat(className),
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/avatar-bg.png",
    alt: Name
  }));
};
var AvatarGroup = function AvatarGroup(_a) {
  var children = _a.children,
    _b = _a.type,
    type = _b === void 0 ? "circle" : _b,
    _c = _a.show,
    show = _c === void 0 ? 5 : _c,
    _d = _a.className,
    className = _d === void 0 ? "" : _d;
  if (React.Children.count(children) > show) {
    var remainingCount = React.Children.count(children) - show;
    var visibleChildren = React.Children.toArray(children).slice(0, show);
    return React.createElement("div", {
      className: "".concat(styles.avatarGroup, " flex items-center justify-center")
    }, visibleChildren.map(function (child, index) {
      return React.createElement(Avatar, {
        key: index,
        imageUrl: child.props.imageUrl,
        name: child.props.name,
        type: type,
        className: className
      });
    }), React.createElement(Avatar, {
      className: "!text-addText !bg-add ".concat(className),
      name: "+".concat(remainingCount),
      type: type
    }));
  }
  return React.createElement("div", {
    className: "avatar-group"
  }, children);
};

export { Avatar, AvatarGroup };
//# sourceMappingURL=index.es.js.map
