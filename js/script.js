function init(){
  function myEventFunction(){
    alert('Welcome!');
  }
  var m1 = document.getElementById("name");

  m1.addEventListener('click', myEventFunction);

}
window.addEventListener('load', init);