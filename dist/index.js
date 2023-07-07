'use strict';

var React = require('react');
var tooltip = require('tooltip');
require('tooltip/dist/index.css');

var CrossIcon = function CrossIcon(_ref) {
  var icon = _ref.icon;
  return React.createElement("svg", {
    width: icon ? "20" : "16",
    height: icon ? "20" : "16",
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    x: "0.970703",
    y: "7.97021",
    width: "16",
    height: "2",
    rx: "1",
    fill: "white"
  }), React.createElement("rect", {
    x: "7.9707",
    y: "16.9702",
    width: "16",
    height: "2",
    rx: "1",
    transform: "rotate(-90 7.9707 16.9702)",
    fill: "white"
  }));
};

var styles = {"iconShow":"index-module_iconShow__nJFy-","left":"index-module_left__jAupb","slideLeft":"index-module_slideLeft__9Zi9k","hide":"index-module_hide__Vy-WG","show":"index-module_show__TdlYa","crossAnimation":"index-module_crossAnimation__B8P6q","cross":"index-module_cross__QIWEY","plusAnimation":"index-module_plusAnimation__6FYrV","plus":"index-module_plus__78WbQ"};

var SpeedDial = function SpeedDial(_a) {
  var open = _a.open,
    large = _a.large,
    listItems = _a.listItems;
  var _b = React.useState(false),
    isListVisible = _b[0],
    setListVisible = _b[1];
  var _c = React.useState(-1),
    hoveredItemIndex = _c[0],
    setHoveredItemIndex = _c[1];
  var toggleList = function toggleList() {
    setListVisible(!isListVisible);
  };
  var handleItemHover = function handleItemHover(index) {
    setHoveredItemIndex(index);
  };
  var handleItemLeave = function handleItemLeave() {
    setHoveredItemIndex(-1);
  };
  return React.createElement("div", {
    className: "relative"
  }, React.createElement("span", null, React.createElement("span", {
    className: "absolute flex items-center justify-center ".concat(large ? "w-fit h-fit text-xl p-[15px]" : "w-fit h-fit text-base p-[10px]", " ").concat(open ? "ml-2" : "mt-2", " ").concat(isListVisible ? "".concat(styles.crossAnimation, " bg-slatyGrey") : "".concat(styles.plusAnimation, " bg-[#00B0AE]"), " text-white border-none outline-none rounded-full"),
    onClick: toggleList
  }, React.createElement(CrossIcon, {
    icon: large
  }))), isListVisible && React.createElement("div", {
    className: "absolute ".concat(styles.iconShow, " ").concat(open ? "right-0 -top-2 gap-1" : "bottom-0 flex-col  gap-2", " flex")
  }, listItems.map(function (item, index) {
    if (!open) {
      return React.createElement("span", {
        key: index,
        className: "flex items-center justify-center ".concat(large ? "w-fit h-fit text-xl p-[15px]" : "w-fit h-fit text-base p-[10px]", " bg-lightSilver hover:bg-slatyGrey text-darkCharcoal hover:text-pureWhite border-none outline-none ").concat(hoveredItemIndex === index && !open ? "".concat(styles.hide) : "rounded-full"),
        onMouseEnter: function onMouseEnter() {
          return handleItemHover(index);
        },
        onMouseLeave: handleItemLeave,
        onClick: item.action
      }, hoveredItemIndex === index && !open && React.createElement("span", {
        className: "absolute ".concat(styles.left, " flex w-max bg-slatyGrey text-pureWhite pl-3 pr-2 ").concat(large ? "py-[11px] right-[40px]" : "py-[6px] right-[30px]")
      }, item.hoverText), React.createElement("span", {
        className: "".concat(large ? "w-[20px] h-[20px]" : "w-[16px] h-[16px]")
      }, item.icon));
    } else {
      return React.createElement(tooltip.Tooltip, {
        position: "top",
        content: item.hoverText,
        key: index
      }, React.createElement("span", {
        className: "flex items-center justify-center ".concat(large ? "w-fit h-fit text-xl p-[15px]" : "w-fit h-fit text-base p-[10px]", " bg-lightSilver text-darkCharcoal border-none outline-none ").concat(hoveredItemIndex === index && !open ? "rounded-r-full" : "rounded-full"),
        onMouseEnter: function onMouseEnter() {
          return handleItemHover(index);
        },
        onMouseLeave: handleItemLeave,
        onClick: item.action
      }, item.icon));
    }
  })));
};

exports.SpeedDial = SpeedDial;
//# sourceMappingURL=index.js.map
