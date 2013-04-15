/*
  Focuses the editable element on given position. It's also possible to make
  a selection by providing two positions in most browsers.

  Pavel Pravosud <pavel@pravosud.com>
  Licensed under MIT license in 2013
  https://github.com/rwz/jquery.focusPos
*/


 (function($){

  'use strict';

  function getPosition(object, args){
    var pos1, pos2;

    if (!args.length) {
      pos1 = pos2 = object.val().length;
    } else if (1 == args.length) {
      pos1 = pos2 = args[0];
    } else {
      pos1 = args[0]; pos2 = args[1];
    }

    return [pos1, pos2];
  }

  var textarea = $('<textarea>').get(0), method;

  if ('setSelectionRange' in textarea)
    method = function(){
      if (!this.length) return this;
      var element = this.get(0);
      element.focus()
      element.setSelectionRange.apply(element, getPosition(this, arguments));
      return this;
    }
  else if ('createTextRange' in textarea)
    method = function(){
      var element = this.get(0),
        range = element.createTextRange(),
        pos = getPosition(this, arguments);

      element.focus()
      range.collapse(true);
      range.moveEnd('character', pos[0]);
      range.moveStart('character', pos[1]);
      range.select();
      return this;
    }
  else
    method = function(){ return this.focus(); }

  $.fn.focusPos = method;

}(jQuery));