function openPage(pageName, elmnt, color, context) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = ""
    tablinks[i].style.borderBottom = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  if (context=='inside'){
  elmnt.style.backgroundColor = color;
  elmnt.style.borderBottom = "5px solid lightblue";}
  else {
  document.getElementById(elmnt).style.backgroundColor = color;
  document.getElementById(elmnt).style.borderBottom = "5px solid lightblue";
  }
}
function EnableTextbox(ObjChkId,ObjTxtId,reversed)
{
    if (reversed=='false'){
        if(document.getElementById(ObjChkId).checked){
            document.getElementById(ObjTxtId).disabled = true;
            }
        else{
            document.getElementById(ObjTxtId).disabled = false;
            }
    }
    else if(reversed=='true'){
     if(document.getElementById(ObjChkId).checked){
            document.getElementById(ObjTxtId).disabled = false;
            }
      else{
            document.getElementById(ObjTxtId).disabled = true;
            }
    }
}
function show(var_val){
    document.getElementById("varid").innerHTML=var_val;
    document.getElementById("vartype").style.display="block";
    document.getElementById("addvar").style.display="block";
}
function show_var(){
    document.getElementById("varskul").style.display="block";
    document.getElementById("varsku").style.display="block";
    document.getElementById("varproductidl").style.display="block";
    document.getElementById("varproductid").style.display="block";
    document.getElementById("varidtype").style.display="block";
    document.getElementById("varconditionl").style.display="block";
    document.getElementById("varcondition").style.display="block";
    document.getElementById("varpricel").style.display="block";
    document.getElementById("varprice").style.display="block";
    document.getElementById("varquantityl").style.display="block";
    document.getElementById("varquantity").style.display="block";
    document.getElementById("vars").style.display="block";
    document.getElementById("iscolor").style.display="block";
    document.getElementById("iscolorl").style.display="block";
    document.getElementById("issize").style.display="block";
    document.getElementById("issizel").style.display="block";
    document.getElementById("isvolume").style.display="block";
    document.getElementById("isvolumel").style.display="block";
    document.getElementById("addvar").style.display="block";

}
function Enableb2b(ObjChkId)
{

        if(document.getElementById(ObjChkId).checked){
            document.getElementById("b2boffamol").style.display="block";
            document.getElementById("b2boffamo").style.display="block";
            document.getElementById("b2boffpril").style.display="block";
            document.getElementById("b2boffpri").style.display="block";
            document.getElementById("b2boffamol1").style.display="block";
            document.getElementById("b2boffamo1").style.display="block";
            document.getElementById("b2boffpril1").style.display="block";
            document.getElementById("b2boffpri1").style.display="block";
            document.getElementById("b2boffamol2").style.display="block";
            document.getElementById("b2boffamo2").style.display="block";
            document.getElementById("b2boffpril2").style.display="block";
            document.getElementById("b2boffpri2").style.display="block";
            document.getElementById("b2binfo").style.display="block";

            }
        else{
            document.getElementById("b2boffamol").style.display="none";
            document.getElementById("b2boffamo").style.display="none";
            document.getElementById("b2boffpril").style.display="none";
            document.getElementById("b2boffpri").style.display="none";
            document.getElementById("b2boffamol1").style.display="none";
            document.getElementById("b2boffamo1").style.display="none";
            document.getElementById("b2boffpril1").style.display="none";
            document.getElementById("b2boffpri1").style.display="none";
            document.getElementById("b2boffamol2").style.display="none";
            document.getElementById("b2boffamo2").style.display="none";
            document.getElementById("b2boffpril2").style.display="none";
            document.getElementById("b2boffpri2").style.display="none";
            document.getElementById("b2binfo").style.display="none";
            document.getElementById("iscolor").style.display="none";
            document.getElementById("iscolorl").style.display="none";
            document.getElementById("issize").style.display="none";
            document.getElementById("issizel").style.display="none";
            document.getElementById("isvolume").style.display="none";
            document.getElementById("isvolumel").style.display="none";
            }
    }
function Enablevar(checkid,labelid){
    if(document.getElementById(checkid).checked){
           document.getElementById(labelid).style.display="block";
            }
        else{
            document.getElementById(labelid).style.display="none";
            }
}

//function addvariation(){
//    const ipts=[
//    document.getElementById('varsku'),
//    document.getElementById('varproductid'),
//    document.getElementById('varidtype'),
//    document.getElementById('varcondition'),
//    document.getElementById('varprice'),
//    document.getElementById('varquantity'),
//    ]
//    const color=document.getElementById('iscolorl'),
//    constdocument.getElementById('issizel'),
//    document.getElementById('isvolumel')
//    const check1 = document.getElementById('iscolor');
//    const check2 = document.getElementById('issize');
//    const check3 = document.getElementById('isvolume');
//    for (item of ipts){
//        const opt1 = document.createElement("input");
//        opt1.id = item.id + "o";
//        opt1.type="text";
//        opt1.value=item.value;
//        if (check1.checked){
//
//        }
//    }
//
//
//
//
//
//    if (check1.checked){
//
//
//
//    }
//
//}

// Get the element with id="defaultOpen" and click on it
document.getElementById("default").click();