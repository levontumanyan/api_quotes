// const submit_quote = document.getElementById("submit-quote");

// submit_quote.addEventListener("click", () => { })

var random_quote = document.getElementById("random-quote");

fetch("/random_quote", { "method": "GET" })

    .then(res => res.text())
    .then(body => {
        console.log(body);
        var p_tag = document.createElement("p");
        var quote_body = document.createTextNode(JSON.parse(body).body);
        p_tag.appendChild(quote_body);
        var quotes_block = document.getElementById("quotes-block");
        quotes_block.appendChild(p_tag);
    });


    // .then(data => {
    //     //Work with JSON data here
    //     var joke_source = "Here is a joke from the Jokes API at rapidapi.com, Refresh the page to see another one. ";
    //     joke_here.innerHTML = data.content;
    // })
    // .catch(err => {
    //     console.log(err);
    // });