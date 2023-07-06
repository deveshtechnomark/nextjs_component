'use strict';

var React = require('react');
var progressbar = require('progressbar');
require('progressbar/dist/index.css');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function UploadIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M7.99997 11.6153C7.78716 11.6153 7.60896 11.5435 7.46537 11.4C7.32179 11.2564 7.25 11.0782 7.25 10.8654V3.21533L5.32692 5.13841C5.17821 5.28712 5.00417 5.36308 4.8048 5.36628C4.60545 5.36948 4.42308 5.28839 4.2577 5.12301C4.10258 4.96789 4.02759 4.78969 4.03272 4.58841C4.03784 4.38714 4.11283 4.21407 4.2577 4.06921L7.3673 0.959607C7.46088 0.866024 7.5596 0.799998 7.66345 0.761531C7.76728 0.723081 7.87946 0.703857 7.99997 0.703857C8.12049 0.703857 8.23267 0.723081 8.3365 0.761531C8.44035 0.799998 8.53907 0.866024 8.63265 0.959607L11.7422 4.06921C11.891 4.21791 11.9644 4.3945 11.9624 4.59898C11.9605 4.80347 11.8871 4.97814 11.7422 5.12301C11.5871 5.27814 11.4089 5.35827 11.2077 5.36341C11.0064 5.36852 10.8282 5.29352 10.673 5.13841L8.74995 3.21533V10.8654C8.74995 11.0782 8.67816 11.2564 8.53458 11.4C8.39099 11.5435 8.21279 11.6153 7.99997 11.6153ZM2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V11.75C0.5 11.5371 0.5718 11.3589 0.7154 11.2154C0.858983 11.0718 1.03718 11 1.25 11C1.46282 11 1.64102 11.0718 1.7846 11.2154C1.92818 11.3589 1.99997 11.5371 1.99997 11.75V13.6923C1.99997 13.7692 2.03202 13.8397 2.09612 13.9038C2.16024 13.9679 2.23077 14 2.3077 14H13.6922C13.7692 14 13.8397 13.9679 13.9038 13.9038C13.9679 13.8397 14 13.7692 14 13.6923V11.75C14 11.5371 14.0718 11.3589 14.2154 11.2154C14.3589 11.0718 14.5371 11 14.75 11C14.9628 11 15.141 11.0718 15.2845 11.2154C15.4281 11.3589 15.5 11.5371 15.5 11.75V13.6923C15.5 14.1974 15.325 14.625 14.975 14.975C14.625 15.325 14.1974 15.5 13.6922 15.5H2.3077Z",
    fill: "#6E6D7A"
  })));
}

function FileIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    width: "15",
    height: "19",
    viewBox: "0 0 15 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M4.80169 15.0422H10.6967C10.8917 15.0422 11.053 14.9784 11.1805 14.8509C11.3079 14.7234 11.3717 14.5622 11.3717 14.3672C11.3717 14.1722 11.3079 14.0109 11.1805 13.8834C11.053 13.7559 10.8917 13.6922 10.6967 13.6922H4.80169C4.60669 13.6922 4.44544 13.7559 4.31794 13.8834C4.19044 14.0109 4.12669 14.1722 4.12669 14.3672C4.12669 14.5622 4.19044 14.7234 4.31794 14.8509C4.44544 14.9784 4.60669 15.0422 4.80169 15.0422ZM4.80169 11.2172H10.6967C10.8917 11.2172 11.053 11.1534 11.1805 11.0259C11.3079 10.8984 11.3717 10.7372 11.3717 10.5422C11.3717 10.3472 11.3079 10.1859 11.1805 10.0584C11.053 9.93094 10.8917 9.86719 10.6967 9.86719H4.80169C4.60669 9.86719 4.44544 9.93094 4.31794 10.0584C4.19044 10.1859 4.12669 10.3472 4.12669 10.5422C4.12669 10.7372 4.19044 10.8984 4.31794 11.0259C4.44544 11.1534 4.60669 11.2172 4.80169 11.2172ZM1.89919 18.8672C1.53919 18.8672 1.22419 18.7322 0.954194 18.4622C0.684194 18.1922 0.549194 17.8772 0.549194 17.5172V2.21719C0.549194 1.85719 0.684194 1.54219 0.954194 1.27219C1.22419 1.00219 1.53919 0.867188 1.89919 0.867188H9.45919C9.63919 0.867188 9.81544 0.904686 9.98794 0.979686C10.1604 1.05469 10.3067 1.15219 10.4267 1.27219L14.5442 5.38969C14.6642 5.50969 14.7617 5.65594 14.8367 5.82844C14.9117 6.00094 14.9492 6.17719 14.9492 6.35719V17.5172C14.9492 17.8772 14.8142 18.1922 14.5442 18.4622C14.2742 18.7322 13.9592 18.8672 13.5992 18.8672H1.89919ZM9.34669 5.72719V2.21719H1.89919V17.5172H13.5992V6.40219H10.0217C9.82669 6.40219 9.66544 6.33844 9.53794 6.21094C9.41045 6.08344 9.34669 5.92219 9.34669 5.72719Z",
    fill: "#02B89D"
  })));
}

function PdfIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.3367 0.5625L14.9939 4.26713C15.316 4.59281 15.5492 5.16431 15.5492 5.625V16.3125C15.5492 17.2429 14.8018 18 13.8833 18H3.88786C2.96939 18 2.22195 17.2429 2.22195 16.3125C2.22195 16.0014 2.47017 15.75 2.77725 15.75C3.08433 15.75 3.33255 16.0014 3.33255 16.3125C3.33255 16.6224 3.58133 16.875 3.88786 16.875H13.8833C14.1904 16.875 14.4386 16.6224 14.4386 16.3125V6.75C14.4386 6.129 13.9416 5.625 13.328 5.625H11.2456C10.5593 5.625 9.99619 5.05575 9.99619 4.35938V2.25C9.99619 1.629 9.4992 1.125 8.88559 1.125H3.88786C3.58133 1.125 3.33255 1.37756 3.33255 1.6875V7.3125C3.33255 7.62356 3.08433 7.875 2.77725 7.875C2.47017 7.875 2.22195 7.62356 2.22195 7.3125V1.6875C2.22195 0.757125 2.96939 0 3.88786 0H9.99619C10.4515 0 11.0157 0.23625 11.3367 0.5625ZM12.772 8.4375H0.555303C0.249887 8.4375 0 8.69063 0 9V14.625C0 14.9344 0.249887 15.1875 0.555303 15.1875H12.772C13.078 15.1875 13.3273 14.9344 13.3273 14.625V9C13.3273 8.69063 13.078 8.4375 12.772 8.4375ZM3.7483 12.5961H3.00697V13.1901C3.00697 13.3881 2.88258 13.5 2.72265 13.5C2.57605 13.5 2.42112 13.3881 2.42112 13.1895V10.6577C2.42112 10.5092 2.53663 10.3466 2.72265 10.3466H3.7483C4.32581 10.3466 4.84558 10.7381 4.84558 11.4891C4.84502 12.2001 4.32581 12.5961 3.7483 12.5961ZM6.77193 13.5H5.71518C5.56858 13.5 5.40866 13.4184 5.40866 13.221V10.6667C5.40866 10.5047 5.56858 10.3877 5.71518 10.3877H6.73194C8.76102 10.3877 8.7166 13.5 6.77193 13.5ZM10.7285 10.9721H9.43572V11.6871H10.568C10.7285 11.6871 10.8878 11.8491 10.8878 12.0066C10.8878 12.1551 10.7285 12.276 10.568 12.276H9.43572V13.2204C9.43572 13.3779 9.32521 13.4994 9.16973 13.4994C8.97426 13.4994 8.85431 13.3779 8.85431 13.2204V10.6661C8.85431 10.5041 8.97481 10.3871 9.16973 10.3871H10.7285C10.9239 10.3871 11.0389 10.5041 11.0389 10.6661C11.0389 10.8107 10.9239 10.9721 10.7285 10.9721ZM3.00651 10.9131H3.74783C4.04548 10.9131 4.28037 11.1741 4.28093 11.4885C4.28093 11.7675 4.04548 12.033 3.74783 12.033H3.00651V10.9131ZM5.99558 10.9365H6.73246C7.98412 10.9365 7.93136 12.9514 6.73246 12.9514H5.99558V10.9365Z",
    fill: "#F55655"
  })));
}

function WordIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    width: "19",
    height: "20",
    viewBox: "0 0 19 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_5506_828764)"
  }, React.createElement("mask", {
    id: "mask0_5506_828764"
    // style="mask-type:luminance"
    ,
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "1",
    width: "19",
    height: "19"
  }, React.createElement("path", {
    d: "M18.5492 1.26172H0.549225V19.2617H18.5492V1.26172Z",
    fill: "white"
  })), React.createElement("g", {
    mask: "url(#mask0_5506_828764)"
  }, React.createElement("path", {
    d: "M0.549225 17.3614V3.94014C0.586177 3.83963 0.651595 3.75208 0.737503 3.68814C0.823411 3.62421 0.926081 3.58667 1.03297 3.58013L3.28296 3.05138L10.6067 1.28513C10.6626 1.26558 10.7226 1.26064 10.781 1.27071C10.8394 1.28077 10.8943 1.30555 10.9404 1.3427C10.9866 1.37985 11.0225 1.42813 11.0448 1.48302C11.0671 1.5379 11.0751 1.59758 11.0679 1.65639C11.0679 1.97139 11.0679 2.27515 11.0679 2.5789C11.0679 2.88265 11.0679 2.83763 11.3267 2.83763H18.0767C18.4142 2.83763 18.5379 2.97266 18.5379 3.32141V17.2151C18.5379 17.5639 18.4142 17.6877 18.0767 17.6989H11.2592C11.0229 17.6989 11.0117 17.6989 11.0117 17.9464C11.0117 18.1939 11.0117 18.5314 11.0117 18.8239C11.0117 19.1164 10.8429 19.3076 10.5167 19.2514L7.45668 18.7564L4.37418 18.2614L1.2242 17.7551C1.0217 17.7101 0.650475 17.7889 0.549225 17.3614ZM17.8404 10.2739C17.8404 8.1139 17.8404 5.95389 17.8404 3.79389C17.8404 3.64764 17.8405 3.56887 17.638 3.56887H11.2254C11.0792 3.56887 11.0229 3.5689 11.0229 3.7714C11.0229 4.16515 11.0229 4.54765 11.0229 4.8964C11.0229 5.24515 11.0229 5.15513 11.2704 5.15513H16.7717C16.817 5.15654 16.8616 5.16708 16.9028 5.1861C16.9439 5.20512 16.9808 5.23225 17.0113 5.26585C17.0417 5.29945 17.0651 5.33882 17.08 5.38165C17.0949 5.42449 17.101 5.46989 17.0979 5.51514C17.0986 5.60331 17.0669 5.68866 17.0088 5.75502C16.9508 5.82137 16.8704 5.86413 16.7829 5.87514H11.3267C11.0904 5.87514 11.0792 5.87516 11.0792 6.13391V7.25891C11.0792 7.52891 11.0792 7.5289 11.3379 7.5289H16.7717C16.8622 7.53469 16.9469 7.57553 17.0078 7.64274C17.0687 7.70995 17.101 7.79825 17.0979 7.8889C17.0986 7.97707 17.0669 8.06243 17.0088 8.12878C16.9508 8.19514 16.8704 8.23786 16.7829 8.24888H11.3492C11.0792 8.24888 11.0792 8.24888 11.0792 8.53013V9.65513C11.0792 9.91388 11.0792 9.91389 11.3379 9.91389H16.7717C16.8583 9.91945 16.9397 9.95712 17.0001 10.0195C17.0604 10.082 17.0953 10.1646 17.0979 10.2514C17.1042 10.3421 17.0748 10.4317 17.0159 10.5011C16.9571 10.5704 16.8735 10.6141 16.7829 10.6226H11.3604C11.0792 10.6226 11.0792 10.6226 11.0792 10.9039V12.0289C11.0792 12.2876 11.0792 12.2989 11.3379 12.2989H16.7717C16.8562 12.3099 16.9337 12.3514 16.9897 12.4157C17.0457 12.4799 17.0762 12.5624 17.0755 12.6476C17.079 12.7347 17.0498 12.82 16.9935 12.8867C16.9373 12.9533 16.8581 12.9965 16.7717 13.0076H11.3042C11.0679 13.0076 11.0567 13.0076 11.0567 13.2551V14.3801C11.0567 14.6501 11.0567 14.6501 11.3155 14.6501H16.7379C16.8275 14.6557 16.9119 14.6946 16.9743 14.7591C17.0368 14.8236 17.0728 14.9091 17.0755 14.9989C17.0785 15.0456 17.0721 15.0925 17.0566 15.1367C17.0412 15.1809 17.017 15.2215 16.9855 15.2561C16.954 15.2908 16.9158 15.3187 16.8733 15.3383C16.8308 15.3579 16.7847 15.3687 16.7379 15.3701H11.3042C11.0679 15.3701 11.0567 15.3701 11.0567 15.6176V16.7426C11.0567 17.0014 11.0567 17.0014 11.3155 17.0014H17.6154C17.8629 17.0014 17.8629 17.0014 17.8629 16.7426C17.8966 14.5601 17.8967 12.4226 17.8967 10.2739H17.8404ZM5.46547 9.4639L5.97174 11.3201L6.53424 13.4014C6.61299 13.6489 6.73672 13.7614 6.95047 13.7501C7.16422 13.7389 7.26543 13.6489 7.33293 13.4239L7.9742 11.0614C8.25545 10.0376 8.53668 9.02514 8.80668 8.01264C8.84439 7.9192 8.84692 7.81526 8.81382 7.72009C8.78072 7.62493 8.71427 7.54501 8.62671 7.49515C8.37921 7.36015 8.13169 7.49513 8.04169 7.79888L7.23172 10.7801C7.14172 11.1176 7.04046 11.4551 6.93921 11.8376L5.81421 7.86638C5.74671 7.60763 5.61172 7.47263 5.39797 7.47263C5.18423 7.47263 5.06047 7.60764 4.98172 7.87764C4.71172 8.87889 4.44168 9.88013 4.16043 10.8926L3.92422 11.7589C3.88036 11.7172 3.85249 11.6615 3.84546 11.6014L2.79922 7.82141C2.76357 7.6931 2.68886 7.57906 2.58547 7.49515C2.52696 7.44667 2.45334 7.42013 2.37734 7.42013C2.30135 7.42013 2.22774 7.44667 2.16922 7.49515C2.01172 7.60765 1.97798 7.7764 2.03423 8.0239C2.52923 9.8014 3.01296 11.5676 3.49671 13.3451C3.56421 13.5926 3.68795 13.7051 3.9017 13.6939C4.11545 13.6826 4.23918 13.5926 4.30668 13.3451C4.54293 12.5014 4.76793 11.6464 5.00418 10.8026C5.15043 10.4201 5.28542 9.9139 5.42042 9.4639H5.46547Z",
    fill: "#1565C0"
  }), React.createElement("path", {
    d: "M5.42078 9.4611C5.28578 9.94485 5.15081 10.4173 5.02706 10.8786C4.79081 11.7223 4.56581 12.5773 4.32956 13.4211C4.26206 13.6686 4.13833 13.7698 3.92458 13.7698C3.71083 13.7698 3.58703 13.6686 3.51953 13.4211C3.03578 11.6436 2.55204 9.87736 2.05704 8.09986C2.05704 7.85236 2.05704 7.68361 2.19204 7.57111C2.25056 7.52263 2.32417 7.49609 2.40016 7.49609C2.47615 7.49609 2.54976 7.52263 2.60828 7.57111C2.71168 7.65503 2.78639 7.76903 2.82203 7.89734L3.86834 11.6774C3.87537 11.7374 3.90318 11.7932 3.94703 11.8348L4.18331 10.9686C4.46456 9.9561 4.73454 8.95486 5.00454 7.95361C5.08329 7.68361 5.21828 7.54859 5.42078 7.54859C5.62328 7.54859 5.76959 7.68359 5.83709 7.94234L6.96209 11.9136C7.06334 11.5311 7.16454 11.1936 7.25454 10.8561L8.06457 7.87485C8.15457 7.55985 8.40209 7.43611 8.64959 7.57111C8.73715 7.62097 8.8036 7.70089 8.83671 7.79605C8.86981 7.89122 8.86728 7.99517 8.82956 8.0886C8.55956 9.1011 8.27833 10.1136 7.99708 11.1373L7.35582 13.4998C7.28832 13.7248 7.16454 13.8261 6.97329 13.8261C6.78204 13.8261 6.63579 13.7249 6.55704 13.4774L5.99454 11.3961L5.48828 9.53986L5.42078 9.4611Z",
    fill: "white"
  }))), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_5506_828764"
  }, React.createElement("rect", {
    width: "18",
    height: "19",
    fill: "white",
    transform: "translate(0.549225 0.5)"
  })))));
}

function ExcelIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    width: "18",
    height: "20",
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_5506_828782)"
  }, React.createElement("mask", {
    id: "mask0_5506_828782"
    // style="mask-type:luminance"
    ,
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "18",
    height: "19"
  }, React.createElement("path", {
    d: "M18 0.914062H0V18.9141H18V0.914062Z",
    fill: "white"
  })), React.createElement("g", {
    mask: "url(#mask0_5506_828782)"
  }, React.createElement("path", {
    d: "M0 17.1366V2.73656L1.76619 2.42156L5.37746 1.78033L9.35994 1.08281C9.65244 1.08281 9.9337 0.970314 10.215 0.914062V2.64657H17.2012C17.3081 2.6408 17.4149 2.65857 17.5142 2.69862C17.6135 2.73867 17.7028 2.80002 17.7757 2.87835C17.8487 2.95668 17.9036 3.05005 17.9365 3.15191C17.9694 3.25377 17.9795 3.36162 17.9662 3.46783V16.2928C17.9721 16.3677 17.9721 16.4429 17.9662 16.5178C17.9341 16.6895 17.8415 16.844 17.7053 16.9534C17.5691 17.0627 17.3983 17.1197 17.2237 17.1141H10.215V18.8691L7.70622 18.4303L4.33122 17.8228L0.956223 17.2266L0 17.1366ZM10.2487 13.6716H12.4987C12.6225 13.6716 12.6562 13.6716 12.6562 13.8403V15.1341C12.6562 15.2691 12.6562 15.3028 12.4987 15.3028H10.2487V16.5291H17.4262V3.31032H10.2487V4.59283H12.645V6.21284H10.2487V6.83157H12.645V8.45158H10.2487V9.11532H12.645V10.7353H10.395C10.395 10.7353 10.2487 10.7353 10.2487 10.8141C10.2487 10.8928 10.2487 11.1853 10.2487 11.3991H12.4987C12.6112 11.3991 12.645 11.3991 12.645 11.5566V12.8616C12.645 13.0078 12.645 13.0416 12.4762 13.0416H10.2262L10.2487 13.6716ZM2.80124 6.97783L2.88 7.18032C3.25125 8.05782 3.61125 8.94659 4.005 9.83534C4.02427 9.87774 4.03418 9.92376 4.03418 9.97033C4.03418 10.0169 4.02427 10.0629 4.005 10.1053C3.58875 10.9828 3.18371 11.8716 2.76746 12.7603L2.6887 12.9516C3.05995 12.9516 3.39745 12.9516 3.7462 13.0191C3.79368 13.0259 3.84201 13.0147 3.88161 12.9876C3.9212 12.9605 3.94916 12.9196 3.95995 12.8728C4.09495 12.5241 4.24121 12.1753 4.38746 11.8266C4.53371 11.4778 4.64619 11.1853 4.79244 10.8366C5.07369 11.5791 5.35494 12.2878 5.63619 12.9966C5.63619 13.0753 5.69246 13.1428 5.79371 13.1428L6.91871 13.2103H7.0537L6.96368 13.0191L5.55743 10.0828C5.52979 10.0349 5.51527 9.98062 5.51527 9.92532C5.51527 9.87003 5.52979 9.81569 5.55743 9.76781L6.90745 6.91033L6.98621 6.71907L5.74873 6.79782C5.74873 6.79782 5.6587 6.85407 5.64745 6.89907L4.76999 9.03656C4.55624 8.44031 4.33122 7.84406 4.11747 7.23656C4.00497 6.91031 4.00495 6.91031 3.6787 6.92156L2.80124 6.97783Z",
    fill: "#1E6F43"
  }), React.createElement("path", {
    d: "M2.80096 6.97751L3.70094 6.92124C4.02719 6.92124 4.02721 6.92124 4.13971 7.23624C4.35346 7.84374 4.57841 8.44 4.79216 9.03625L5.66969 6.89875C5.66969 6.89875 5.73715 6.79751 5.7709 6.79751L7.00845 6.71875L6.92969 6.91002L5.57967 9.76749C5.55203 9.81538 5.53751 9.86971 5.53751 9.92501C5.53751 9.9803 5.55203 10.0346 5.57967 10.0825L6.98592 13.0188L7.07594 13.21H6.94095L5.81595 13.1425C5.7147 13.1425 5.69218 13.075 5.65843 12.9963C5.37718 12.2875 5.09593 11.5788 4.81468 10.8363C4.66843 11.185 4.53345 11.5113 4.4097 11.8263C4.28595 12.1413 4.11719 12.5238 3.98219 12.8725C3.9714 12.9192 3.94344 12.9602 3.90385 12.9873C3.86425 13.0144 3.81592 13.0256 3.76844 13.0188C3.41969 13.0188 3.08219 13.0188 2.71094 12.9513L2.7897 12.76C3.20595 11.8712 3.61092 10.9825 4.02717 10.105C4.04644 10.0626 4.05642 10.0166 4.05642 9.97002C4.05642 9.92345 4.04644 9.87742 4.02717 9.83502C3.64467 8.94627 3.28467 8.0575 2.90217 7.18L2.80096 6.97751Z",
    fill: "white"
  }), React.createElement("path", {
    d: "M16.1206 4.60547V6.20298H13.2969V4.60547H16.1206Z",
    fill: "#1E6F43"
  }), React.createElement("path", {
    d: "M16.1206 6.85547V8.44172H13.2969V6.85547H16.1206Z",
    fill: "#1E6F43"
  }), React.createElement("path", {
    d: "M13.2969 9.11719H16.1206V10.7147H13.2969V9.11719Z",
    fill: "#1E6F43"
  }), React.createElement("path", {
    d: "M16.1206 13.0311H13.2969V11.4336H16.1206V13.0311Z",
    fill: "#1E6F43"
  }), React.createElement("path", {
    d: "M16.1333 15.2919H13.2871V13.8181C13.2871 13.7169 13.2871 13.6719 13.4221 13.6719H16.0096C16.0096 13.6719 16.1221 13.7281 16.1221 13.7619C16.1333 14.2681 16.1333 14.7744 16.1333 15.2919Z",
    fill: "#1E6F43"
  }))), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_5506_828782"
  }, React.createElement("rect", {
    width: "18",
    height: "19",
    fill: "white",
    transform: "translate(0 0.5)"
  })))));
}

function ClearIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
  })));
}

function ImageIcon() {
  return React.createElement("div", null, React.createElement("svg", {
    width: "18",
    height: "20",
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_5506_828798)"
  }, React.createElement("path", {
    d: "M0 0.609375V18.6093L7.32556 11.2837L9.62788 13.586L13.3953 9.8186L17.9999 14.0046V0.609375H0Z",
    fill: "#D8D8D8"
  }), React.createElement("path", {
    d: "M4.6041 7.30586C5.52885 7.30586 6.27851 6.5562 6.27851 5.63144C6.27851 4.70669 5.52885 3.95703 4.6041 3.95703C3.67935 3.95703 2.92969 4.70669 2.92969 5.63144C2.92969 6.5562 3.67935 7.30586 4.6041 7.30586Z",
    fill: "#FDB663"
  }), React.createElement("path", {
    d: "M18.001 14.0063V18.611H14.4428V18.4017L9.62891 13.5877L13.3963 9.82031L18.001 14.0063Z",
    fill: "#70993F"
  }), React.createElement("path", {
    d: "M14.4418 18.3975V18.6068H0L7.32556 11.2812L9.62787 13.5836L14.4418 18.3975Z",
    fill: "#80AF52"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_5506_828798"
  }, React.createElement("rect", {
    width: "18",
    height: "19",
    fill: "white",
    transform: "translate(0 0.5)"
  })))));
}

var extensionToIconMap = {
  pdf: React.createElement(PdfIcon, null),
  doc: React.createElement(WordIcon, null),
  docx: React.createElement(WordIcon, null),
  xls: React.createElement(ExcelIcon, null),
  xlsx: React.createElement(ExcelIcon, null),
  jpg: React.createElement(ImageIcon, null),
  jpeg: React.createElement(ImageIcon, null),
  png: React.createElement(ImageIcon, null)
};
function Uploader(_a) {
  var multiSelect = _a.multiSelect,
    variant = _a.variant;
  var _b = React.useState([]),
    fileNames = _b[0],
    setFileNames = _b[1];
  var _c = React.useState(false),
    uploaded = _c[0],
    setUploaded = _c[1];
  var fileInputRef = React.useRef(null);
  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
  };
  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    var files = e.dataTransfer.files;
    handleFileChange(files);
  };
  var handleFileChange = function handleFileChange(files) {
    var names = Array.from(files).map(function (file) {
      return file.name;
    });
    setFileNames(names);
    setTimeout(function () {
      setUploaded(true);
    }, 1500);
  };
  var handleBrowseClick = function handleBrowseClick() {
    var _a;
    (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
  };
  var handleFileInputChange = function handleFileInputChange(e) {
    var files = e.target.files;
    if (files) {
      handleFileChange(files);
    }
    // Set the uploaded state to false when a new file is selected
    setUploaded(false);
  };
  var handleRemoveFile = function handleRemoveFile(index) {
    var updatedFileNames = __spreadArray([], fileNames, true);
    updatedFileNames.splice(index, 1);
    setFileNames(updatedFileNames);
    if (updatedFileNames.length === 0) {
      setUploaded(false);
    }
  };
  var getFileExtension = function getFileExtension(fileName) {
    var extension = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();
    return extension;
  };
  var renderFileIcon = function renderFileIcon(fileName) {
    var extension = getFileExtension(fileName);
    var icon = extensionToIconMap[extension];
    return icon || React.createElement(FileIcon, null);
  };
  return React.createElement("div", null, React.createElement("div", {
    className: "upload-container w-full flex items-center justify-center ".concat(variant === "small" ? "h-[36px]" : "flex-col h-[230px]", " justify-center items-centerborder transition-all duration-200 ease-in \n        border border-dashed border-lightSilver hover:border-primary hover:bg-[#EDFFFC] cursor-pointer rounded-[4px]"),
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onClick: handleBrowseClick
  }, React.createElement("input", {
    type: "file",
    multiple: multiSelect,
    ref: fileInputRef,
    className: "input-field hidden",
    onChange: handleFileInputChange
  }), React.createElement("div", {
    className: "text-[15px] text-slatyGrey ".concat(variant === "small" ? "" : "border-2 border-lightSilver rounded-[4px] p-2")
  }, React.createElement(UploadIcon, null)), React.createElement("p", {
    className: "".concat(variant === "small" ? "ml-[10px]" : "mt-4", " text-[14px] text-darkCharcoal font-proxima")
  }, "Drag and Drop or ", React.createElement("span", {
    className: "text-teal-500"
  }, "Browse"), " to Upload")), multiSelect ? React.createElement("section", {
    className: "mt-2 flex flex-col justify-between p-2 border border-lightSilver w-full h-[105px] rounded-[4px] overflow-y-auto"
  }, React.createElement("div", null, React.createElement("div", {
    className: "flex flex-row ml-2 flex-wrap overflow-x-auto"
  }, fileNames.length > 0 && uploaded ? fileNames.map(function (name, index) {
    return React.createElement("span", {
      className: "text-[14px] text-darkCharcoal font-proxima flex items-center gap-2 bg-whiteSmoke px-[2px] py-[2.5px] rounded-[2px] mr-2 mb-2",
      key: name
    }, React.createElement("span", {
      className: "text-[14px]"
    }, renderFileIcon(name)), name.length > 8 ? React.createElement(React.Fragment, null, name.slice(0, 8), "..") : React.createElement(React.Fragment, null, name), React.createElement("span", {
      onClick: function onClick() {
        return handleRemoveFile(index);
      },
      className: "text-[14px] text-slatyGrey cursor-pointer"
    }, React.createElement(ClearIcon, null)));
  }) : !uploaded && React.createElement("span", {
    className: "flex flex-row items-center gap-2 text-[14px] text-darkCharcoal font-proxima"
  }, fileNames.length === 0 ? React.createElement(React.Fragment, null, React.createElement(FileIcon, null), " No selected files") : React.createElement(React.Fragment, null, fileNames.length, " file", fileNames.length > 1 ? "s" : "", " selected")))), fileNames.length > 0 && !uploaded && React.createElement("div", {
    className: "flex items-center text-[12px] font-proxima italic text-slatyGrey flex-row"
  }, React.createElement("span", {
    className: "mr-[10px]"
  }, uploaded ? "Uploaded" : "Uploading..."), React.createElement(progressbar.ProgressBar, {
    variant: "primary",
    progressDigit: false,
    label: ""
  }))) : React.createElement("section", {
    className: "mt-2 flex justify-between items-center border border-lightSilver h-[36px] px-[20px] rounded-[4px]"
  }, fileNames.length > 0 && !uploaded ? React.createElement(React.Fragment, null, React.createElement("label", {
    className: "text-[12px] italic mr-[10px] text-slatyGrey font-proxima"
  }, !uploaded ? "Uploading..." : "Uploaded"), React.createElement(progressbar.ProgressBar, {
    variant: "primary",
    progressDigit: false,
    label: ""
  })) : uploaded ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "flex flex-row items-center"
  }, renderFileIcon(fileNames[0]), React.createElement("span", {
    className: "ml-2 text-[14px] text-darkCharcoal font-proxima"
  }, fileNames[0].length > 30 ? React.createElement(React.Fragment, null, fileNames[0].slice(0, 26), "..", fileNames[0].substring(fileNames[0].lastIndexOf("."))) : React.createElement(React.Fragment, null, fileNames[0]))), React.createElement("span", {
    onClick: function onClick() {
      return handleRemoveFile(0);
    },
    className: "text-[18px] text-slatyGrey cursor-pointer"
  }, React.createElement(ClearIcon, null))) : React.createElement("div", {
    className: "flex flex-row items-center"
  }, React.createElement(FileIcon, null), React.createElement("span", {
    className: "ml-2 text-[14px] text-darkCharcoal font-proxima"
  }, "No Files Selected"))));
}

module.exports = Uploader;
