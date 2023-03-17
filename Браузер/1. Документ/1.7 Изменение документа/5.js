let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function createTree(container, data) {
  container.innerHTML = createTreeText(data);
}

function createTreeText(data) { 
  let li = '';
  let ul;
  for (let key in data) {
    li += '<li>' + key + createTreeText(data[key]) + '</li>';
  }
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
}
createTree(tree, data);