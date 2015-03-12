(function() {
  var pathList = document.querySelectorAll('svg path');

  var delay = 1000;

  for (var i = 0; i < pathList.length; i++) {
    delay += 700;
    doSetTimeout(i, delay);
  };


  function doSetTimeout(i, delay) {
    setTimeout(function() {
      var path = pathList[i];
      var length = path.getTotalLength();

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition = 'none';

      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;

      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();

      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 1s linear';

      path.style.stroke = '#3498db';

      // Go!
      path.style.strokeDashoffset = '0';
    }, delay);
  }

})();