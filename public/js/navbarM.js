'use strict';

const Navbar = {
	
    view: function() {
		
        return m("div", {class: "lowerNavPart"}, 
		[
		    m("div", {class: "tab priceTab"}, "Prices"), 
		    m("div", {class: "tab newsTab"}, "News")
		]);
    }
}; // end Navbar
