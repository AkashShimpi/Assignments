
// let y=prompt("Give amount separated by commas','").split(',');

// let y="265000,150000,95000,789562".split(',');
  
  function totalInterest(xyz=0){


     let y=(Number)(xyz);
     if(y>200000){
        y=y*1.1
        y=y-y*0.002
     }
     else if(y>100000){
        y=y*1.05
        y=y-y*0.0005
     }
     else {
          y=y*1.03
     }
     return y;
 }
function calculateInterest(){
let balance1=document.getElementById('balanced-1').value;
let balance2=document.getElementById('balanced-2').value;
let balance3=document.getElementById('balanced-3').value;
let balance4=document.getElementById('balanced-4').value;
let balance5=document.getElementById('balanced-5').value;

  let balancedAfterInterest1= totalInterest(balance1);
  let balancedAfterInterest2= totalInterest(balance2);
  let balancedAfterInterest3= totalInterest(balance3);
  let balancedAfterInterest4= totalInterest(balance4);
  let balancedAfterInterest5= totalInterest(balance5);
   
  if(balancedAfterInterest1 != 0){
     console.log(balancedAfterInterest1)
     document.getElementById('After1').innerText=balancedAfterInterest1;}
  if(balancedAfterInterest2 != 0)document.getElementById('After2').innerText=balancedAfterInterest2;
  if(balancedAfterInterest3 != 0)document.getElementById('After3').innerText=balancedAfterInterest3;
  if(balancedAfterInterest4 != 0)document.getElementById('After4').innerText=balancedAfterInterest4;
  if(balancedAfterInterest5 != 0)document.getElementById('After5').innerText=balancedAfterInterest5;
}