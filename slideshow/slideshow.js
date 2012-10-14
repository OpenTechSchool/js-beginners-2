var photos = [
  "http://farm7.staticflickr.com/6077/6029508514_46771d3982_b.jpg",
  "http://farm7.staticflickr.com/6085/6028956089_2a0e3a87dc_b.jpg",
  "http://farm8.staticflickr.com/7147/6695782087_4e1f53af1b_b.jpg"
];
var filmroll = document.getElementById('the-film-roll');
var filmrollHTML = "";
var currentScroll = 0;
var imageWidth = 500;
var isScrolling;

for (var i = 0; i < photos.length; i += 1) {
  filmrollHTML += "<img src=" + photos[i] + ">";
}

filmroll.innerHTML = filmrollHTML;
filmroll.style.width = imageWidth * photos.length;

function scroll (start, end) {
  var current = start;

  function move() {
    if (end > start) {
      current = Math.min(current + 10, end);
    } else {
      current = Math.max(current - 10, end);
    }
    
    filmroll.style.left = current + 'px';
  
    if (current == end) {
      isScrolling = false;
      clearInterval(loop);
    }
  }
  
  isScrolling = true;
  var loop = setInterval(move, 25);
}


function handleEvent (e) {
  backAndForth(e.keyCode);
}

function backAndForth (keyCode) {
  if (!isScrolling) {
    // left arrow key
    if (keyCode == 37 && currentScroll > (-imageWidth * (photos.length - 1))) {
      scroll(currentScroll, currentScroll - imageWidth);
      // decrease the value of
      currentScroll -= imageWidth;
    }
    // right arrow key
    if (keyCode == 39 && currentScroll < 0) {
      scroll(currentScroll, currentScroll + imageWidth);
      currentScroll += imageWidth;
    }
  }
}

document.addEventListener('keydown', handleEvent);
