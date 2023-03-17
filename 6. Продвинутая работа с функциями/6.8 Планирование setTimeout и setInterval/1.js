function printNumbers(from, to) {
  const timerId = setInterval(() => {
    from <= to ? alert(from++) : clearInterval(timerId);
  }, 1000);
}

function printNumbers(from, to) {
  let timerId = setTimeout(function tick() {
    from <= to ? console.log(from++) : clearInterval(timerId);
    timerId = setTimeout(tick, 1000);
  }, 1000);
}