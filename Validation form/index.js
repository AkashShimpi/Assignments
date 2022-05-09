
function validate(){
  let firstName=document.getElementById("firstName").value;
 let lastName=document.getElementById("lastName").value;
let email=document.getElementById("email").value;
let phoneNumber=document.getElementById("phoneNumber").value;
let state=document.getElementById("state").value;
let zipCode=document.getElementById("zipCode").value;
let tNCCheckbox=document.getElementById("tNCCheckbox").checked;
 if(firstName===''){
     document.getElementById("firstNameInValid").style.display='block';
     document.getElementById("firstNameValid").style.display='none';
 }
else {
    
    document.getElementById("firstNameValid").style.display='block';
    document.getElementById("firstNameInValid").style.display='none';
}
if(lastName===''){
    document.getElementById("lastNameInValid").style.display='block';
    document.getElementById("lastNameValid").style.display='none';
}
else {
   
   document.getElementById("lastNameValid").style.display='block';
   document.getElementById("lastNameInValid").style.display='none';
}
  if(email==='' || !email.includes('@gmail.com') || email.indexOf('@')==0){
      document.getElementById('emailInValid').style.display='block';
      document.getElementById('emailValid').style.display='none';
  }
  else{
    document.getElementById('emailValid').style.display='block';
    document.getElementById('emailInValid').style.display='none';
  }
  if(phoneNumber=='' || phoneNumber.length != 10){
      document.getElementById('phoneInValid').style.display='block';
      document.getElementById('phoneValid').style.display='none';

  }
  else{
    document.getElementById('phoneValid').style.display='block';
    document.getElementById('phoneInValid').style.display='none';
  }
  if(zipCode ==='' || zipCode.length !=6){
      
    document.getElementById('zipCodeInValid').style.display='block';
    document.getElementById('zipCodeValid').style.display='none';
  }
  else{
      
    document.getElementById('zipCodeValid').style.display='block';
    document.getElementById('zipCodeInValid').style.display='none';
  }
  if(!tNCCheckbox){
    document.getElementById('tNInvalid').style.display='block'
  }
  else{
    document.getElementById('tNInvalid').style.display='none'
  }
}
function remove(hie){
  if(hie==="firstNameInValid"){
  document.getElementById('firstNameInValid').style.display='none'}
  else  if(hie==="lastNameInValid"){
    document.getElementById('lastNameInValid').style.display='none'}
   else  if(hie==="emailInValid"){
      document.getElementById('emailInValid').style.display='none'}
     else if(hie==="phoneInValid"){
        document.getElementById('phoneInValid').style.display='none'}
       else if(hie==="stateInValid"){
          document.getElementById('stateInValid').style.display='none'}
          else if(hie==="tNInvalid"){
            document.getElementById('tNInvalid').style.display='none'}
            else if(hie==="zipCodeInValid"){
              document.getElementById('zipCodeInValid').style.display='none'}

}