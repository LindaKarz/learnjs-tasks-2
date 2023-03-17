function printList(list) {
  alert(list.value);
  if (list.next) {
    printList(list.next); 
  }
}

function printList(list) {
  let result = list;
  while (result) {
    alert(result.value);
    result = result.next;
  }
}