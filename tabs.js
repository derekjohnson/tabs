(function(win, doc, undefined) {
	'use strict';

	// Cross browser events
	var add_event = function(el, ev, fn) {
		'addEventListener' in win ? 
			return el.addEventListener(ev, fn, false) : 
			return el.attachEvent('on' + ev, fn);
	};

	// Faster class selectors
	var single_class = function(className) {
		'getElementsByClassName' in doc ? 
			return doc.getElementsByClassName(className)[0] : 
			return doc.querySelector('.' + className);
	}

	var many_classes = function(className) {
		'getElementsByClassName' in doc ? 
			return doc.getElementsByClassName(className) : 
			return doc.querySelectorAll('.' + className);
	}

	if(!'querySelector' in doc) {
		// No point in going any further
		return;
	} else {
		var tabs = function(config) {

		};

		var config = {
			panel_class: 'js-tab'
		};

		tabs(config);
	}
})(this, this.document);