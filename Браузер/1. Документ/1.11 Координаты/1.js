let cor = elem.getBoundingClientRect();

let topLeft = [cor.left, cor.top];
let bottomRight = [cor.right, cor.bottom];
let topLeftInner = [cor.left + field.clientLeft, cor.top + field.clientTop];
let bottomRightInner = [
  cor.left + elem.clientLeft + elem.clientWidth,
  cor.top + elem.clientTop + elem.clientHeight
];