import React, { useState, useEffect } from 'react';

var styles = {"comment_stars_input":"index-module_comment_stars_input__kqCSq","comment_stars_view":"index-module_comment_stars_view__ndecu","comment_stars_input_heart":"index-module_comment_stars_input_heart__XWYAE","comment_stars_view_heart":"index-module_comment_stars_view_heart__3piSo","is_half":"index-module_is_half__d9pf3","is_half_heart":"index-module_is_half_heart__IN3u5"};

var Heart = function Heart() {
  return React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 1024 1024",
    height: "19.44px",
    width: "22px",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"
  }));
};
var Star = function Star() {
  return React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 1024 1024",
    height: "19.44px",
    width: "22px",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
  }));
};

var ratings = [{
  value: "5",
  isHalf: false
}, {
  value: "4.5",
  isHalf: true
}, {
  value: "4",
  isHalf: false
}, {
  value: "3.5",
  isHalf: true
}, {
  value: "3",
  isHalf: false
}, {
  value: "2.5",
  isHalf: true
}, {
  value: "2",
  isHalf: false
}, {
  value: "1.5",
  isHalf: true
}, {
  value: "1",
  isHalf: false
}, {
  value: "0.5",
  isHalf: true
}];
var Rating = function Rating(_a) {
  var icon = _a.icon,
    selected = _a.selected,
    _b = _a.editable,
    editable = _b === void 0 ? true : _b,
    rateId = _a.rateId;
  var _c = useState("0"),
    rating = _c[0],
    setRating = _c[1];
  useEffect(function () {
    if (selected) {
      setRating(selected);
    }
  }, [selected]);
  var handleRatingChange = function handleRatingChange(event) {
    if (editable !== false) {
      setRating(event.target.value);
    }
    console.log(event.target.name);
  };
  return React.createElement("div", {
    className: "flex"
  }, React.createElement("div", {
    className: "flex flex-row-reverse"
  }, ratings.map(function (item, index) {
    return React.createElement(React.Fragment, {
      key: index
    }, React.createElement("input", {
      className: "".concat(styles.comment_stars_input, " ").concat(item.isHalf ? styles.is_half : "", " ").concat(icon === "heart" ? styles.comment_stars_input_heart : "", " hidden"),
      type: "radio",
      name: "rating-".concat(item.value, "-").concat(rateId),
      value: item.value,
      id: "rating-".concat(item.value, "-").concat(rateId),
      checked: rating === item.value,
      onChange: handleRatingChange,
      disabled: !editable
    }), React.createElement("label", {
      className: "".concat(styles.comment_stars_view, " ").concat(item.isHalf ? styles.is_half : "", " ").concat(icon === "heart" ? styles.comment_stars_view_heart : ""),
      htmlFor: "rating-".concat(item.value, "-").concat(rateId)
    }, React.createElement("svg", {
      className: "icon icon-star"
    }, icon === "heart" ? React.createElement(Heart, null) : React.createElement(Star, null))));
  })));
};

export { Rating };
