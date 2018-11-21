
alert("test");
initialize();

let initialize = ()=>{
  alert("test");
  let test = this;
  debugger;
};

let  insertAtCursor = (input, textToInsert)=> {
  // get current text of the input
  const value = input.value;

  // save selection start and end position
  const start = input.selectionStart;
  const end = input.selectionEnd;

  // update the value with our text inserted
  input.value = value.slice(0, start) + textToInsert + value.slice(end);

  // update cursor to be at the end of insertion
  input.selectionStart = input.selectionEnd = start + textToInsert.length;
};
