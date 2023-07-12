'use strict';

var React = require('react');
var typographyTs = require('typography-ts');
require('typography-ts/dist/index.css');

var Style = {"striped_progress_bar":"Progressbar-module_striped_progress_bar__gbgrM","progressbar_animation":"Progressbar-module_progressbar_animation__arTsP","progress_fill":"Progressbar-module_progress_fill__PKyxS"};

var ProgressBar = function ProgressBar(_a) {
  var _b;
  var _c = _a.progress,
    progress = _c === void 0 ? 100 : _c,
    label = _a.label,
    variant = _a.variant,
    _d = _a.striped,
    striped = _d === void 0 ? false : _d,
    _e = _a.progressDigit,
    progressDigit = _e === void 0 ? true : _e;
  var _f = React.useState(0),
    currentProgress = _f[0],
    setCurrentProgress = _f[1];
  React.useEffect(function () {
    var interval = setInterval(function () {
      setCurrentProgress(function (prevProgress) {
        var increment = Math.ceil(progress / 100);
        var nextProgress = prevProgress + increment;
        return nextProgress > progress ? progress : nextProgress;
      });
    }, 20);
    return function () {
      return clearInterval(interval);
    };
  }, [progress]);
  var fillStyle = (_b = {}, _b["--progress-width"] = "".concat(currentProgress, "%"), _b.width = "var(--progress-width)", _b);
  function getBackgroundColor(variant) {
    switch (variant) {
      case "primary":
        return "bg-primary";
      case "success":
        return "bg-successColor";
      case "danger":
        return "bg-defaultRed";
      case "warning":
        return "bg-lightYellow";
      case "info":
        return "bg-skyBlue";
      case "secondary":
      default:
        return "bg-blueColor";
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(typographyTs.Typography, {
    type: "label",
    className: "text-sm text-slatyGrey"
  }, label ? label : ""), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2 bg-lightSilver rounded"
  }, striped ? /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded ".concat(Style.progress_fill, " ").concat(getBackgroundColor(variant)),
    style: fillStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: Style.striped_progress_bar
  })) : /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded ".concat(Style.progress_fill, " ").concat(getBackgroundColor(variant)),
    style: fillStyle
  })), progressDigit && /*#__PURE__*/React.createElement(typographyTs.Typography, {
    type: "body",
    className: "ml-2 text-sm text-pureBlack"
  }, currentProgress, "%"))));
};

exports.ProgressBar = ProgressBar;
