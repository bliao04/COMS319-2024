fetchData();

async function fetchData() {
    const url = './persons.json'
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

        data.forEach(superhero => {
            appendData(superhero);
        });

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
/*  Author: Brandon Liao
    ISU Netid : bliao@iastate.edu
    Date : 09/ 25/ 2024 */