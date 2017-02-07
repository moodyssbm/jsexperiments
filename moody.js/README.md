# moody.js
Moody here! I created moody.js to be a set of tools I could link to from any computer I work on. It includes a few functions that shorten some of my most used JS features.

### gbi(id);
gbi allows you to **g**et an element **b**y its **i**d. It has one argument--id--which sould be self-explanatory.

### ih(obj, dat, overwrite);
ih allows you to change the **i**nner **h**tml of an element you're using in your JS code. 
* obj is for the element
* dat is the data you're adding
* overwrite is a boolean that determines if you clear whats in your element before adding the new HTML or not.

### newEl(tag, id);
newEl returns a string when it's called. The tag and id arguments determine what the tag and id of your new element are.
