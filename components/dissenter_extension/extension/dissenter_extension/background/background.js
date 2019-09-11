var BROWSER_CONFIG = {"name":"Google Chrome","slug":"chrome","version":"0.1.9"};/* BROWSERS */
var BROWSER_CHROME_SLUG = 'chrome';
var BROWSER_FIREFOX_SLUG = 'firefox';
var BROWSER_EDGE_SLUG = 'edge';
var BROWSER_SAFARI_SLUG = 'safari';

/* BASE URI FOR DISSENTER EXTENSION */
var DISSENTER_HOME_PAGE_URI = "https://dissenter.com";
var BASE_URI = 'https://dissenter.com/discussion/begin-extension?url=';
var COMMENT_COUNT_URI = "https://dissenter.com/notification/comment-count?url=";

/* ACTIONS */
var BACKGROUND_ACTION_OPEN_POPUP = 'open_popup';
var BACKGROUND_ACTION_GET_KEY = 'get_key';
var BACKGROUND_ACTION_SET_KEY = 'set_key';
var BACKGROUND_ACTION_SET_BADGE = 'set_badge';
var BACKGROUND_ACTION_TAB_UPDATED = 'tab_updated';

/* COLORS */
var COLOR_GAB_GREEN = '#21cf7b';

/* SEARCH ENGINES */
var SEARCH_ENGINES = [
    {
        name: "DuckDuckGo",
        url: "https://duckduckgo.com/?q=",
        icon: "duckduckgo.svg"
    },
    {
        name: "Startpage",
        url: "https://www.startpage.com/do/search?q=",
        icon: "startpage.png"
    },
    {
        name: "Qwant",
        url: "https://www.qwant.com/?q=",
        icon: "qwant.svg"
    },
    {
        name: "Bing",
        url: "https://www.bing.com/search?q=",
        icon: "bing.svg"
    },
    {
        name: "Yahoo!",
        url: "https://search.yahoo.com/search?p=",
        icon: "yahoo.svg"
    },
    {
        name: "Google",
        url: "https://www.google.com/search?q=",
        icon: "google.svg"
    }
];

/* STORAGE */
var STORAGE_BASE = 'gab_dissenter_extension_data';

var TWITTER_BUTTONS_ENABLED = 'twitter_buttons_enabled';
var REDDIT_BUTTONS_ENABLED = 'reddit_buttons_enabled';
var YOUTUBE_BUTTONS_ENABLED = 'youtube_buttons_enabled';
var WINDOW_SIDEBAR_UNAVAILABLE_ENABLED = 'window_sidebar_unavailable_enabled';
var WEBSITE_COMMENT_BADGE_ENABLED = 'website_comment_badge_enabled';
var DISSENT_DISQUS_BUTTONS_ENABLED = 'dissent_disqus_buttons_enabled';
var WIKIPEDIA_BUTTONS_ENABLED = 'wikipedia_buttons_enabled';
var CUSTOM_NEW_TAB_ENABLED = 'custom_new_tab_enabled';

/* NEW TAB */
var NT_DEFAULT_SEARCH_ENGINE = 'nt_default_search_engine';

var NT_TOP_SITES_ENABLED = 'nt_top_sites_enabled';
var NT_TOP_SITES_LIMIT = 'nt_top_sites_limit';
var NT_TOP_SITES_SIZE = 'nt_top_sites_size';
var NT_TOP_SITES_SHAPE = 'nt_top_sites_shape';
var NT_TOP_SITES_HIGHLIGHT = 'nt_top_sites_highlight';
var NT_TOP_SITES_SHOW_TITLE = 'nt_top_sites_show_title';

var NT_DATETIME_SHOW_DATE = 'nt_datetime_show_date';
var NT_DATETIME_SHOW_TIME = 'nt_datetime_show_time';

var NT_COLORS_SEARCH = 'nt_colors_search';
var NT_COLORS_TEXT = 'nt_colors_text';

var NT_BACKGROUND_SOLID_COLOR = 'nt_background_solid_color';
var NT_BACKGROUND_IMAGE = 'nt_background_image';
var NT_BACKGROUND_RANDOM_GRADIENT = 'nt_background_random_gradient';
var NT_BACKGROUND_IMAGE_URL = 'nt_background_image_url';

var NT_DISSENTER_ENABLED = 'nt_dissenter_enabled';
var NT_DISSENTER_DEFAULT_TAB = 'nt_dissenter_default_tab';

var NT_DISSENTER_PINS = 'nt_dissenter_pins';
var NT_DISSENTER_HIDE_TIPS = 'nt_dissenter_hide_tips';

/* STORAGE DEFAULTS */
var STORAGE_DEFAULT_PARAMS = {};
STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[WEBSITE_COMMENT_BADGE_ENABLED] = false;
STORAGE_DEFAULT_PARAMS[DISSENT_DISQUS_BUTTONS_ENABLED] = false;
STORAGE_DEFAULT_PARAMS[WIKIPEDIA_BUTTONS_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[CUSTOM_NEW_TAB_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[NT_DEFAULT_SEARCH_ENGINE] = SEARCH_ENGINES[0];
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_LIMIT] = 20;
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SIZE] = "md";
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHAPE] = "circle";
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_HIGHLIGHT] = "light";
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHOW_TITLE] = true;
STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_DATE] = true;
STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_TIME] = true;
STORAGE_DEFAULT_PARAMS[NT_COLORS_SEARCH] = "white";
STORAGE_DEFAULT_PARAMS[NT_COLORS_TEXT] = "white";
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_SOLID_COLOR] = "";
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_IMAGE] = "";
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_IMAGE_URL] = "../assets/images/defiant-bg1.jpg";
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_RANDOM_GRADIENT] = false;
STORAGE_DEFAULT_PARAMS[NT_DISSENTER_ENABLED] = false;
STORAGE_DEFAULT_PARAMS[NT_DISSENTER_DEFAULT_TAB] = "home";
STORAGE_DEFAULT_PARAMS[NT_DISSENTER_PINS] = {
    "page1": [
        {url:"https://gab.com", title:"Gab"},
        {url:"https://dissenter.com", title:"Dissenter"},
        {url:"https://www.bitchute.com/", title:"Bitchute"},
        {url:"https://www.epik.com/", title:"Epik Domains"},
        {url:"https://chrome.google.com/webstore", title:"Get Extensions"}
    ]
};
STORAGE_DEFAULT_PARAMS[NT_DISSENTER_HIDE_TIPS] = false;

var STORAGE_KEY_ALL = 'all';

/**
 * @description Internal helper to check if parameter is an object
 * @function isObject
 * @param {*} obj
 * @returns {boolean}
 */
var isObject = function(obj) {
    if (isArray(obj) || isDate(obj)) return false;
    return (obj !== null && typeof obj === 'object');
};

/**
 * @description Internal helper to check if parameter is a string
 * @function isString
 * @param {*} str
 * @returns {boolean}
 */
var isString = function(str) {
    return (typeof str === 'string' || str instanceof String);
};

/**
 * @description Internal helper to check if parameter is a date
 * @function isDate
 * @param {*} date
 * @returns {boolean}
 */
var isDate = function(date) {
    if (isString(date) || isArray(date) || date == undefined || date == null) return false;
    return (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date));
};

/**
 * @description Internal helper to check if parameter is an array
 * @function isArray
 * @param {*} arr
 * @returns {boolean}
 */
var isArray = function(arr) {
    return Array.isArray(arr);
};

/**
 * @description Internal helper to check if DOMContentLoaded
 * @function ready
 * @param {Function} fn
 */
function ready(fn) {
    var d = document;
    (d.readyState == 'loading') ? d.addEventListener('DOMContentLoaded', fn): fn();
};

/**
 * @description Internal helper to get value from query string
 * @function getQueryStringValue
 * @param {String} key
 * @returns {String|null}
 */
function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
};

function getDissenterDLogoAsSVG(height, width, fillColor, backgroundColor) {
    //Create "g" dissent icon
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.setProperty("height", height, "important");
    svg.style.setProperty("width", width, "important");
    svg.setAttribute("version", "1.1");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute("viewBox", "0 0 500 500");

    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.style.setProperty("transform", "translate(17, 37)", "important");

    var solid = document.createElementNS("http://www.w3.org/2000/svg", "path");
    solid.setAttribute("d", "M244.885937,0 L193.657763,0 L65.5018905,0 L45.5665325,0 C20.4992438,0 0,20.5016933 0,45.5466667 L0,381.453333 C0,406.504 20.4992438,427 45.5665325,427 L65.5018905,427 L193.657763,427 L244.885937,427 C389.348933,427 467,326.3134 467,213.5 C467,100.6866 393.563837,0 244.885937,0");
    solid.setAttribute("fill", fillColor);

    var line1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line1.setAttribute("d", "M309.275885,155 L121.729792,155 C115.246045,155 110,149.623395 110,143.002906 C110,136.376605 115.246045,131 121.729792,131 L309.275885,131 C315.759633,131 321,136.376605 321,143.002906 C321,149.623395 315.759633,155 309.275885,155");
    line1.setAttribute("fill", backgroundColor);

    var line2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line2.setAttribute("d", "M309.275885,225 L121.729792,225 C115.246045,225 110,219.623395 110,213.002906 C110,206.376605 115.246045,201 121.729792,201 L309.275885,201 C315.759633,201 321,206.376605 321,213.002906 C321,219.623395 315.759633,225 309.275885,225");
    line2.setAttribute("fill", backgroundColor);

    var line3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line3.setAttribute("d", "M121.78718,296 C115.271711,296 110,290.623395 110,284.002906 C110,277.376605 115.271711,272 121.78718,272 L247.218525,272 C253.733994,272 259,277.376605 259,284.002906 C259,290.623395 253.733994,296 247.218525,296 L121.78718,296 Z");
    line3.setAttribute("fill", backgroundColor);

    g.appendChild(solid);
    g.appendChild(line1);
    g.appendChild(line2);
    g.appendChild(line3);

    svg.appendChild(g);

    return svg;
};

function addManyClasses(elem, classes) {
    if (!isArray(classes)) return false;

    for (var i = 0, length = classes.length; i < length; i++) {
        elem.classList.add(classes[i]);
    };
};

function removeManyClasses(elem, classes) {
    if (!isArray(classes)) return false;
    
    for (var i = 0, length = classes.length; i < length; i++) {
      elem.classList.remove(classes[i]);
  };
};

/**
 * @description - Set extension icon badge with text
 * @param {String} text
 */
function setExtensionIconBadge(text) {
    if (!text) text = '';
    text = String(text);
    text = formatBadgeText(text);

    chrome.browserAction.setBadgeBackgroundColor({
        color: "#f40e1c"
    });

    chrome.browserAction.setBadgeText({
        text: text
    });

    if (BROWSER_CONFIG.slug === BROWSER_FIREFOX_SLUG) {
        chrome.browserAction.setBadgeTextColor({
            color: "#ffffff"
        });
    }
};

/**
 * @description - Helper to format badge text depending on different lengths
 * @param {String} text
 * @returns {String} formattedText
 */
function formatBadgeText(text) {
    //Text must exist
    if (!text) return '';

    //Convert to number
    var num = parseInt(text);
    //If doesn't exist, return nothing
    if (num < 1) return '';

    //Placeholder
    var formattedText = '';

    //Check for lengths
    if (num < 1000) {
        return String(num);
    }
    else if (num >= 1000 && num < 10000) {
        var rounded = truncateNumber(num, 2);
        rounded = rounded / 10;
        formattedText = rounded + 'k';
    }
    else if (num >= 10000 && num < 100000) {
        var rounded = truncateNumber(num, 2);
        formattedText = rounded + 'k';
    }
    else if (num >= 100000 && num < 1000000) {
        var rounded = truncateNumber(num, 3);
        formattedText = rounded + 'k';
    }
    else if (num >= 1000000) {
        formattedText = '1M+';
    }

    //Return now
    return formattedText;
};

/**
 * @description - Helper to truncate number
 * @param {Number} number
 * @param {Number} truncate
 * @param {String}
 */
function truncateNumber(number, truncate) {
    if (!number) return 0;
    return number.toString().substring(0, truncate);
};

/**
 * @description - Helper function to perform xhr request
 * @param  {Object}   options
 * @param  {String}   options.method
 * @param  {String}   options.url
 * @param  {Object}   options.params
 * @param  {Array}    options.headers
 * @param  {Function} callback - {error, data}
 * @return {Function}
 */
function performRequest(options, callback) {
    //Must have options
    if (!options || !isObject(options)) return callback(false, {});

    //Get data
    var method = options.method || '';
    var url = options.url || '';
    var params = options.params;
    var headers = options.headers;

    //Must have method, url
    if (!method || !url) {
        if (callback) return callback(false, {});
        return false;
    }

    //Create new request
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    //Set headers
    xhr.setRequestHeader('Content-type', 'application/json');
    //Check for headers
    if (headers && isArray(headers)) {
        //Cycle
        for (var i = 0; i < headers.length; i++) {
            var header = headers[i];
            //Ensure is object
            if (isObject(header)) {
                //Set
                xhr.setRequestHeader(header.key, header.value);
            }
        };
    }

    //Send params
    if (params && isObject(params)) {
        xhr.send(JSON.stringify(params));
    }
    else {
        xhr.send({});
    }

    //On load handler
    xhr.onload = function() {
        //Attempt to parse response
        var data = {};
        try { data = JSON.parse(xhr.responseText); }
        catch(e) { /**/ };
        //
        if (callback) callback(false, data);
    };

    //On error handler
    xhr.onerror = function() {
        //Attempt to parse response
        var data = {};
        try { data = JSON.parse(xhr.responseText); }
        catch(e) { /**/ };
        //
        if (callback) callback(true, data);
    };
};

/**
 * @description - Create a new background page
 */
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({ url: 'index.html' });
});

/**
 * @description - On tabs updated, send message to content script
 */
chrome.tabs.onUpdated.addListener(function(tabId) {
    //Reset first so we don't have hanging counts from prior tabs
    setExtensionIconBadge('');
    //Send message
    chrome.tabs.sendMessage(tabId, {
        action: BACKGROUND_ACTION_TAB_UPDATED
    });
});

/**
 * @description - On tabs activated, send message to content script
 */
chrome.tabs.onActivated.addListener(function(activeInfo) {
    //Reset first so we don't have hanging counts from prior tabs
    setExtensionIconBadge('');
    //Send message
    chrome.tabs.sendMessage(activeInfo.tabId, {
        action: BACKGROUND_ACTION_TAB_UPDATED
    });
});

//Not on edge
if (BROWSER_CONFIG.slug !== "edge") {
    /**
     * @description - Within the URL box, type "dissent" to search Dissenter.com
     */
    chrome.omnibox.onInputEntered.addListener(function(text, disposition) {
        // Encode user input for special characters , / ? : @ & = + $ #
        var newURL = 'https://dissenter.com/search?q=' + encodeURIComponent(text);

        if (disposition == "currentTab") {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs) {
                var tab = tabs[0];
                chrome.tabs.update(tab.id, { url: newURL });
            });
        }
        else {
            chrome.tabs.create({ url: newURL });
        }
    });

}

/**
 * @description - onMessage Handler for sending messages from elsewhere to this background.js file
 * @returns callback(*)
 */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    var action = message['action'] || '';

    if (action === BACKGROUND_ACTION_OPEN_POPUP) {
        //Get url, height
        var url = message['url'] || '';
        var windowHeight = message['height'] || 0;

        //Set variables
        var screenWidth = screen.width;
        var screenHeight = screen.height;
        var top = screenHeight - windowHeight;

        //Get popup url
        var popupURL = chrome.extension.getURL("popup/popup.html?url=" + url);

        var showWindow = gdes.getValue(WINDOW_SIDEBAR_UNAVAILABLE_ENABLED);

        if (BROWSER_CONFIG.slug === BROWSER_FIREFOX_SLUG && !showWindow) {
            chrome.runtime.sendMessage({url: url});
            return true;
        }
        
        //Open new popup window with url using popup.html
        chrome.windows.create({
            url: popupURL,
            width: 420,
            height: windowHeight,
            top: top,
            left: screenWidth,
            type: 'popup'
        });
    }
    else if (action === BACKGROUND_ACTION_GET_KEY) {
        var key = message.key || '';

        //Key must exist
        if (!key) {
            if (sendResponse) sendResponse(null);
            return true;
        }

        //Get/Send value
        var value = gdes.getValue(key);

        if (sendResponse) sendResponse(value);
    }
    else if (action === BACKGROUND_ACTION_SET_KEY) {
        //Get key/value
        var key = message.key || '';
        var value = message.value;

        //Must be key
        if (!key) return true;

        //Set value in storage
        gdes.setValue(key, value);

        //If we're toggling badge off, remove current badge
        if (key === WEBSITE_COMMENT_BADGE_ENABLED && !value) {
            setExtensionIconBadge('');
        }
    }
    else if (action === BACKGROUND_ACTION_SET_BADGE) {
        var url = message.url || '';

        //Url must exist
        if (!url || !isString(url)) {
            setExtensionIconBadge('');
            return true;
        }

        //Must be valid url
        if (url.indexOf('://') == -1) {
            setExtensionIconBadge('');
            return true;
        }

        //
        var fetchUrl = COMMENT_COUNT_URI + encodeURIComponent(url);

        //Perform request to get comment count
        performRequest({
            method: 'GET',
            url: fetchUrl
        }, function(error, data) {
            //Must be object
            if (!isObject(data)) {
                setExtensionIconBadge('');
                return true;
            }
            //Must be successful
            if (!data.success) {
                setExtensionIconBadge('');
                return true;
            }

            //Convert to string
            var commentCount = String(data.url.stats.commentCount);

            //Set badge
            setExtensionIconBadge(commentCount);
        });
    }

    //Async
    return true;
});

/**
 * @description - GDEStorage - Gab Dissenter Extension Storage
 */
function GDEStorage() {
    //Global scope
    var scope = this;

    //Functions


    /**
     * @description - Setup method
     * @function setup
     * @return {Boolean} success
     */
    function setup() {
        //Must exist
        if (window.localStorage == null) return false;

        if (!window.localStorage[STORAGE_BASE] && !isObject(window.localStorage[STORAGE_BASE])) {
            window.localStorage[STORAGE_BASE] = JSON.stringify(STORAGE_DEFAULT_PARAMS);
        }

        var params = window.localStorage[STORAGE_BASE];
        params = JSON.parse(params);

        //Check if all keys exist on the localStorage object, if not set default params for those keys
        for (var key in STORAGE_DEFAULT_PARAMS) {
            if (params[key] === undefined) {
                scope.setValue(key, STORAGE_DEFAULT_PARAMS[key]);
            }
        }

        return true;
    };


    //Global functions


    /**
     * @description - Init
     * @function scope.init
     * @return {Boolean} success
     */
    scope.init = function() {
        //Setup if none
        setup();

        //Success
        return true;
    };

    /**
     * @description - Helper to get value from storage
     * @function scope.getValue
     * @param {String} key
     * @return {*} value
     */
    scope.getValue = function(key) {
        //Must exist
        if (window.localStorage == null && isObject(window.localStorage)) return false;

        //Get data, parse
        var params = window.localStorage[STORAGE_BASE];
        params = JSON.parse(params);

        //If all, return all
        if (key === STORAGE_KEY_ALL) return params;

        //Return key value
        return params[key];
    };

    /**
     * @description - Helper to set value to storage
     * @function scope.getValue
     * @param {String} key
     * @param {*} value
     * @return {Boolean} success
     */
    scope.setValue = function(key, value) {
        //Must exist
        if (window.localStorage == null && isObject(window.localStorage)) return false;

        //Get data, parse
        var params = window.localStorage[STORAGE_BASE];
        params = JSON.parse(params);

        //Set value
        params[key] = value;

        //Reset
        window.localStorage[STORAGE_BASE] = JSON.stringify(params);

        //Success
        return true;
    };
};


//Set up storage on load and init
var gdes = new GDEStorage();
gdes.init();
