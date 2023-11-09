//  Read in the team data from the json file
fetch('assets/json/teams.json')
    .then(response => response.json())
    .then(data => {
        // Handle the JSON data
        main(data);
    
    
    })
    .catch(error => {
        console.error('Error:', error);
    });


function main(data) {
    // Get data
    const teams = data["teams"];
    const tableBody = document.querySelectorAll("[data-tbody]")[0];


    // Set up the table
    populateTable();


    // Add all teams to the list and update their success/fails
    function populateTable () {
        let rowTemplate = ` <tr>
                                <th scope="row">Monty Python</th>
                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                            </tr>`;

        for(let i = 0; i < teams.length; i++) {
            tableBody.innerHTML += rowTemplate;

            let currentRow = tableBody.children[i];
            currentRow.children[0].innerHTML = teams[i]["name"];
            for(let j = 0; j < teams[i]["questions"].length; j++) {
                if(teams[i]["questions"][j] == 1) {
                    let checkbox = currentRow.children[j+1].children[0];
                    checkbox.setAttribute("checked", "checked");
                } 
            }
        }
    }
}