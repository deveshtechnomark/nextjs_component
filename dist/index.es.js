import React from 'react';

var Style = {"absolute":"Spinner-module_absolute__BxqTV","relative":"Spinner-module_relative__1IuyP","m-2":"Spinner-module_m-2__g-QHD","flex":"Spinner-module_flex__DDqeX","h-[1em]":"Spinner-module_h---1em--__cR4gd","w-[1em]":"Spinner-module_w---1em--__9S8zn","transform":"Spinner-module_transform__0HEXk","flex-col":"Spinner-module_flex-col__ibILU","overflow-hidden":"Spinner-module_overflow-hidden__PUdoA","rounded-full":"Spinner-module_rounded-full__p9xZH","indent-[-9999em]":"Spinner-module_indent----9999em--__btvSg","text-primary":"Spinner-module_text-primary__-Mx4i","lower_half":"Spinner-module_lower_half__VkFKL","lower_half_loading":"Spinner-module_lower_half_loading__uuj-L","lower_half_round":"Spinner-module_lower_half_round__oxAgi","upper_half":"Spinner-module_upper_half__MZbl4","upper_half_loading":"Spinner-module_upper_half_loading__9DEwA","upper_half_round":"Spinner-module_upper_half_round__BovgT"};

var Spinner = function Spinner(_a) {
  var size = _a.size;
  var loaderStyle = {
    fontSize: size || "16px"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col relative m-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(Style.upper_half, " text-primary indent-[-9999em] overflow-hidden w-[1em] h-[1em] rounded-full transform translate-z-0"),
    style: loaderStyle
  }, "Loading..."), /*#__PURE__*/React.createElement("div", {
    className: "".concat(Style.lower_half, " absolute text-primary indent-[-9999em] overflow-hidden w-[1em] h-[1em] rounded-full transform translate-z-0"),
    style: loaderStyle
  }, "Loading..."));
};

export { Spinner };
