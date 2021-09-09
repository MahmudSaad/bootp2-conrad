var grid = new Muuri('.grid', {
    dragEnabled: true,
    layout: {
      fillGaps: true
    }
  });
  
  // When all items have loaded refresh their
  // dimensions and layout the grid.
  window.addEventListener('load', function () {
    grid.refreshItems().layout();
    // For a little finishing touch, let's fade in
    // the images after all them have loaded and
    // they are corrertly positioned.
    document.body.classList.add('images-loaded');
  });



    // the tooltip javascript code that shall be writen to make it work.
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })