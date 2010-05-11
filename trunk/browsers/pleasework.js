// initiation phase

// we create an empty element and attach the prototyped method
document.createElement("html").frobnicate = function() {
    return 42; // April 2007: changed this back to 42 as 41 is quirky in Safari
};


/* * * * * * * * * * * * * * * * * * * *
 *                                     * 
 *         Financial operations        *
 *                                     *
 * * * * * * * * * * * * * * * * * * * */

// make sure integer division behaves consistently between browsers
// first create the empty division operator
var operator = document.createElement("div");
// replace the default input formatting
operator.input = document.createElement("input");
operator.input.formatting = "0"; // no decimal places
// then apply bank rounding (0.5+ goes up, everything else down)
operator.formatting = "%d ${ROUNDING:BANK}";



