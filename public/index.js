// const submit_quote = document.getElementById("submit-quote");

// submit_quote.addEventListener("click", () => { })

var ul_quotes = document.getElementById("ul-quotes");

fetch("/random_quote", { "method": "GET" })

    .then(response => {
        ul_quotes.innerHTML = "dsdfd";
    });


    // .then(data => {
    //     //Work with JSON data here
    //     var joke_source = "Here is a joke from the Jokes API at rapidapi.com, Refresh the page to see another one. ";
    //     joke_here.innerHTML = data.content;
    // })
    // .catch(err => {
    //     console.log(err);
    // });