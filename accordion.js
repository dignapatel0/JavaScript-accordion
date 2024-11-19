function accordion_toggle(target){
    //console.log("open");
    //console.log(target);

    //Create a referance to all sections using a class name
    var hide = document.getElementsByClassName("accordion-section")
    //Loop through each section
    for (var i =0; i < hide.length; i++){
        //Hide each section
        hide[i].style.display = "none";
    }

    //Create a referance to an element with the same name as the target varible
    var content = document.getElementById(target);

    //check if the content is currently displayed
    if(content.style.display === "block") {
        //Hide the content
        content.style.display = "none";
    } else{
        //display the content
        content.style.display = "block";
    }
}