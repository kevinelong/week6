// window.onload = ()=>{
document.addEventListener("DOMContentLoaded", ()=>{
    
    const tbody = document.querySelector("#list tbody")

    const year = document.getElementById("year")
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

    year.addEventListener("change", ()=>{
        tbody.innerHTML = "" //clear table body result rows
        let selectedYear = year.selectedOptions[0].value;
        //alert(selectedYear);
        images.forEach((image)=>{
            if(selectedYear == image.year){

                let row = tbody.insertRow(-1) // end of rows
                
                let cellYear = row.insertCell(0);
                cellYear.innerHTML = image.year;
                
                let cellTitle = row.insertCell(1);
                cellTitle.innerHTML = image.title;
            }
        })
        // let row = table.insertRow(-1);
        // // Create new cells (<td> elements) and add text
        // let cell1 = row.insertCell(0);
        // cell1.innerHTML = winningTickets[i].tixNum;
        // let cell2 = row.insertCell(1);
        // cell2.innerHTML = "$" + winningTickets[i].prize.toFixed(2);
        // let cell3 = row.insertCell(2);
        // cell3.innerHTML = winningTickets[i].expires;
        
    }); // end year change listener

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