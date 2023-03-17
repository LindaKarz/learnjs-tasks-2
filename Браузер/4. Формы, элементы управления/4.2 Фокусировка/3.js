mouse.tabIndex = 0;

mouse.onfocus = () => {
  mouse.style.position = 'fixed';
  document.addEventListener('keydown', moveMouse)
}

mouse.onblur = () => {
  document.removeEventListener('keydown', moveMouse);
}

function moveMouse(e){
  let mouseCoords = mouse.getBoundingClientRect();
  if(e.code == 'ArrowRight'){
    mouse.style.left = mouseCoords.left + mouse.offsetWidth + 'px';
  }else if(e.code == 'ArrowLeft'){
    mouse.style.left = mouseCoords.left - mouse.offsetWidth + 'px';
  }else if(e.code == 'ArrowUp'){
    mouse.style.top = mouseCoords.top - mouse.offsetHeight + 'px';
  }else if(e.code == 'ArrowDown'){
    mouse.style.top = mouseCoords.top + mouse.offsetHeight + 'px';
  }
}