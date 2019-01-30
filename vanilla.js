
// Create a "close" button and append it to each list item in load page
var myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);

}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
//Add new task
function newElement() {
    var li = document.createElement("li");
    var value = document.getElementById("myInput").value;
    var text = document.createTextNode(value);
    li.appendChild(text);
    if(value === ""){
      alert("Write a Task!");
    }else{
      document.getElementById("mainUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
//Add remove btn for each task
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
//Remove task by remomve btn Click
    var close = document.getElementsByClassName("close");
      for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        this.parentElement.style.display = "none";
      };
    }
}
//filter part
function viewAll(){
  var all = document.getElementById("all");
  all.className = "selected";
  document.getElementById("active").classList.remove("selected");
  document.getElementById("completed").classList.remove("selected");

}
function active(){
  var  active = document.getElementById("active");
  active.className = "selected";
  document.getElementById("all").classList.remove("selected");
  document.getElementById("completed").classList.remove("selected");
  clearCompleted();
}
function completed() {
  var  completed = document.getElementById("completed");
  var notChecked = document.querySelectorAll('li:not(.checked)');
  completed.className = "selected";
  document.getElementById("all").classList.remove("selected");
  document.getElementById("active").classList.remove("selected");
  for (i = 0; i < notChecked.length; i++) {
    notChecked[i].style.display = 'none';
  }
}
//clear completed items
function clearCompleted() {
  var check = document.getElementsByClassName("checked");
  for (i = 0; i < check.length; i++) {
    check[i].style.display = 'none';
  }
}
