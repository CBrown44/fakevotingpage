window.addEventListener('load', (e) =>{
    alert("You're Bad LOL!");
});
function myFunction() {
    alert("ARE YOU SURE");
    alert ('ARE YOU REALLY SURE');
    alert ('WHY DO YOU KEEP CHOOSING HIM');
    alert('FINE VOTE FOR HIM I GUESS');
}
function bigHead(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}
function smollHead(x) {
    x.style.height = "30px";
    x.style.width = "30px";
}
const noContext = document.getElementById('noContextMenu');
noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});
var i = 0;
var txt = "Why Did You Vote McGovern Are You Dumb"; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
function disObey(){
    document.getElementById("papa").style.display = 'none';
    document.getElementById("villain").style.display = 'none';
    document.getElementById("fadeIn").style.display = 'none';
    bb.style.display = 'none';
    gg.style.display = 'none';
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(disObey, speed);
    }
};