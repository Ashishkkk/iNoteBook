// if user add a note, add it to the localstorage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function () {

    let addTxt = document.getElementById("addTxt");
    let addtitle = document.getElementById("title");
    let myObj = {
        title: addtitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addtitle.value = "";
    // console.log(notesObj);
    showNotes();
});


// function to show elements from localstorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-5 mx-5 card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id = ${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;

    });
    let notesElm = document.getElementById('notes');
        notesElm.innerHTML = html;
}
showNotes();





// function to delete a note

function deleteNote(index) {
    // console.log("delete it", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


}



let search = document.getElementById('searchTxt')
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    // console.log('input event fired', inputVal);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})



/*
Further Feture
add title
Mark a note as important
separate notes by user

*/

