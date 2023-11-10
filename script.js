let rightBox = document.getElementsByClassName(".right")
let leftBox = document.getElementsByClassName(".left")
let Lists = document.getElementsByClassName(".list");

for (list of Lists) {
    list.addEventListener("dragstart", function(e){
        let picked = e.target;
        console.log(e);
        rightBox.addEventListener("dragover", function(e){
            e.preventDefault()
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(picked);
        });
    })

    // if (object.hasOwnProperty(key)) {
    //     const element = object[key];
        
    // }
}