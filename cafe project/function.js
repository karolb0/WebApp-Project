function addtocart(y){

document.getElementById("output").innerHTML+="<br>"+y;
}


function myFunction() {
  var x = document.getElementById('cart');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }

}
