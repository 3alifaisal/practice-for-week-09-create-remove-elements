/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        let urlParts = url.split("/");
        let breedSubDirIndex = urlParts.indexOf("breeds");
        let newBreedName = urlParts[breedSubDirIndex + 1]
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newDogCard = document.createElement("li");
        newDogCard.innerHTML = `
            <figure>
                <img src="${url}" >
                <figcaption>"${newBreedName}"</figcaption>
            </figure>
        `;
  
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const galleryElement = document.body.querySelector(".gallery > ul");
        galleryElement.appendChild(newDogCard);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDogCard = document.body.querySelector(".gallery > ul > :first-child");

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
   if(firstDogCard) firstDogCard.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const lastDogCard = document.body.querySelector(".gallery > ul > :last-child");
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    if(lastDogCard) lastDogCard.remove();
});