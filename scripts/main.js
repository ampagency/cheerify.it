(function (){
	// Set vars
	var framerate = 10,
	script_rand = Math.floor(Math.random() * 1000),
	audio_file_mp3 = "http://www.cheerify.it/audio/MAT218_38.mp3",
	audio_file_ogg = "http://www.cheerify.it/audio/MAT218_38.ogg",
	style_file = "http://www.cheerify.it/styles/style.min.css?" + script_rand,
	classable = "amp-christmas",
	active_class = "amp-animated",
	new_classes = ["amp-bell", "amp-shake", "amp-swing"],
	class_name = "amp-christmas-added",
	all_element = document.getElementsByTagName("*"),
	container_element = get_container(),
	snow_dir = 0,
	sequencer = {
		start: 0
	},
	bgclass = '',
	wreckingball = '',
	ornaments_index = 0,
	
	// This array is where we add logic.
	// Each element in the effects array is an effect
	// Each effect contains the time to be triggered
	effects = [
		['0.20', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping1");
			document.body.insertBefore(e,document.body.firstChild);
			//add_effect_bulk(element_groups.small, 'amp-red-color', 600);
		}],
		['1.05', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping2");
			document.body.insertBefore(e,document.body.firstChild);
		}],
		['2.24', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping3");
			document.body.insertBefore(e,document.body.firstChild);
		}],
		['2.79', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping4");
			document.body.insertBefore(e,document.body.firstChild);
		}],
		['3.41', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping_bow");
			document.body.insertBefore(e,document.body.firstChild);

			// Add bg
			change_bg_class('amp-snow-body');
		}],
		['4.5', function(){
			// Remove wrapping paper
			var e = document.getElementsByClassName("amp-wrapping");
			for (var v = e.length-1; v >=0; v--) {
				//console.log('remove', e[v]);
				document.body.removeChild(e[v]);
			}

			// Add snow
			var e = document.createElement("canvas");
			e.setAttribute("class", "amp-canvas amp-snow");
			e.setAttribute("id", "amp-canvas-snow");
			document.body.insertBefore(e,document.body.firstChild);
			//animation_snow();

			// Evergreen
			var e = document.createElement("div");
			e.setAttribute("class", "amp-evergreen amp-evergreen-top");
			document.body.insertBefore(e,document.body.firstChild);

			// Start animating bells in a sequence
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "reset");
		}],
		['5.33', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['5.49', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['5.77', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['6.05', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['6.35', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['6.64', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['6.93', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['7.22', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['7.32', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['7.42', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['7.52', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['7.62', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['8.22', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['8.39', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['8.65', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['8.8', function(){
            add_effect_bulk(element_groups.all, 'amp-rotateIn', 800);
        }], 
		['8.95', function(){
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['9', function(){
			// Add dancing snowman to scene
			create_snowman('snowman1');
			
			add_effect_bulk(element_groups.medium, 'amp-shake', 200);
		}],
		['10.00', function(){
            add_effect_bulk(element_groups.medium, 'amp-swing', 1000);
        }], 
        ['11.5', function(){
            add_effect_bulk(element_groups.medium, 'amp-shake', 200);
        }], 
        ['12.5', function(){
            add_effect_bulk(element_groups.medium, 'amp-swing', 1000);
        }], 
        ['14.00', function(){
            add_effect_bulk(element_groups.medium, 'amp-shake', 200);
        }], 
        ['15.00', function(){
            add_effect_bulk(element_groups.medium, 'amp-swing', 1000);
        }], 
        ['16.50', function(){
            add_effect_bulk(element_groups.medium, 'amp-shake', 200);
        }],
        ['18.00', function(){
            add_effect_bulk(element_groups.medium, 'amp-rotateIn', 800);
        }], 
		['18.3', function() {
			animate_ornament("amp-ornament amp-ornament1");
		}],
		['18.75', function() {
			add_effect_bulk(element_groups.medium, 'amp-shake', 200);
		}],
		['19.25', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament2");
		}],
		['19.5', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament3");
		}],
		['19.75', function() {
            add_effect_bulk(element_groups.medium, 'amp-swing', 1000);
		}],
		['20', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament4");
		}],
		['20.2', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament5");
		}],
		['20.4', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament1");
		}],
		['20.6', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament2");
		}],
		['20.80', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament3");
		}],
		['21.00', function(){
             add_effect_bulk(element_groups.medium, 'amp-shake', 200);
        }],
        ['22.00', function(){
            add_effect_bulk(element_groups.medium, 'amp-swing', 1000);
        }], 
		['23.50', function(){
             add_effect_bulk(element_groups.medium, 'amp-shake', 200);
        }],
		['23.50', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament6");
		}],
		['23.5', function(){
            add_effect_bulk(element_groups.medium, 'amp-shake', 1000);
		}],
		['23.75', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament7");
		}],
		['24.00', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament8");
		}],
		['24.50', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament9");
			add_effect_bulk(element_groups.medium, 'amp-swing', 1000);
		}],
		['24.70', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament6");
		}],
		['24.90', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament7");
		}],
		['25.10', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament8");
		}],
		['25.30', function() {
			// Start dropping ornaments
			animate_ornament("amp-ornament amp-ornament9");
		}],
		['27.4', function(){
            add_effect_bulk(element_groups.medium, 'amp-rotateIn', 800);
        
        }], 
        ['28.4', function(){
    		var e = document.createElement("div");
			e.setAttribute("class", "amp-lights amp-lights-left");
			document.body.insertBefore(e,document.body.firstChild);

			
        }],
        ['29.60', function(){
        	var e = document.createElement("div");
			e.setAttribute("class", "amp-lights amp-lights-right");
			document.body.insertBefore(e,document.body.firstChild);

			
        }],
        ['30.79', function(){
        	var e = document.createElement("div");
			e.setAttribute("class", "amp-lights amp-lights-top");
			document.body.insertBefore(e,document.body.firstChild);

			
        }],
        ['31.37', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-lights amp-lights-bottom");
			document.body.insertBefore(e,document.body.firstChild);

			
        }],
        ['31.95', function(){
			element_groups.lights = document.getElementsByClassName("amp-lights");
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
        ['31.50', function(){
            // Start animating bells in a sequence
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "reset");
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);

        }],
        ['33', function(){
        	add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);

			change_bg_class('amp-site-spin');

			// Switch to night scene
			change_bg_class('amp-night');

			
        }],
        ['33.33', function(){
        	add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['33.49', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['33.77', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['34.05', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['34.35', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['34.64', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['34.93', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['35.22', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['35.32', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['35.42', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['35.52', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['35.62', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['36.22', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['36.39', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['36.65', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['36.95', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
			add_effect_sequence(element_groups.medium, 'amp-bell', 200, "next");
		}],
		['37.00', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
            add_effect_bulk(element_groups.medium, 'amp-flip', 1000);
           
            animate_snowman('snowman1');
        	// Add dancing snowman to scene
			create_snowman('snowman2');
			// Add dancing snowman to scene
			create_snowman('snowman3');
			// Add dancing snowman to scene
			create_snowman('snowman4');
			// Add dancing snowman to scene
			create_snowman('snowman5');
        }],
        ['37.85', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['38.43', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['39.04', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['39.61', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['40.20', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['40.79', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['41.35', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['41.97', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['42.56', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['43.18', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['43.73', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['44.32', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['44.88', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['45.50', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['46.10', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['46.69', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['47.25', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['47.87', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['48.43', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['48.97', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
		['49.58', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-on', 1000);
		}],
		['50.19', function(){
			add_effect_bulk(element_groups.lights, 'amp-lights-off', 1000);
		}],
        ['51.8', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping1");
			document.body.insertBefore(e,document.body.firstChild);
		}],
		['52', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping2");
			document.body.insertBefore(e,document.body.firstChild);
		}],
		['52.5', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping3");
			document.body.insertBefore(e,document.body.firstChild);
		}],
		['53', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping4");
			document.body.insertBefore(e,document.body.firstChild);
		}],
		['53.2', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping_full");
			document.body.insertBefore(e,document.body.firstChild);
        }],
        ['53.7', function(){
			var e = document.createElement("div");
			e.setAttribute("class", "amp-wrapping amp-wrapping_share-bg");
			document.body.insertBefore(e,document.body.firstChild);

			var f = document.createElement("a");
			f.setAttribute("class", "amp-wrapping amp-wrapping_share-twitter");
			f.setAttribute("href", "https://twitter.com/intent/tweet?text=Add%20some%20holiday%20cheer%20to%20your%20web%20page%20with%20www.cheerify.it%20by%20@amp_agency&url=http://www.cheerify.it&related=amp_agency");
			e.appendChild(f);

			var f = document.createElement("a");
			f.setAttribute("class", "amp-wrapping amp-wrapping_share-fb");
			f.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcheerify.it");
			e.appendChild(f);

			var f = document.createElement("a");
			f.setAttribute("class", "amp-wrapping amp-wrapping_share-email");
			f.setAttribute("href", "mailto:?subject=Cheerify the Web w/ Cheerify.it&body=Spread%20holiday%20cheer%20right%20from%20the%20web.%20http://cheerify.it/");
			e.appendChild(f);

			var e = document.createElement("a");
			e.setAttribute("class", "amp-wrapping amp-wrapping_end");
			e.setAttribute("href", "http://www.ampagency.com");
			document.body.insertBefore(e,document.body.firstChild);
        }]
	],

	// An array of DOM elements grouped into categories
	element_groups = {
		"image" : [],
		"posleft" : [],
		"middle" : [],
		"posright" : [],
		"postop" : [],
		"center" : [],
		"posbottom" : [],
		"large" : [],
		"medium" : [],
		"small" : [],
		"nav" : [],
		"p" : [],
		"header" : [],
		"input": [],
		"all" : [],
		"ornament" : [],
		"lights" : []
	};

	// Save all page elements that meet requirements to 'element_groups'
	for (var L = 0; L < all_element.length; L++) {
		var element = all_element[L];
		
		// Skip some elements
		if(element.tagName === 'A')
			continue;

		// Size
		if (check_size(element, 'small') && isElementEligible(element)) {
			element_groups.small.push(element);
		}
		if (check_size(element, 'medium') && isElementEligible(element)) {
			element_groups.medium.push(element);
		}
		if (check_size(element, 'large') && isElementEligible(element)) {
			element_groups.large.push(element);
		}
		// Vertical location
		if (check_vert_location(element, 'top') && isElementEligible(element)) {
			element_groups.postop.push(element);
		}
		if (check_vert_location(element, 'center') && isElementEligible(element)) {
			element_groups.center.push(element);
		}
		if (check_vert_location(element, 'bottom') && isElementEligible(element)) {
			element_groups.posbottom.push(element);
		}
		// Horizontal location
		if (check_hori_location(element, 'left') && isElementEligible(element)) {
			element_groups.posleft.push(element);
		}
		if (check_hori_location(element, 'middle') && isElementEligible(element)) {
			element_groups.middle.push(element);
		}
		if (check_hori_location(element, 'right') && isElementEligible(element)) {
			element_groups.posright.push(element);
		}
		// Images
		if (element.tagName === 'IMG' && isElementEligible(element)){
			element_groups.image.push(element);
		}
		// Navs (fills collection with parent ULs)
		if (isElementNav(element) && isElementOnScreen(element)){
			if(element.tagName === 'UL'){
				element_groups.nav.push(element);
			} else if(element.tagName === 'NAV'){
				nav_elements = element.getElementsByTagName("UL");
				nav_candidate = nav_elements[0];
				element_groups.nav.push(nav_candidate);
			}
		}
		// P
		if (element.tagName === 'P' && isElementEligible(element)){
			element_groups.p.push(element);
		}
		// Headers
		if ((element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3') && isElementEligible(element)){
			element_groups.header.push(element);
		}
		// Text Inputs
		if (element.tagName === 'INPUT' && isElementOnScreen(element)){
			if(element.type==="text"){
				element_groups.input.push(element);
			}
		}
		// All small/large elements as a fallback
		if ((check_size(element, 'small') || check_size(element, 'medium')) && isElementEligible(element)) {
			element_groups.all.push(element);
		}
	}

	// Fill empty collection with 'element_groups.all'
	for (var key in element_groups) {
		var group = element_groups[key];
		
		if(element_groups[key].length === 0){
			//console.log(key + " is empty " + group);
			element_groups[key] = element_groups.all;
		}
		//console.log(key + " " + group.length);
	}

	// Add our music player and stylesheet
	add_stylesheet();
	add_music();
	console.log('started');

	function create_snowman(snowman_name){
		// Add dancing snowman to scene
		var snowMan = document.createElement("div");
		snowMan.setAttribute("class", "amp-snowman amp-snowman-full " + snowman_name);
		document.body.insertBefore(snowMan, document.body.firstChild);
		
		var snowManBottom = document.createElement("div");
		snowManBottom.setAttribute("class", "amp-snowman amp-snowman-bottom");
		snowMan.appendChild(snowManBottom);
		
		var snowManMiddle = document.createElement("div");
		snowManMiddle.setAttribute("class", "amp-snowman amp-snowman-middle");
		snowMan.appendChild(snowManMiddle);
		
		var snowManHead = document.createElement("div");
		snowManHead.setAttribute("class", "amp-snowman amp-snowman-head");
		snowManMiddle.appendChild(snowManHead);
		
		var snowManHat = document.createElement("div");
		snowManHat.setAttribute("class", "amp-snowman amp-snowman-hat");
		snowManHead.appendChild(snowManHat);
		
		var snowMantRightArm = document.createElement("div");
		snowMantRightArm.setAttribute("class", "amp-snowman amp-snowman-rightarm");
		snowManMiddle.appendChild(snowMantRightArm);
		
		var snowManLeftArm = document.createElement("div");
		snowManLeftArm.setAttribute("class", "amp-snowman amp-snowman-leftarm");
		snowManMiddle.appendChild(snowManLeftArm);
			
		snowMan.className += ' snowman-move-in';
		snowManMiddle.className += ' amp-snowman-middle-move';
		snowManHead.className += ' amp-snowman-head-move';
		snowManLeftArm.className += ' amp-snowman-leftarm-move';
		snowMantRightArm.className += ' amp-snowman-rightarm-move';

		setTimeout(function(){
			snowManMiddle.className += ' amp-snowman-middle-move2';
			snowManHead.className += ' amp-snowman-head-move2';
		}, 2750);
		setTimeout(function(){
			snowMantRightArm.className += ' amp-snowman-rightarm-move2';
			snowManHat.className += ' amp-snowman-hat-move';
		}, 2900);
		setTimeout(function(){
			snowManMiddle.className += ' amp-snowman-middle-move3';
			snowManHead.className += ' amp-snowman-head-move3';
			snowMantRightArm.className += ' amp-snowman-rightarm-move3';				
		}, 4000);
		setTimeout(function(){
			snowManHat.className += ' amp-snowman-hat-move2';
		}, 4150);
		setTimeout(function(){
			snowManHat.className += ' amp-snowman-hat-move3';
		}, 5250);
		setTimeout(function(){
			snowManLeftArm.className += ' amp-snowman-leftarm-move2';
			snowManHat.className += ' amp-snowman-hat-move4';
		}, 6000);

		setTimeout(function(){
			snowManMiddle.className = 'amp-snowman amp-snowman-middle amp-snowman-middle-move';
			snowManHead.className = 'amp-snowman amp-snowman-head amp-snowman-head-move';
			snowManLeftArm.className = 'amp-snowman amp-snowman-leftarm amp-snowman-leftarm-move';
			snowMantRightArm.className = 'amp-snowman amp-snowman-rightarm amp-snowman-rightarm-move';
		}, 6200);

		setTimeout(function(){
			snowManMiddle.className = 'amp-snowman amp-snowman-middle amp-snowman-middle-move';
			snowManHead.className = 'amp-snowman amp-snowman-head amp-snowman-head-move';
			snowManLeftArm.className = 'amp-snowman amp-snowman-leftarm amp-snowman-leftarm-move';
			snowMantRightArm.className = 'amp-snowman amp-snowman-rightarm amp-snowman-rightarm-move';
		}, 16000);
	}
	function animate_snowman(snowman_name){
		// Add dancing snowman to scene
		var snowMan = document.getElementsByClassName(snowman_name)[0];
		//snowMan.setAttribute("class", "amp-snowman amp-snowman-full " + snowman_name);
		var snowManBottom = snowMan.getElementsByClassName("amp-snowman-bottom")[0];
		snowManBottom.setAttribute("class", "amp-snowman amp-snowman-bottom");
		var snowManMiddle = snowMan.getElementsByClassName("amp-snowman-middle")[0];
		snowManMiddle.setAttribute("class", "amp-snowman amp-snowman-middle");
		var snowManHead = snowMan.getElementsByClassName("amp-snowman-head")[0];
		snowManHead.setAttribute("class", "amp-snowman amp-snowman-head");
		var snowManHat = snowMan.getElementsByClassName("amp-snowman-hat")[0];
		snowManHat.setAttribute("class", "amp-snowman amp-snowman-hat");
		var snowMantRightArm = snowMan.getElementsByClassName("amp-snowman-rightarm")[0];
		snowMantRightArm.setAttribute("class", "amp-snowman amp-snowman-rightarm");
		var snowManLeftArm = snowMan.getElementsByClassName("amp-snowman-leftarm")[0];
		snowManLeftArm.setAttribute("class", "amp-snowman amp-snowman-leftarm");
			
		//snowMan.className += ' snowman-move-in';
		snowManMiddle.className += ' amp-snowman-middle-move';
		snowManHead.className += ' amp-snowman-head-move';
		snowManLeftArm.className += ' amp-snowman-leftarm-move';
		snowMantRightArm.className += ' amp-snowman-rightarm-move';

		setTimeout(function(){
			snowManMiddle.className += ' amp-snowman-middle-move2';
			snowManHead.className += ' amp-snowman-head-move2';
		}, 2750);
		setTimeout(function(){
			snowMantRightArm.className += ' amp-snowman-rightarm-move2';
			snowManHat.className += ' amp-snowman-hat-move';
		}, 2900);
		setTimeout(function(){
			snowManMiddle.className += ' amp-snowman-middle-move3';
			snowManHead.className += ' amp-snowman-head-move3';
			snowMantRightArm.className += ' amp-snowman-rightarm-move3';				
		}, 4000);
		setTimeout(function(){
			snowManHat.className += ' amp-snowman-hat-move2';
		}, 4150);
		setTimeout(function(){
			snowManHat.className += ' amp-snowman-hat-move3';
		}, 5250);
		setTimeout(function(){
			snowManLeftArm.className += ' amp-snowman-leftarm-move2';
			snowManHat.className += ' amp-snowman-hat-move4';
		}, 6000);

		setTimeout(function(){
			snowManMiddle.className = 'amp-snowman amp-snowman-middle amp-snowman-middle-move';
			snowManHead.className = 'amp-snowman amp-snowman-head amp-snowman-head-move';
			snowManLeftArm.className = 'amp-snowman amp-snowman-leftarm amp-snowman-leftarm-move';
			snowMantRightArm.className = 'amp-snowman amp-snowman-rightarm amp-snowman-rightarm-move';
		}, 6200);
	}
	function add_stylesheet() {
		var e = document.createElement("link");
		e.setAttribute("type", "text/css");
		e.setAttribute("rel", "stylesheet");
		e.setAttribute("href", style_file);
		e.setAttribute("class", class_name);
		document.body.appendChild(e);
	}
	function remove_element() {
		var e = document.getElementsByClassName(class_name);
		for (var t = 0; t < e.length; t++) {
			document.body.removeChild(e[t]);
		}
	}
	function get_container(){
		container = document.getElementsByTagName("div");
		minHeight = 0;
		container_el = null;
		containers = [];

		for (var L = 0; L < container.length; L++) {
			var element = container[L];
			if(element.parentElement !== null){
				if(element.parentElement.tagName === "BODY"){
					crect = element.getBoundingClientRect();

					if(crect.height >= minHeight && crect.width >= 200){
						minHeight = crect.height;
						container_el = element;
					}

					if(crect.height > 0 && crect.width > 0){
						containers.push(element);
					}
				}
			}
		}
		return container_el;
	}
	function get_size(e) {
		return {
			height: e.offsetHeight,
			width: e.offsetWidth
		};
	}
	function check_vert_location(element, loc){
		loc = loc || "center";
		var rect = element.getBoundingClientRect();
		winHeight = (window.innerHeight || document.documentElement.clientHeight);

		item_center = (rect.top + (rect.height/2));
		if(loc === "top"){
			return item_center < (winHeight/3);
		} else if(loc === "bottom"){
			return item_center > ((winHeight/3)*2);
		} else {
			return item_center < ((winHeight/3)*2) && rect.top > (winHeight/3);
		}
	}
	function check_hori_location(element, loc){
		loc = loc || "middle";
		var rect = element.getBoundingClientRect();
		winWidth = (window.innerWidth || document.documentElement.clientWidth);

		item_center = (rect.left + (rect.width/2));
		if(loc === "left"){
			return item_center < (winWidth/3);
		} else if(loc === "right"){
			return item_center > ((winWidth/3)*2);
		} else {
			return item_center < ((winWidth/3)*2) && item_center > (winWidth/3);
		}
	}
	function check_size(element, size) {
		size = size || "medium";
		var s = get_size(element);

		if(size === "small"){
			return s.height > 5 && s.height <= 30 && s.width > 5 && s.width <= 30;
		} else if(size === "large"){
			return s.height > 250 && s.height <= 1000 && s.width > 250 && s.width <= 1000;
		} else {
			return s.height > 30 && s.height <= 250 && s.width > 30 && s.width <= 250;
		}
	}
	function isElementOnScreen(el) {
	   var rect = el.getBoundingClientRect();

		return (
			//rect.top >= 0 &&
			//rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
		);
	}
	function isElementVisible(element){
		if ((element.nodeType !== 1) || (element === document.body)) {
			return true;
		}
		//return true;

		if (element.currentStyle && element.currentStyle["display"] !== "none" && element.currentStyle["visibility"] !== "hidden") {
			return isElementVisible(element.parentNode);
		} else if (window.getComputedStyle) {
			var cs = document.defaultView.getComputedStyle(element, null);
			if (cs.getPropertyValue("display") !== "none" && cs.getPropertyValue("visibility") !== "hidden") {
				return isElementVisible(element.parentNode);
			}
		}
		return false;
	}
	function isElementEligible(element){
		return( 
			isElementVisible(element) &&
			isElementOnScreen(element) &&
			(check_size(element, 'small') || check_size(element, 'medium') || check_size(element, 'large'))
		);
	}
	function isElementNav(element){
		return(
			(element.tagName ==='NAV' ||
			element.className.indexOf("menu") !== -1 ||
			element.className.indexOf("nav") !== -1) &&
			element.className.indexOf("sub") === -1
		);
	}
	function add_music() {
		// Add audio to DOM with logic for effects
		var e = document.createElement("audio");
		e.setAttribute("class", class_name);
		//e.src = audio_file;
		e.loop = false;
		document.body.appendChild(e);

		var ogg = document.createElement("source");
		ogg.setAttribute("type", "audio/ogg");
		ogg.src = audio_file_ogg;
		e.appendChild(ogg);

		var mp3 = document.createElement("source");
		mp3.setAttribute("type", "audio/mp3");
		mp3.src = audio_file_mp3;
		e.appendChild(mp3);

		var p = document.createElement("p");
		p.innerHTML = "If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.";
		e.appendChild(p);
		
		// On music start trigger Interval to iterate through effects
		e.addEventListener("play", function (){
			effect_interval = setInterval(function (){
				if(effects.length > 0){
					if(e.currentTime > parseFloat(effects[0][0])){
						effects[0][1]();
						effects.shift();
					}
				} else {
					clearInterval(effect_interval);
				}
			}, framerate);

		}, true);

		// Leave no trace when the music finishes
		e.addEventListener("ended", function (){
			// reset_classes();
			// remove_element();
			console.log('ended');
		}, true);

		var p = document.createElement("div");
		p.setAttribute("id", "amp-player");
		p.innerHTML = '<a href="#play" id="amp-control" class="amp-pause"></a>';
		p.innerHTML += '<a href="#mute" id="amp-mute"></a>';
		p.innerHTML += '<a href="http://cheerify.it/" id="amp-button"></a>';
		document.body.appendChild(p);

		document.getElementById('amp-control').onclick = function(){
			if(e.paused){
				e.play();
				document.getElementById('amp-control').className = "amp-pause";
			} else {
				e.pause();
				document.getElementById('amp-control').className = "amp-play";
			}
			return false;
		};

		document.getElementById('amp-mute').onclick = function(){
			if(e.volume === 1){
				e.volume = 0;
				document.getElementById('amp-mute').style.opacity = ".2";
			} else {
				e.volume = 1;
				document.getElementById('amp-mute').style.opacity = "1";
			}
			return false;
		};

		e.play();
	}
	function add_effect(e, effect_class, duration){
		if(e === undefined){
			return false;
		}

		if(e.className.indexOf(active_class) !== -1 && e.className.indexOf('amp-border') === -1){
			//console.log('already animating');
			return false;
		}
		
		//console.log('effect_class', effect_class);

		effect_class = effect_class || new_classes[Math.floor(Math.random() * new_classes.length)];
		duration = duration || framerate;
		e.className += " " + effect_class + " " + active_class;

		setTimeout(function (){
			var t = new RegExp("\\b" + effect_class + "\\b");
			e.className = e.className.replace(t, "");
			var u = new RegExp("\\b" + active_class + "\\b");
			e.className = e.className.replace(u, "");
		}, duration);
	}
	function add_effect_bulk(eg, effect_class, duration){
		for (var N = 0; N < eg.length; N++) {
			add_effect(eg[N], effect_class, duration);
		}
	}
	function add_effect_random(eg, effect_class, duration){
		rand = Math.floor(Math.random() * eg.length);
		add_effect(eg[rand], effect_class, duration);
	}
	function add_effect_sequence(eg, effect_class, duration, action){
		action = action || 'next';

		if(action === "next"){
			index = sequencer.start++;
		} else if(action === "previous") {
			index = sequencer.start--;
		} else if(action === "reset") {
			sequencer.start = 0;
			index = sequencer.start;
		} else {
			index = sequencer.start++;
		}

		if(index > eg.length-1){
			sequencer.start = 0;
			index = sequencer.start;
		} else if(index < 0){
			sequencer.start = eg.length-1;
			index = sequencer.start;
		}

		el = eg[index];
		add_effect(el, effect_class, duration);
	}
	function change_bg_class(effect_class){
		// Remove old
		if(bgclass !== ''){
			var t = new RegExp("\\b" + bgclass + "\\b");
			document.body.className = document.body.className.replace(t, "");
		}
		// Add new
		bgclass = effect_class;
		document.body.className += ' ' + effect_class;
	}
	function animate_ornament(effect_class){
		ornaments_pos = ['11%','22%','33%','44%','55%','66%','77%','88%'];

		var e = document.createElement("div");
		e.setAttribute("class", effect_class);
		e.style.left = ornaments_pos[ornaments_index];
		document.body.insertBefore(e,document.body.firstChild);
		element_groups.ornament.push(e);

		ornaments_index++;
		if(ornaments_index >= ornaments_pos.length){
			ornaments_index = 0;
		}
	}
	function hide_ornaments(){
		// Animate ornaments up
		for (var v = element_groups.ornament.length-1; v >=0; v--) {
			ornament = element_groups.ornament[v];
			var t = new RegExp("\\b" + 'amp-ornament' + "\\b");
			document.body.className = document.body.className.replace(t, "");
			ornament.className += ' amp-ornament-up';
		}
		element_groups.ornament = [];
	}
	function reset_classes() {
		var e = document.getElementsByClassName(classable);
		var t = new RegExp("\\b" + classable + "\\b");
		for (var n = 0; n < e.length;) {
			e[n].className = e[n].className.replace(t, "");
		}
	}
})();