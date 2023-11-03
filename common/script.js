
// to add header and footer dynamically to every page
$(function () {
    $("#header").load("../common/header.html");
    $("#footer").load("../common/footer.html");
});

// to enable dark mode light mode with a button

function dark() {
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
}
function light() {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
}



// for login page validation


function notify(){
var useremail = document.getElementById('exampleInputEmail1').value;
var userpassword = document.getElementById('exampleInputPassword1').value;

if ((useremail == "") || (userpassword == "")) {
    // display whoopsy, no credentials
    document.getElementById('modaltitle3').style.display = "block";
    document.getElementById('modaltext3').style.display = "block";
    document.getElementById('whoopsyimage').style.display = "block"; 

    //do not display congratulations    
    document.getElementById('modaltitle2').style.display = "none";
    document.getElementById('modaltext2').style.display = "none";
    document.getElementById('congoimage').style.display = "none"; 

    // do not display warning
    document.getElementById('modaltitle1').style.display = "none";
    document.getElementById('modaltext1').style.display = "none";
    document.getElementById('warningimage').style.display = "none"; 
}
else if ((document.getElementById('exampleInputEmail1').value === "admin@admin.com") && (document.getElementById('exampleInputPassword1').value=== "123456")) {
    // display congratulations    
    document.getElementById('modaltitle2').style.display = "block";
    document.getElementById('modaltext2').style.display = "block";
    document.getElementById('congoimage').style.display = "block"; 

// do not display whoopsy credentials
    document.getElementById('modaltitle3').style.display = "none";
    document.getElementById('modaltext3').style.display = "none";
    document.getElementById('whoopsyimage').style.display = "none"; 

    // do not display warning
    document.getElementById('modaltitle1').style.display = "none";
    document.getElementById('modaltext1').style.display = "none";
    document.getElementById('warningimage').style.display = "none"; 
}
else{
    // display warning
    document.getElementById('modaltitle1').style.display = "block";
    document.getElementById('modaltext1').style.display = "block"; 
    document.getElementById('warningimage').style.display = "block"; 

// do not display congratulations
    document.getElementById('modaltitle2').style.display = "none";
    document.getElementById('modaltext2').style.display = "none";
    document.getElementById('congoimage').style.display = "none"; 

// do not display whoopsy no credentials
    document.getElementById('modaltitle3').style.display = "none";
    document.getElementById('modaltext3').style.display = "none";
    document.getElementById('whoopsyimage').style.display = "none"; 
}
}