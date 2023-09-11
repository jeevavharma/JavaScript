const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "6JfsTEyTx35GcsI3gmsdgQ==7R14TWzwtWdJpnWU";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=";
async function getjoke(){

    //try catch is used to show us when error happend like no internet
    try {
        jokeEl.innerText = "Updating.....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    // await is to wait for the response
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";

    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
    }

    


}

btnEl.addEventListener("click", getjoke);