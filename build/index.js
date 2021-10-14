/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/GaleryBtn.js":
/*!*************************************!*\
  !*** ./src/components/GaleryBtn.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GaleryBtn; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function GaleryBtn({
  text,
  icon,
  allowedTypes,
  attr,
  setter
}) {
  function onSelect({
    url
  }) {
    const attributes = {};
    attributes[attr] = url;
    setter(attributes);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelect,
    allowedTypes: allowedTypes,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      id: "galeryBtn",
      className: "bigBtn",
      onClick: open
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: icon
    }), text)
  }));
}

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Header() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      flexWrap: 'none',
      alignItems: 'center'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "100px",
    height: "50px",
    viewBox: "0 0 1000.000000 801.000000",
    className: "svg",
    preserveAspectRatio: "xMidYMid meet"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(0.000000,801.000000) scale(0.100000,-0.100000)",
    fill: "#000000",
    stroke: "none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4475 6066 c-27 -12 -1308 -749 -1449 -834 -73 -44 -94 -84 -72 -136\n8 -20 31 -46 53 -59 120 -78 1470 -849 1494 -854 44 -9 78 5 99 40 19 31 20\n55 20 900 0 945 1 926 -55 947 -34 13 -53 12 -90 -4z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1780 5488 c-51 -27 -50 -2 -50 -945 l0 -881 27 -32 c52 -62 37 -69\n858 405 407 234 750 439 762 453 34 40 30 87 -9 126 -44 42 -1491 876 -1531\n882 -18 3 -43 -1 -57 -8z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2618 3859 c-56 -21 -1484 -851 -1512 -879 -41 -40 -41 -90 -1 -129\n24 -23 1353 -798 1484 -866 50 -25 98 -22 130 9 l26 26 0 895 0 895 -25 24\nc-30 30 -66 38 -102 25z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3322 3133 c4 -530 4 -551 26 -628 36 -129 76 -201 161 -285 121\n-120 216 -157 461 -181 228 -21 439 5 572 72 42 21 91 59 144 113 90 91 130\n160 166 291 21 77 22 101 26 623 l3 542 -255 0 -256 0 0 -523 c0 -423 -3 -533\n-14 -571 -34 -113 -123 -171 -261 -170 -97 0 -157 25 -208 85 -61 71 -61 64\n-64 647 l-4 532 -250 0 -250 0 3 -547z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5200 2870 l0 -810 255 0 255 0 0 330 0 330 315 0 315 0 0 165 0 165\n-315 0 -315 0 0 140 0 140 368 2 367 3 3 173 2 172 -625 0 -625 0 0 -810z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6720 2870 l0 -810 255 0 255 0 0 331 0 332 51 -7 c70 -9 124 -39\n154 -84 13 -20 89 -156 168 -302 l144 -265 288 -3 287 -2 -39 72 c-22 40 -83\n156 -137 258 -119 228 -187 316 -276 357 l-60 27 67 24 c176 64 279 188 304\n368 13 93 -3 200 -42 282 -34 70 -126 156 -196 182 -119 45 -177 49 -715 50\nl-508 0 0 -810z m883 456 c75 -37 100 -151 49 -224 -37 -52 -88 -65 -264 -70\nl-158 -4 0 162 0 162 168 -4 c139 -2 173 -6 205 -22z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "title"
  }, "Avatar")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "description"
  }, "Escolha o tipo de avatar, e como ele ser\xE1 apresentado."));
}

/***/ }),

/***/ "./src/components/IconPicker.js":
/*!**************************************!*\
  !*** ./src/components/IconPicker.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IconPicker; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const iconList = ["fas fa-address-book", "fas fa-address-card", "fas fa-adjust", "fas fa-align-center", "fas fa-align-justify", "fas fa-align-left", "fas fa-align-right", "fas fa-allergies", "fas fa-ambulance", "fas fa-american-sign-language-interpreting", "fas fa-anchor", "fas fa-angle-double-down", "fas fa-angle-double-left", "fas fa-angle-double-right", "fas fa-angle-double-up", "fas fa-angle-down", "fas fa-angle-left", "fas fa-angle-right", "fas fa-angle-up", "fas fa-archive", "fas fa-arrow-alt-circle-down", "fas fa-arrow-alt-circle-left", "fas fa-arrow-alt-circle-right", "fas fa-arrow-alt-circle-up", "fas fa-arrow-circle-down", "fas fa-arrow-circle-left", "fas fa-arrow-circle-right", "fas fa-arrow-circle-up", "fas fa-arrow-down", "fas fa-arrow-left", "fas fa-arrow-right", "fas fa-arrow-up", "fas fa-arrows-alt", "fas fa-arrows-alt-h", "fas fa-arrows-alt-v", "fas fa-assistive-listening-systems", "fas fa-asterisk", "fas fa-at", "fas fa-audio-description", "fas fa-backward", "fas fa-balance-scale", "fas fa-ban", "fas fa-band-aid", "fas fa-barcode", "fas fa-bars", "fas fa-baseball-ball", "fas fa-basketball-ball", "fas fa-bath", "fas fa-battery-empty", "fas fa-battery-full", "fas fa-battery-half", "fas fa-battery-quarter", "fas fa-battery-three-quarters", "fas fa-bed", "fas fa-beer", "fas fa-bell", "fas fa-bell-slash", "fas fa-bicycle", "fas fa-binoculars", "fas fa-birthday-cake", "fas fa-blind", "fas fa-bold", "fas fa-bolt", "fas fa-bomb", "fas fa-book", "fas fa-bookmark", "fas fa-bowling-ball", "fas fa-box", "fas fa-box-open", "fas fa-boxes", "fas fa-braille", "fas fa-briefcase", "fas fa-briefcase-medical", "fas fa-bug", "fas fa-building", "fas fa-bullhorn", "fas fa-bullseye", "fas fa-burn", "fas fa-bus", "fas fa-calculator", "fas fa-calendar", "fas fa-calendar-alt", "fas fa-calendar-check", "fas fa-calendar-minus", "fas fa-calendar-plus", "fas fa-calendar-times", "fas fa-camera", "fas fa-camera-retro", "fas fa-capsules", "fas fa-car", "fas fa-caret-down", "fas fa-caret-left", "fas fa-caret-right", "fas fa-caret-square-down", "fas fa-caret-square-left", "fas fa-caret-square-right", "fas fa-caret-square-up", "fas fa-caret-up", "fas fa-cart-arrow-down", "fas fa-cart-plus", "fas fa-certificate", "fas fa-chart-area", "fas fa-chart-bar", "fas fa-chart-line", "fas fa-chart-pie", "fas fa-check", "fas fa-check-circle", "fas fa-check-square", "fas fa-chess", "fas fa-chess-bishop", "fas fa-chess-board", "fas fa-chess-king", "fas fa-chess-knight", "fas fa-chess-pawn", "fas fa-chess-queen", "fas fa-chess-rook", "fas fa-chevron-circle-down", "fas fa-chevron-circle-left", "fas fa-chevron-circle-right", "fas fa-chevron-circle-up", "fas fa-chevron-down", "fas fa-chevron-left", "fas fa-chevron-right", "fas fa-chevron-up", "fas fa-child", "fas fa-circle", "fas fa-circle-notch", "fas fa-clipboard", "fas fa-clipboard-check", "fas fa-clipboard-list", "fas fa-clock", "fas fa-clone", "fas fa-closed-captioning", "fas fa-cloud", "fas fa-cloud-download-alt", "fas fa-cloud-upload-alt", "fas fa-code", "fas fa-code-branch", "fas fa-coffee", "fas fa-cog", "fas fa-cogs", "fas fa-columns", "fas fa-comment", "fas fa-comment-alt", "fas fa-comment-dots", "fas fa-comment-slash", "fas fa-comments", "fas fa-compass", "fas fa-compress", "fas fa-copy", "fas fa-copyright", "fas fa-couch", "fas fa-credit-card", "fas fa-crop", "fas fa-crosshairs", "fas fa-cube", "fas fa-cubes", "fas fa-cut", "fas fa-database", "fas fa-deaf", "fas fa-desktop", "fas fa-diagnoses", "fas fa-dna", "fas fa-dollar-sign", "fas fa-dolly", "fas fa-dolly-flatbed", "fas fa-donate", "fas fa-dot-circle", "fas fa-dove", "fas fa-download", "fas fa-edit", "fas fa-eject", "fas fa-ellipsis-h", "fas fa-ellipsis-v", "fas fa-envelope", "fas fa-envelope-open", "fas fa-envelope-square", "fas fa-eraser", "fas fa-euro-sign", "fas fa-exchange-alt", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "fas fa-expand", "fas fa-expand-arrows-alt", "fas fa-external-link-alt", "fas fa-external-link-square-alt", "fas fa-eye", "fas fa-eye-dropper", "fas fa-eye-slash", "fas fa-fast-backward", "fas fa-fast-forward", "fas fa-fax", "fas fa-female", "fas fa-fighter-jet", "fas fa-file", "fas fa-file-alt", "fas fa-file-archive", "fas fa-file-audio", "fas fa-file-code", "fas fa-file-excel", "fas fa-file-image", "fas fa-file-medical", "fas fa-file-medical-alt", "fas fa-file-pdf", "fas fa-file-powerpoint", "fas fa-file-video", "fas fa-file-word", "fas fa-film", "fas fa-filter", "fas fa-fire", "fas fa-fire-extinguisher", "fas fa-first-aid", "fas fa-flag", "fas fa-flag-checkered", "fas fa-flask", "fas fa-folder", "fas fa-folder-open", "fas fa-font", "fas fa-football-ball", "fas fa-forward", "fas fa-frown", "fas fa-futbol", "fas fa-gamepad", "fas fa-gavel", "fas fa-gem", "fas fa-genderless", "fas fa-gift", "fas fa-glass-martini", "fas fa-globe", "fas fa-golf-ball", "fas fa-graduation-cap", "fas fa-h-square", "fas fa-hand-holding", "fas fa-hand-holding-heart", "fas fa-hand-holding-usd", "fas fa-hand-lizard", "fas fa-hand-paper", "fas fa-hand-peace", "fas fa-hand-point-down", "fas fa-hand-point-left", "fas fa-hand-point-right", "fas fa-hand-point-up", "fas fa-hand-pointer", "fas fa-hand-rock", "fas fa-hand-scissors", "fas fa-hand-spock", "fas fa-hands", "fas fa-hands-helping", "fas fa-handshake", "fas fa-hashtag", "fas fa-hdd", "fas fa-heading", "fas fa-headphones", "fas fa-heart", "fas fa-heartbeat", "fas fa-history", "fas fa-hockey-puck", "fas fa-home", "fas fa-hospital", "fas fa-hospital-alt", "fas fa-hospital-symbol", "fas fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "fas fa-i-cursor", "fas fa-id-badge", "fas fa-id-card", "fas fa-id-card-alt", "fas fa-image", "fas fa-images", "fas fa-inbox", "fas fa-indent", "fas fa-industry", "fas fa-info", "fas fa-info-circle", "fas fa-italic", "fas fa-key", "fas fa-keyboard", "fas fa-language", "fas fa-laptop", "fas fa-leaf", "fas fa-lemon", "fas fa-level-down-alt", "fas fa-level-up-alt", "fas fa-life-ring", "fas fa-lightbulb", "fas fa-link", "fas fa-lira-sign", "fas fa-list", "fas fa-list-alt", "fas fa-list-ol", "fas fa-list-ul", "fas fa-location-arrow", "fas fa-lock", "fas fa-lock-open", "fas fa-long-arrow-alt-down", "fas fa-long-arrow-alt-left", "fas fa-long-arrow-alt-right", "fas fa-long-arrow-alt-up", "fas fa-low-vision", "fas fa-magic", "fas fa-magnet", "fas fa-male", "fas fa-map", "fas fa-map-marker", "fas fa-map-marker-alt", "fas fa-map-pin", "fas fa-map-signs", "fas fa-mars", "fas fa-mars-double", "fas fa-mars-stroke", "fas fa-mars-stroke-h", "fas fa-mars-stroke-v", "fas fa-medkit", "fas fa-meh", "fas fa-mercury", "fas fa-microchip", "fas fa-microphone", "fas fa-microphone-slash", "fas fa-minus", "fas fa-minus-circle", "fas fa-minus-square", "fas fa-mobile", "fas fa-mobile-alt", "fas fa-money-bill-alt", "fas fa-moon", "fas fa-motorcycle", "fas fa-mouse-pointer", "fas fa-music", "fas fa-neuter", "fas fa-newspaper", "fas fa-notes-medical", "fas fa-object-group", "fas fa-object-ungroup", "fas fa-outdent", "fas fa-paint-brush", "fas fa-pallet", "fas fa-paper-plane", "fas fa-paperclip", "fas fa-parachute-box", "fas fa-paragraph", "fas fa-paste", "fas fa-pause", "fas fa-pause-circle", "fas fa-paw", "fas fa-pen-square", "fas fa-pencil-alt", "fas fa-people-carry", "fas fa-percent", "fas fa-phone", "fas fa-phone-slash", "fas fa-phone-square", "fas fa-phone-volume", "fas fa-piggy-bank", "fas fa-pills", "fas fa-plane", "fas fa-play", "fas fa-play-circle", "fas fa-plug", "fas fa-plus", "fas fa-plus-circle", "fas fa-plus-square", "fas fa-podcast", "fas fa-poo", "fas fa-pound-sign", "fas fa-power-off", "fas fa-prescription-bottle", "fas fa-prescription-bottle-alt", "fas fa-print", "fas fa-procedures", "fas fa-puzzle-piece", "fas fa-qrcode", "fas fa-question", "fas fa-question-circle", "fas fa-quidditch", "fas fa-quote-left", "fas fa-quote-right", "fas fa-random", "fas fa-recycle", "fas fa-redo", "fas fa-redo-alt", "fas fa-registered", "fas fa-reply", "fas fa-reply-all", "fas fa-retweet", "fas fa-ribbon", "fas fa-road", "fas fa-rocket", "fas fa-rss", "fas fa-rss-square", "fas fa-ruble-sign", "fas fa-rupee-sign", "fas fa-save", "fas fa-search", "fas fa-search-minus", "fas fa-search-plus", "fas fa-seedling", "fas fa-server", "fas fa-share", "fas fa-share-alt", "fas fa-share-alt-square", "fas fa-share-square", "fas fa-shekel-sign", "fas fa-shield-alt", "fas fa-ship", "fas fa-shipping-fast", "fas fa-shopping-bag", "fas fa-shopping-basket", "fas fa-shopping-cart", "fas fa-shower", "fas fa-sign", "fas fa-sign-in-alt", "fas fa-sign-language", "fas fa-sign-out-alt", "fas fa-signal", "fas fa-sitemap", "fas fa-sliders-h", "fas fa-smile", "fas fa-smoking", "fas fa-snowflake", "fas fa-sort", "fas fa-sort-alpha-down", "fas fa-sort-alpha-up", "fas fa-sort-amount-down", "fas fa-sort-amount-up", "fas fa-sort-down", "fas fa-sort-numeric-down", "fas fa-sort-numeric-up", "fas fa-sort-up", "fas fa-space-shuttle", "fas fa-spinner", "fas fa-square", "fas fa-square-full", "fas fa-star", "fas fa-star-half", "fas fa-step-backward", "fas fa-step-forward", "fas fa-stethoscope", "fas fa-sticky-note", "fas fa-stop", "fas fa-stop-circle", "fas fa-stopwatch", "fas fa-street-view", "fas fa-strikethrough", "fas fa-subscript", "fas fa-subway", "fas fa-suitcase", "fas fa-sun", "fas fa-superscript", "fas fa-sync", "fas fa-sync-alt", "fas fa-syringe", "fas fa-table", "fas fa-table-tennis", "fas fa-tablet", "fas fa-tablet-alt", "fas fa-tablets", "fas fa-tachometer-alt", "fas fa-tag", "fas fa-tags", "fas fa-tape", "fas fa-tasks", "fas fa-taxi", "fas fa-terminal", "fas fa-text-height", "fas fa-text-width", "fas fa-th", "fas fa-th-large", "fas fa-th-list", "fas fa-thermometer", "fas fa-thermometer-empty", "fas fa-thermometer-full", "fas fa-thermometer-half", "fas fa-thermometer-quarter", "fas fa-thermometer-three-quarters", "fas fa-thumbs-down", "fas fa-thumbs-up", "fas fa-thumbtack", "fas fa-ticket-alt", "fas fa-times", "fas fa-times-circle", "fas fa-tint", "fas fa-toggle-off", "fas fa-toggle-on", "fas fa-trademark", "fas fa-train", "fas fa-transgender", "fas fa-transgender-alt", "fas fa-trash", "fas fa-trash-alt", "fas fa-tree", "fas fa-trophy", "fas fa-truck", "fas fa-truck-loading", "fas fa-truck-moving", "fas fa-tty", "fas fa-tv", "fas fa-umbrella", "fas fa-underline", "fas fa-undo", "fas fa-undo-alt", "fas fa-universal-access", "fas fa-university", "fas fa-unlink", "fas fa-unlock", "fas fa-unlock-alt", "fas fa-upload", "fas fa-user", "fas fa-user-circle", "fas fa-user-md", "fas fa-user-plus", "fas fa-user-secret", "fas fa-user-times", "fas fa-users", "fas fa-utensil-spoon", "fas fa-utensils", "fas fa-venus", "fas fa-venus-double", "fas fa-venus-mars", "fas fa-vial", "fas fa-vials", "fas fa-video", "fas fa-video-slash", "fas fa-volleyball-ball", "fas fa-volume-down", "fas fa-volume-off", "fas fa-volume-up", "fas fa-warehouse", "fas fa-weight", "fas fa-wheelchair", "fas fa-wifi", "fas fa-window-close", "fas fa-window-maximize", "fas fa-window-minimize", "fas fa-window-restore", "fas fa-wine-glass", "fas fa-won-sign", "fas fa-wrench", "fas fa-x-ray", "fas fa-yen-sign", "far fa-address-book", "far fa-address-card", "far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-up", "far fa-bell", "far fa-bell-slash", "far fa-bookmark", "far fa-building", "far fa-calendar", "far fa-calendar-alt", "far fa-calendar-check", "far fa-calendar-minus", "far fa-calendar-plus", "far fa-calendar-times", "far fa-caret-square-down", "far fa-caret-square-left", "far fa-caret-square-right", "far fa-caret-square-up", "far fa-chart-bar", "far fa-check-circle", "far fa-check-square", "far fa-circle", "far fa-clipboard", "far fa-clock", "far fa-clone", "far fa-closed-captioning", "far fa-comment", "far fa-comment-alt", "far fa-comments", "far fa-compass", "far fa-copy", "far fa-copyright", "far fa-credit-card", "far fa-dot-circle", "far fa-edit", "far fa-envelope", "far fa-envelope-open", "far fa-eye-slash", "far fa-file", "far fa-file-alt", "far fa-file-archive", "far fa-file-audio", "far fa-file-code", "far fa-file-excel", "far fa-file-image", "far fa-file-pdf", "far fa-file-powerpoint", "far fa-file-video", "far fa-file-word", "far fa-flag", "far fa-folder", "far fa-folder-open", "far fa-frown", "far fa-futbol", "far fa-gem", "far fa-hand-lizard", "far fa-hand-paper", "far fa-hand-peace", "far fa-hand-point-down", "far fa-hand-point-left", "far fa-hand-point-right", "far fa-hand-point-up", "far fa-hand-pointer", "far fa-hand-rock", "far fa-hand-scissors", "far fa-hand-spock", "far fa-handshake", "far fa-hdd", "far fa-heart", "far fa-hospital", "far fa-hourglass", "far fa-id-badge", "far fa-id-card", "far fa-image", "far fa-images", "far fa-keyboard", "far fa-lemon", "far fa-life-ring", "far fa-lightbulb", "far fa-list-alt", "far fa-map", "far fa-meh", "far fa-minus-square", "far fa-money-bill-alt", "far fa-moon", "far fa-newspaper", "far fa-object-group", "far fa-object-ungroup", "far fa-paper-plane", "far fa-pause-circle", "far fa-play-circle", "far fa-plus-square", "far fa-question-circle", "far fa-registered", "far fa-save", "far fa-share-square", "far fa-smile", "far fa-snowflake", "far fa-square", "far fa-star", "far fa-star-half", "far fa-sticky-note", "far fa-stop-circle", "far fa-sun", "far fa-thumbs-down", "far fa-thumbs-up", "far fa-times-circle", "far fa-trash-alt", "far fa-user", "far fa-user-circle", "far fa-window-close", "far fa-window-maximize", "far fa-window-minimize", "far fa-window-restore", "fab fa-500px", "fab fa-accessible-icon", "fab fa-accusoft", "fab fa-adn", "fab fa-adversal", "fab fa-affiliatetheme", "fab fa-algolia", "fab fa-amazon", "fab fa-amazon-pay", "fab fa-amilia", "fab fa-android", "fab fa-angellist", "fab fa-angrycreative", "fab fa-angular", "fab fa-app-store", "fab fa-app-store-ios", "fab fa-apper", "fab fa-apple", "fab fa-apple-pay", "fab fa-asymmetrik", "fab fa-audible", "fab fa-autoprefixer", "fab fa-avianex", "fab fa-aviato", "fab fa-aws", "fab fa-bandcamp", "fab fa-behance", "fab fa-behance-square", "fab fa-bimobject", "fab fa-bitbucket", "fab fa-bitcoin", "fab fa-bity", "fab fa-black-tie", "fab fa-blackberry", "fab fa-blogger", "fab fa-blogger-b", "fab fa-bluetooth", "fab fa-bluetooth-b", "fab fa-btc", "fab fa-buromobelexperte", "fab fa-buysellads", "fab fa-cc-amazon-pay", "fab fa-cc-amex", "fab fa-cc-apple-pay", "fab fa-cc-diners-club", "fab fa-cc-discover", "fab fa-cc-jcb", "fab fa-cc-mastercard", "fab fa-cc-paypal", "fab fa-cc-stripe", "fab fa-cc-visa", "fab fa-centercode", "fab fa-chrome", "fab fa-cloudscale", "fab fa-cloudsmith", "fab fa-cloudversify", "fab fa-codepen", "fab fa-codiepie", "fab fa-connectdevelop", "fab fa-contao", "fab fa-cpanel", "fab fa-creative-commons", "fab fa-css3", "fab fa-css3-alt", "fab fa-cuttlefish", "fab fa-d-and-d", "fab fa-dashcube", "fab fa-delicious", "fab fa-deploydog", "fab fa-deskpro", "fab fa-deviantart", "fab fa-digg", "fab fa-digital-ocean", "fab fa-discord", "fab fa-discourse", "fab fa-dochub", "fab fa-docker", "fab fa-draft2digital", "fab fa-dribbble", "fab fa-dribbble-square", "fab fa-dropbox", "fab fa-drupal", "fab fa-dyalog", "fab fa-earlybirds", "fab fa-edge", "fab fa-elementor", "fab fa-ember", "fab fa-empire", "fab fa-envira", "fab fa-erlang", "fab fa-ethereum", "fab fa-etsy", "fab fa-expeditedssl", "fab fa-facebook", "fab fa-facebook-f", "fab fa-facebook-messenger", "fab fa-facebook-square", "fab fa-firefox", "fab fa-first-order", "fab fa-firstdraft", "fab fa-flickr", "fab fa-flipboard", "fab fa-fly", "fab fa-font-awesome", "fab fa-font-awesome-alt", "fab fa-font-awesome-flag", "fab fa-fonticons", "fab fa-fonticons-fi", "fab fa-fort-awesome", "fab fa-fort-awesome-alt", "fab fa-forumbee", "fab fa-foursquare", "fab fa-free-code-camp", "fab fa-freebsd", "fab fa-get-pocket", "fab fa-gg", "fab fa-gg-circle", "fab fa-git", "fab fa-git-square", "fab fa-github", "fab fa-github-alt", "fab fa-github-square", "fab fa-gitkraken", "fab fa-gitlab", "fab fa-gitter", "fab fa-glide", "fab fa-glide-g", "fab fa-gofore", "fab fa-goodreads", "fab fa-goodreads-g", "fab fa-google", "fab fa-google-drive", "fab fa-google-play", "fab fa-google-plus", "fab fa-google-plus-g", "fab fa-google-plus-square", "fab fa-google-wallet", "fab fa-gratipay", "fab fa-grav", "fab fa-gripfire", "fab fa-grunt", "fab fa-gulp", "fab fa-hacker-news", "fab fa-hacker-news-square", "fab fa-hips", "fab fa-hire-a-helper", "fab fa-hooli", "fab fa-hotjar", "fab fa-houzz", "fab fa-html5", "fab fa-hubspot", "fab fa-imdb", "fab fa-instagram", "fab fa-internet-explorer", "fab fa-ioxhost", "fab fa-itunes", "fab fa-itunes-note", "fab fa-jenkins", "fab fa-joget", "fab fa-joomla", "fab fa-js", "fab fa-js-square", "fab fa-jsfiddle", "fab fa-keycdn", "fab fa-kickstarter", "fab fa-kickstarter-k", "fab fa-korvue", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "fab fa-leanpub", "fab fa-less", "fab fa-line", "fab fa-linkedin", "fab fa-linkedin-in", "fab fa-linode", "fab fa-linux", "fab fa-lyft", "fab fa-magento", "fab fa-maxcdn", "fab fa-medapps", "fab fa-medium", "fab fa-medium-m", "fab fa-medrt", "fab fa-meetup", "fab fa-microsoft", "fab fa-mix", "fab fa-mixcloud", "fab fa-mizuni", "fab fa-modx", "fab fa-monero", "fab fa-napster", "fab fa-nintendo-switch", "fab fa-node", "fab fa-node-js", "fab fa-npm", "fab fa-ns8", "fab fa-nutritionix", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "fab fa-opencart", "fab fa-openid", "fab fa-opera", "fab fa-optin-monster", "fab fa-osi", "fab fa-page4", "fab fa-pagelines", "fab fa-palfed", "fab fa-patreon", "fab fa-paypal", "fab fa-periscope", "fab fa-phabricator", "fab fa-phoenix-framework", "fab fa-php", "fab fa-pied-piper", "fab fa-pied-piper-alt", "fab fa-pied-piper-pp", "fab fa-pinterest", "fab fa-pinterest-p", "fab fa-pinterest-square", "fab fa-playstation", "fab fa-product-hunt", "fab fa-pushed", "fab fa-python", "fab fa-qq", "fab fa-quinscape", "fab fa-quora", "fab fa-ravelry", "fab fa-react", "fab fa-readme", "fab fa-rebel", "fab fa-red-river", "fab fa-reddit", "fab fa-reddit-alien", "fab fa-reddit-square", "fab fa-rendact", "fab fa-renren", "fab fa-replyd", "fab fa-resolving", "fab fa-rocketchat", "fab fa-rockrms", "fab fa-safari", "fab fa-sass", "fab fa-schlix", "fab fa-scribd", "fab fa-searchengin", "fab fa-sellcast", "fab fa-sellsy", "fab fa-servicestack", "fab fa-shirtsinbulk", "fab fa-simplybuilt", "fab fa-sistrix", "fab fa-skyatlas", "fab fa-skype", "fab fa-slack", "fab fa-slack-hash", "fab fa-slideshare", "fab fa-snapchat", "fab fa-snapchat-ghost", "fab fa-snapchat-square", "fab fa-soundcloud", "fab fa-speakap", "fab fa-spotify", "fab fa-stack-exchange", "fab fa-stack-overflow", "fab fa-staylinked", "fab fa-steam", "fab fa-steam-square", "fab fa-steam-symbol", "fab fa-sticker-mule", "fab fa-strava", "fab fa-stripe", "fab fa-stripe-s", "fab fa-studiovinari", "fab fa-stumbleupon", "fab fa-stumbleupon-circle", "fab fa-superpowers", "fab fa-supple", "fab fa-telegram", "fab fa-telegram-plane", "fab fa-tencent-weibo", "fab fa-themeisle", "fab fa-trello", "fab fa-tripadvisor", "fab fa-tumblr", "fab fa-tumblr-square", "fab fa-twitch", "fab fa-twitter", "fab fa-twitter-square", "fab fa-typo3", "fab fa-uber", "fab fa-uikit", "fab fa-uniregistry", "fab fa-untappd", "fab fa-usb", "fab fa-ussunnah", "fab fa-vaadin", "fab fa-viacoin", "fab fa-viadeo", "fab fa-viadeo-square", "fab fa-viber", "fab fa-vimeo", "fab fa-vimeo-square", "fab fa-vimeo-v", "fab fa-vine", "fab fa-vk", "fab fa-vnv", "fab fa-vuejs", "fab fa-weibo", "fab fa-weixin", "fab fa-whatsapp", "fab fa-whatsapp-square", "fab fa-whmcs", "fab fa-wikipedia-w", "fab fa-windows", "fab fa-wordpress", "fab fa-wordpress-simple", "fab fa-wpbeginner", "fab fa-wpexplorer", "fab fa-wpforms", "fab fa-xbox", "fab fa-xing", "fab fa-xing-square", "fab fa-y-combinator", "fab fa-yahoo", "fab fa-yandex", "fab fa-yandex-international", "fab fa-yelp", "fab fa-yoast", "fab fa-youtube", "fab fa-youtube-square"];
const style = {
  display: 'none'
};
function IconPicker(setter) {
  function popup() {
    const popup = document.getElementById('iconPicker');
    const pickerText = document.getElementById('pickerText');
    popup.style.display === 'none' ? popup.style.display = 'inherit' : popup.style.display = 'none';
    popup.style.display === 'none' ? pickerText.innerText = 'ESCOLHER O ÍCONE' : pickerText.innerText = 'FECHAR SELEÇÃO';
  }

  function renderIconList(iconList) {
    const fragment = [];
    iconList.forEach(icon => {
      function onClick() {
        setter({
          icon
        });
      }

      fragment.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "col-2 icon-wrapper text-center"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: icon,
        onClick: onClick
      })));
    });
    return fragment;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "bigBtn",
    onClick: popup
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fas fa-icons"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    id: "pickerText"
  }, "ESCOLHER O \xCDCONE"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "iconPicker",
    className: "popup",
    style: style
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, renderIconList(iconList))));
}

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Input; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Input({
  attr,
  label,
  type,
  value,
  className,
  setAttributes: setter
}) {
  function onChange(event) {
    const attributes = {};
    attributes[attr] = event.target.value;
    setter(attributes);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      margin: "10px 0"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: attr
  }, label), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: attr,
    id: attr,
    type: type !== null && type !== void 0 ? type : 'text',
    value: value,
    onChange: onChange,
    className: className
  }));
}

/***/ }),

/***/ "./src/components/Select.js":
/*!**********************************!*\
  !*** ./src/components/Select.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Select; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Select({
  label,
  attr,
  options,
  value,
  setter
}) {
  function renderOptions(options) {
    const optionsList = [];
    options.forEach(option => {
      const selected = option.value === value;
      optionsList.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: option.value,
        selected: selected
      }, option.label));
    });
    return optionsList;
  }

  function onChange(event) {
    const attributes = {};
    attributes[attr] = event.target.value;
    setter(attributes);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      margin: "10px 0"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: attr
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: attr,
    id: attr,
    onChange: onChange
  }, renderOptions(options)));
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Select */ "./src/components/Select.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Input */ "./src/components/Input.js");
/* harmony import */ var _components_GaleryBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/GaleryBtn */ "./src/components/GaleryBtn.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_IconPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/IconPicker */ "./src/components/IconPicker.js");
/* harmony import */ var lighten_darken_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lighten-darken-color */ "./node_modules/lighten-darken-color/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */









/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function edit({
  attributes,
  setAttributes,
  isSelected
}) {
  const {
    type,
    text,
    size,
    img,
    icon,
    color
  } = attributes;
  const typeOptions = [{
    label: 'Avatar com Ícone',
    value: 'icon'
  }, {
    label: 'Avatar com Imagem',
    value: 'img'
  } // { label: 'Avatar com Letra', value: 'letter' },
  ];
  const sizeOptions = [{
    label: 'Grande',
    value: 'large'
  }, {
    label: 'Médio',
    value: 'medium'
  }, {
    label: 'Pequeno',
    value: ''
  }];
  const textSize = size === 'large' ? 'h3' : size === 'medium' ? 'h5' : '';

  function switchType(type) {
    switch (type) {
      case 'icon':
        const iconBackground = {
          background: (0,lighten_darken_color__WEBPACK_IMPORTED_MODULE_9__.LightenDarkenColor)(color, 50)
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "image type-icon",
          style: iconBackground
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          className: icon !== null && icon !== void 0 ? icon : 'fas fa-user',
          "aria-hidden": "true",
          style: {
            color
          }
        }));

      case 'img':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "image"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: img !== null && img !== void 0 ? img : 'https://picsum.photos/id/823/400',
          alt: "Avatar"
        }));
    }
  }

  function switchContentChoice(type) {
    switch (type) {
      case 'icon':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Cor do \xEDcone",
          attr: "color",
          type: "color",
          value: color,
          setter: setAttributes
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IconPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
          setter: setAttributes
        }));

      case 'img':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_GaleryBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
          text: "ESCOLHER A IMAGEM",
          icon: "fas fa-image",
          allowedTypes: ['image'],
          attr: "img",
          setter: setAttributes
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Ou insira um endere\xE7o:",
          attr: "img",
          value: img !== null && img !== void 0 ? img : '',
          setter: setAttributes
        }));
    }
  }

  return isSelected ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'edit block-responsive'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col config"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Selecione o tipo de avatar",
    attr: "type",
    value: type,
    options: typeOptions,
    setter: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Selecione o tamanho do avatar",
    attr: "size",
    value: size,
    options: sizeOptions,
    setter: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Texto que ser\xE1 exibido junto ao avatar (Opcional)",
    attr: "text",
    value: text,
    setter: setAttributes
  }), switchContentChoice(type)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row preview"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 text-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'br-avatar ' + size,
    title: text
  }, switchType(type))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'col-12 text-center mt-3 ' + textSize
  }, text)))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'show block-responsive'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 text-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'br-avatar ' + size,
    title: text
  }, switchType(type))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'col-12 text-center mt-3 ' + textSize
  }, text)));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/avatar', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lighten_darken_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lighten-darken-color */ "./node_modules/lighten-darken-color/index.js");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */



/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const {
    type,
    text,
    size,
    img,
    icon,
    color
  } = attributes;
  const textSize = size === 'large' ? 'h3' : size === 'medium' ? 'h5' : '';

  function switchType(type) {
    switch (type) {
      case 'icon':
        const iconBackground = {
          background: (0,lighten_darken_color__WEBPACK_IMPORTED_MODULE_3__.LightenDarkenColor)(color, 50)
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "image type-icon",
          style: iconBackground
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          className: icon !== null && icon !== void 0 ? icon : 'fas fa-user',
          "aria-hidden": "true",
          style: {
            color
          }
        }));

      case 'img':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "image"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: img !== null && img !== void 0 ? img : 'https://picsum.photos/id/823/400',
          alt: "Avatar"
        }));

      /* case 'letter':
      	return (
      		<span className="image letter bg-support-01 text-pure-0 type-letter">
      			{ letter }
      		</span>
      	); */
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 text-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'br-avatar ' + size,
    title: text
  }, switchType(type))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'col-12 text-center mt-3 ' + textSize
  }, text)));
}

/***/ }),

/***/ "./node_modules/lighten-darken-color/component/colorshade.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lighten-darken-color/component/colorshade.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function shade(col, amt){
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

/* harmony default export */ __webpack_exports__["default"] = (shade);

/***/ }),

/***/ "./node_modules/lighten-darken-color/index.js":
/*!****************************************************!*\
  !*** ./node_modules/lighten-darken-color/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LightenDarkenColor": function() { return /* binding */ LightenDarkenColor; }
/* harmony export */ });
/* harmony import */ var _component_colorshade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/colorshade */ "./node_modules/lighten-darken-color/component/colorshade.js");

 
const LightenDarkenColor = _component_colorshade__WEBPACK_IMPORTED_MODULE_0__["default"];




/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwp_idg_ufr_avatar"] = self["webpackChunkwp_idg_ufr_avatar"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map