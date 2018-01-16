'use strict';

const nav = document.querySelector('nav');
m.mount(nav, Navbar); // must be done here to work...



let array1 = [];
array1[0] = {coinName: "BTC", priceInE: "12 000 e", changePercent: "+9.0 %"};
array1[1] = {coinName: "LTC", priceInE: "250 e", changePercent: "+18.0 %"};

const Prices = {
	
	view: function(vnode) {
		
		const arr = vnode.attrs.coinArray;
		const resultArray = [];
		
		for (let i = 0; i < arr.length; i++) {
			
			resultArray[i] = priceItem(arr[i]);
		}
			
		return m("div", {class: "priceContainer"}, resultArray);		
	} // end view()
};


const main = document.querySelector('main');
m.render(main, m(Prices, {coinArray: array1}));






function priceItem(coinObj) {
	
	return m("div", {class: "priceBox"}, 
	[
		m("div", {class: "coinName"}, coinObj.coinName),
		m("div", {class: "priceInE"}, coinObj.priceInE),
		m("div", {class: "changePercent"}, coinObj.changePercent)
	]);
}




//m(PriceItem, {coinName: "Bitcoin (BTC)", priceInE: "12 000 e", changePercent: "+9.0 %"});


