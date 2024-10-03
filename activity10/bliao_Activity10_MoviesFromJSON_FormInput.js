const b = document.getElementById("my_form");

b.addEventListener("submit",(event)=>{
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    fetchData("./MoviesFromJSON.json");
});

async function fetchData(url) {
    console.log("Begin fetch, " + url);

    try {
        // Define a constant response and store the fetched data by awaiting the fetch() method
        const response = await fetch(url);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Define a constant data and store the data in JSON form
        const data = await response.json(); // Now we have the data from the API
        console.log(data);

        const inputMovieName = document.getElementById("selectedMovie").value.trim();
        loadMovies(data, inputMovieName); // Call loadMovies with the fetched data


    } catch (err) {
        console.log('Error:', err);
    }

    console.log("End fetch");
}

function appendData(data) {
    let mainContainer = document.getElementById("myData1");
    let div = document.createElement("div");
    // Using Bootstrap Card component
    div.classList.add("col-sm-6", "col-md-4", "col-lg-3");
    div.innerHTML = `
        <div class="card mb-4" style="width: 100%;">
        <img src=${data.logo} class="card-img-top" alt="superhero" width="100" />
        <div class="card-body">
        <h5 class="card-title">${data.firstName} ${data.lastName}</h5>
        <p class="card-text">
        <strong>Job:</strong> ${data.job} <br>
        <strong>Roll:</strong> ${data.roll}
        </p>
        </div>
        </div>`;
    mainContainer.appendChild(div);
}

function loadMovies(myMovies, inputMovieName) 
{
    var CardMovie = document.getElementById("col");

    CardMovie.innerHTML = "";

    for(var i = 0; i < myMovies.movies.length; i++)
    {
        if(myMovies.movies[i].title === inputMovieName)
        {
            let title = myMovies.movies[i].title;
            let year = myMovies.movies[i].year;
            let url = myMovies.movies[i].url;
            console.log(title);

            // construct the HTML element
            let AddCardMovie = document.createElement("div");
            AddCardMovie.classList.add("col"); // Add Bootstrap class to the column
            AddCardMovie.innerHTML = `
                <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <p class="card-text"> <strong>${title}</strong>, ${year}</p>
                </div>
                </div>
            `;
        CardMovie.appendChild(AddCardMovie);
        }
    }
}
/*  Author: Brandon Liao
    ISU Netid : bliao@iastate.edu
    Date : 09/ 25/ 2024 */