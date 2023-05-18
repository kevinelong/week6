// window.onload = ()=>{
document.addEventListener("DOMContentLoaded", ()=>{
    
    const image_list = document.getElementById("image_list")
    const output = document.getElementById("output")
    const clear = document.getElementById("clear")

    image_list.innerHTML = "<option>Make a selection</option>"

    images.forEach(image=>{
        let option = document.createElement("option");
        option.innerHTML = image.title;
        option.value = image.name;
        image_list.appendChild(option);
    }); // end images for each

    image_list.addEventListener("change", ()=>{
        
        //IS FIRST ITEM "make a selection" e.g. 0, or no items e.g. -1
        if(image_list.selectedIndex <= 0){ 
            return; // DO NOTHING
        }
        
        let name = image_list.selectedOptions[0].value;
        // alert(name);
        let img = document.createElement("img");
        img.src = "images/" + name;
        output.appendChild(img);
    });  // end on change image list

    clear.addEventListener("click", ()=>{
        output.innerHTML = "";
        image_list.selectedIndex = 0; // set select to first item, -1 for blank
    }); // end clear button click

});// document loaded