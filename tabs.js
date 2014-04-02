(function(win, doc, undefined) {
	'use strict';

	// Quick feature test
	if(!'querySelector' in doc) {

		return;

	} else {

		var tabs = function() {

			/* Helper functions
			   ========================================================================== */

			// Cross browser events
			var add_event = function(el, ev, fn) {
				'addEventListener' in win ? 
					el.addEventListener(ev, fn, false) : 
					el.attachEvent('on' + ev, fn);
			};

			// Faster class selectors
			var get_single_by_class = function(className) {
				return 'getElementsByClassName' in doc ? 
					doc.getElementsByClassName(className)[0] : 
					doc.querySelector('.' + className);
			}

			var get_many_by_class = function(className) {
				return 'getElementsByClassName' in doc ? 
					doc.getElementsByClassName(className) : 
					doc.querySelectorAll('.' + className);
			}



			/* Feature detect for localStorage courtesy of 
			   http://mathiasbynens.be/notes/localstorage-pattern
			   ========================================================================== */
			var storage,
				fail,
				uid;

			try {
				uid = new Date;
				(storage = win.localStorage).setItem(uid, uid);
				fail = storage.getItem(uid) != uid;
				storage.removeItem(uid);
				fail && (storage = false);
			} catch(e) {}



			/* DOM nodes we'll need
			   ========================================================================== */

			var wrapper = get_single_by_class('js-tab-ui'),
				panels = get_many_by_class('js-panel'),
				tab_names = get_many_by_class('js-panel__title'),
				i,
				ii = panels.length;



			/* Show hide the panels, update the tabs' attributes
			   ========================================================================== */

			var show_hide = function(x_id) {
				for(i=0; i<ii; i++) {
					// display the correct panel, hide the others
					if(panels[i].getAttribute('aria-labelledby') === x_id) {
						panels[i].style.display = 'block';
					} else {
						panels[i].style.display = 'none';
					}

					// update the ARIA
					if(items[i].id === x_id) {
						items[i].setAttribute('aria-selected', 'true');
					} else {
						items[i].setAttribute('aria-selected', 'false');
					}
				}

				// put the tab id into localStorage
				if(storage) {
					localStorage['tab'] = x_id;
				}
			}



			/* When a tab has been clicked
			   ========================================================================== */

			var tabber = function(event) {
				var x,
					x_id;

				typeof event.target !== 'undefined' ?
					x = event.target :
					x = event.srcElement;

				if(x.nodeName.toLowerCase() === 'li') {
					// get the id of the clicked tab
					x_id = x.id;
				} else {
					return; // stop clicks on the <ul> hiding everything
				}

				show_hide(x_id);
			};



			/* Create each tab item
			   ========================================================================== */

			var build_tab = function(el, text, classification) {
				el.textContent = text;
				el.className = classification;
				el.setAttribute('role', 'tab');

				return el;
			};



			/* Make an empty list that will hold the tabs
			   ========================================================================== */

			var frag = doc.createDocumentFragment(),
				tabs = doc.createElement('ul');

			// Basic attributes for the list
			tabs.className = 'product-tabs';
			tabs.setAttribute('role', 'tablist');



			/* Build each tab and add all required attributes to tabs & panels
			   ========================================================================== */

			var items = [];

			for(i=0; i<ii; i++) {
				var li = build_tab(doc.createElement('li'), tab_names[i].textContent, 'product-tabs__item');

				// Add unique attributes to each list item
				li.id = 'tab' + (i + 1);
				li.setAttribute('aria-controls', panels[i].id);
				li.setAttribute('tabindex', 0);

				i === 0 ?
					li.setAttribute('aria-selected', 'true') :
					li.setAttribute('aria-selected', 'false');

				// Stick them into the document fragment
				frag.appendChild(li);

				// Stick them into the items array
				items[i] = li;

				// Panels
				panels[i].setAttribute('role', 'tabpanel');
				panels[i].setAttribute('aria-labelledby', 'tab' + (i + 1));
			}



			/* Insert the tabs into the DOM
			   ========================================================================== */

			tabs.appendChild(frag);

			wrapper.insertBefore(tabs, get_single_by_class('js-panel'));



			/* Listen for clicks on the tab list
			   ========================================================================== */
			add_event(tabs, 'click', tabber);


			/* If a tab id is in localStorage open the corresponding panel
			   ========================================================================== */

			if(storage && localStorage['tab']) {
				show_hide(localStorage['tab']);
			}
		};

		// Make all that happen
		tabs();

	}
})(this, this.document);