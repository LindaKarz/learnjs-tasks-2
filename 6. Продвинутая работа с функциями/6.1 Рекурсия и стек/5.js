function printReversedList(list) {
  if (list.next) {
    printReversedList(list.next); 
  }
  alert(list.value);
}


function printReversedList(list) {
  let arr = [];
  let result = list;
  while (result) {
    arr.push(result.value);
    result = result.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

