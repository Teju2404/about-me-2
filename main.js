function calcArea() {

  const i = document.querySelector('#bas').value
  const j = document.querySelector('#hei').value
  
  const ans = parseInt(i)*parseInt(j) 

  document.querySelector('#display-area-good').innerHTML = "The area of rectangle is: "+ans

  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("lresult").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("lresult").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
  
function calcAreatest(i,j){

  return i*j;
}
  function ajax() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax_test.txt", true);
    xhttp.send();
  }




