// initiation phase

// we create an empty element and attach the prototyped method
document.createElement("html").frobnicate = function() {
    return 42; // April 2007: changed this back to 42 as 41 is quirky in Safari
};
