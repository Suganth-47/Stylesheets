window.addEventListener("load",function(){
    document.getElementById("popup").style.display="block";
});
function close_ad(){
    document.getElementById("popup").style.display="none";
}
const values = document.querySelectorAll('[class=class1]');
values.forEach(function(v) {
  console.log(v.innerHTML);
}); 
//document.getElementById("close").addEventListener("click",close);
