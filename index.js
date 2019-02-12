import $ from 'jquery';
import './sass/vars.scss';


var globalObj = {};

$(document).ready(function() {
  // do the intitlization stuffs needed

  //caching the ids and classes
  cahceVars();
  // listen events
  listenEvents();

});

function cahceVars() {
  globalObj.themeSelector = $('#js-theme-selector');
}

function listenEvents() {
  globalObj.themeSelector.on('change', function() {
    let currThemeSelected = globalObj.themeSelector.val();
    $("body").removeClass();
    $("body").addClass(currThemeSelected);
    console.log("selection box chhanged to", currThemeSelected);
  })
  //console.log('listening listenEvents', globalObj.themeSelector);
}