const clickDiv = document.getElementById('clickDiv');
  let clicked = false;
  clickDiv.onclick = () => {
    clicked = !clicked;
    clickDiv.style.backgroundImage = clicked
      ? "url('https://via.placeholder.com/300x200?text=Clicked')"
      : "url('https://via.placeholder.com/300x200?text=Click')";
  };

  const slider = document.getElementById('slider');
  const imgs = [
    'https://via.placeholder.com/300x200?text=Slide+1',
    'https://via.placeholder.com/300x200?text=Slide+2',
    'https://via.placeholder.com/300x200?text=Slide+3'
  ];
  let i = 0;
  setInterval(() => slider.src = imgs[(++i) % imgs.length], 3200);