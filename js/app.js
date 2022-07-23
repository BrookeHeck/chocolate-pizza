let borders = document.querySelectorAll('.border');

for(let border of borders) {
  for(let i = 0; i < 900; i++) {
    let borderImg = document.createElement('img');
    borderImg.src = 'img/hr-img.png';
    borders.alt = 'border';
    border.appendChild(borderImg);
  }
}
