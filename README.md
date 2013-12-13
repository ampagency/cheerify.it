Cheerify.it
====================

Transform your browsing experience into a winter wonderland with the click of a button. Your favorite webpages come to life with the sounds and sights of the season. Put any URL into the input box below and watch as holiday spirit unfolds on your screen. Make sure to have your volume up. If it leaves you completely smitten, drag the button to your toolbar and bring cheer to anywhere on the web.

Development
---------------------

Effects are added as CSS classes to elements. Classes can be added to elements using javascript.

The `effects` array manages the triggering of effects as they relate to audio's `e.currentTime` attribute. Each item in the array is its own array with two items; the timestamp to trigger the effect and a function to call when the effect is triggered.

Below is a sample `effects` array:

```javascript
var effects = [
	['12.2', function(){
	    rand1 = Math.floor(Math.random() * selected_elements.length);
	    rand2 = Math.floor(Math.random() * selected_elements.length);
	    add_effect(selected_elements[rand1], 'amp-red-color', 200);
	    add_effect(selected_elements[rand2], 'amp-red-color', 200);
	}],
	['12.5', function(){
	    rand1 = Math.floor(Math.random() * selected_elements.length);
	    rand2 = Math.floor(Math.random() * selected_elements.length);
	    add_effect(selected_elements[rand1], 'amp-red-color', 200);
	    add_effect(selected_elements[rand2], 'amp-red-color', 200);
	}]
]
```
Effects need to be added to the array in the order they will trigger


The `add_effect()` function takes three parameters, the second two being optional:
* `element`: The element to add the class to
* `class`: (optional: default is random) The class to add to the element
* `duration`: (optional: default is 100) The duration in milliseconds to play the effect for

[Demo](http://www.cheerify.it/)