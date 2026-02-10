const no_button = document.querySelector("#no-btn")
const yes_button = document.querySelector("#yes-btn")

function changeToYes() {
    no_button.textContent = "Yes"
}

function changeToNo() {
    no_button.textContent = "No"
}

function selectYes() {
    // Clear page
    document.querySelector(".question").remove()
    document.querySelector(".answer").remove()

    // Create new div with static response
    const responseDiv = document.createElement("div")
    const responseMessage = document.createElement("h1")
    responseMessage.innerText = "You Selected Yes! Love You :)"
    responseDiv.setAttribute("class", "question")
    responseDiv.appendChild(responseMessage)
    document.body.appendChild(responseDiv)

    const imageDiv = document.createElement("div")
    imageDiv.setAttribute("class", "answer")
    const imageElement = document.createElement("img")
    imageElement.setAttribute("src", "images/Valentines-Day-GIFs-4.gif")
    imageDiv.appendChild(imageElement)
    document.body.appendChild(imageDiv)
}

/*
    Event listeners cause the no button to read "yes" only when the user
    is hovering over it.
*/
no_button.addEventListener("mouseover", changeToYes)
no_button.addEventListener("mouseleave", changeToNo)

/*
    Regardless of whether the user selects yes or no, a message will pop up
    indicating they selected yes.
*/
no_button.addEventListener("click", selectYes);
yes_button.addEventListener("click", selectYes);

/*
    All buttons will highlight light pink while the user hovers over it
*/
document.querySelectorAll("button")
    .forEach((button) => {
        button.addEventListener("mouseover", (event) => {
            event.target.setAttribute("class", "highlight-button")
        })
        button.addEventListener("mouseleave", (event) => {
            event.target.removeAttribute("class", "highlight-button")
        })
})
