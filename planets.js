function getData(params) {
    fetch('https://swapi.co/api/planets/?format=json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            generate_table(data);
        })
        .catch(error => console.error(error))
}



function generate_table(data) {
    var div = document.createElement("div");
    div.className = 'container';

    var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    tbl.className = 'table table-hover table-striped';

    var tblBody = document.createElement("tbody");
    var names = [];
    var climates = [];
    var diameters = [];
    var gravities = [];
    var surfaces = [];
    var rotations = [];
    var orbitals = [];

    for (var i = 0; i < data.results.length; i++) {
        var row = document.createElement("tr");
        names.push(data.results[i].name)
        climates.push(data.results[i].climate)
        diameters.push(data.results[i].diameter)
        gravities.push(data.results[i].gravity)
        surfaces.push(data.results[i].surface_water)
        rotations.push(data.results[i].rotation_period)
        orbitals.push(data.results[i].orbital_period)

        createColoumn(i + 1, row)
        createColoumn(names[i], row)
        createColoumn(climates[i], row)
        createColoumn(diameters[i], row)
        createColoumn(gravities[i], row)
        createColoumn(surfaces[i], row)
        createColoumn(rotations[i], row)
        createColoumn(orbitals[i], row)
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    div.appendChild(tbl);
    body.appendChild(div);
}

function createColoumn(data, row) {
    for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(data);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
}