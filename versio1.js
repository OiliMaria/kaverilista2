var kaveri1 = document.getElementById('list');
var kaveri1 = window.prompt("Anna kaverin nimi:");
  if (kaveri1 != null) {
    listAdd(kaveri1);
  }

var kaveri2 = window.prompt("Anna kaverin nimi:");
  if (kaveri2 != null) {
    listAdd(kaveri2);
  }  

var kaveri3 = window.prompt("Anna kaverin nimi:");
  if (kaveri3 != null) {
    listAdd(kaveri3);
  }

var kaveri4 = window.prompt("Anna kaverin nimi:");
  if (kaveri4 != null) {
    listAdd(kaveri4);
  }

var kaveri5 = window.prompt("Anna kaverin nimi:");
  if (kaveri5 != null) {
    listAdd(kaveri5);
  }

var kaveri6 = window.prompt("Anna kaverin nimi:");
  if (kaveri6 != null) {
    listAdd(kaveri6);
  }  

var kaveri7 = window.prompt("Anna kaverin nimi:");
  if (kaveri7 != null) {
    listAdd(kaveri7);
  }

var kaveri8 = window.prompt("Anna kaverin nimi:");
  if(kaveri8 != null) {
    listAdd(kaveri8);
  }

var kaveri9 = window.prompt("Anna kaverin nimi:");
  if (kaveri9 != null) {
    listAdd(kaveri9);
  }

var kaveri10 = window.prompt("Anna kaverin nimi:");
  if (kaveri10 != null) {
    listAdd(kaveri10);
  }



function listAdd(textValue) {
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(textValue));
  list.appendChild(entry);
}
