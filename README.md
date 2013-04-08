jQuery.focusPos
================
Focuses the editable element on given position. It's also possible to make a selection
by providing two positions in most browsers.


```javascript
var textarea = $('#my-textarea');
textarea.val('here be text');

textarea.focusPos();      // focus after "text"
textarea.focusPos(7);     // focus after "be"
textarea.focusPos(0, 4);  // select "here"
```