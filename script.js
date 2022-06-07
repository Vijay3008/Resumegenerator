function addNewPSField() {


    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("psfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let psOb = document.getElementById("ps");
    let psADDButtonOb = document.getElementById("psADDButton");

    psOb.insertBefore(newNode, psADDButtonOb);



}
function addNewWHField() {


    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("whfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let whOb = document.getElementById("wh");
    let whADDButtonOb = document.getElementById("whADDButton");

    whOb.insertBefore(newNode, whADDButtonOb);



}
function addNewEDUField() {


    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("edufield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let eduOb = document.getElementById("edu");
    let eduADDButtonOb = document.getElementById("eduADDButton");

    eduOb.insertBefore(newNode, eduADDButtonOb);



}
//Generating CV//
function generateCV()
{
    //console.log("generating CV");
    let namefield=document.getElementById("namefield").value;

   let nameT = document.getElementById("nameT");

   nameT.innerHTML = namefield;

   let contactfield=document.getElementById("contactfield").value;

   let contactT=document.getElementById("contactT");

   contactT.innerHTML= contactfield;


   let addressfield=document.getElementById("addressfield").value;

   let addressT=document.getElementById("addressT");

   addressT.innerHTML= addressfield;

   let linkedinfield=document.getElementById("linkedinfield").value;

   let linkedinT=document.getElementById("linkedinT");

   linkedinT.innerHTML= linkedinfield;

   let emailfield=document.getElementById("emailfield").value;

   let emailT=document.getElementById("emailT");

   emailT.innerHTML= emailfield;


   let psumfield=document.getElementById("psumfield").value;

   let psumT2=document.getElementById("psumT2");

   psumT2.innerHTML= psumfield;

   document.getElementById("psT").innerHTML = str;

   document.getElementById("cv-form").style.diplay="none";
   document.getElementById("cv-template").style.display="block";
}


function printCV() {

    window.print();

}