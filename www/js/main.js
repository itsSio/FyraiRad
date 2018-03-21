const app = new App();

function scale(){
  let orgW = 650, orgH = 650;
  let w = $(window).width();
  let h = $(window).height();
  // Adjust h for headers, margins etc
  h -= $('header').outerHeight() + 20 * 2;
  w -= 20 * 2;
  // This scaling would fit to width
  let wScale = w / orgW;
  // This scaling would fit to height
  let hScale = h / orgH;
  // This scaling would fit both width and height
  let scaling = Math.min(wScale, hScale);
  // Apply scaling
  $('.board').css('transform', `scale(${scaling})`);
  $('.board').show();
  
}

// Run on page load
scale();
// Run every time the size changes
$(window).resize(scale);

// Input from type='text' accepts max 12 symbols
$('input[type="text"]').attr({ maxLength : 12 });
