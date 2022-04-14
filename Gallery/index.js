console.log('It is working fine');
// function akash(){
//    document.getElementById("panel-1").classList.add("expansion");
// }

function resetEverything(){
    document.getElementById("panel-1").classList.remove("expansion");
    document.getElementById("panel-2").classList.remove("expansion");
    document.getElementById("panel-3").classList.remove("expansion");
    document.getElementById("panel-4").classList.remove("expansion");
    document.getElementById("panel-5").classList.remove("expansion");
    document.getElementById("panel-6").classList.remove("expansion");
    document.getElementById("panel-7").classList.remove("expansion");

}

function expand(y){
     console.log(y);
     resetEverything();
    document.getElementById(y).classList.add("expansion");
}