setTimeout(function() {
  $('#red, #blue').transition({
    x: 0,
    y: 0
  }, 500, "snap", function() {
      $('#sysI').fadeIn();
  });
}, 1000);