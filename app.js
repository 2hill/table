/*// app global variable to maintain state
const app = {};

app.people = [{
    firstname: "Landry",
    surname: "O'Connel",
    age: 22,
    height: 140
}, {
    firstname: "Sharon",
    surname: "O'Gara",
    age: 52,
    height: 190
}, {
    firstname: "Emerson",
    surname: "O'Driscol",
    age: 32,
    height: 190
}, {
    firstname: "Roni",
    surname: "O'Sam",
    age: 31,
    height: 170
}];
// app controller
app.redraw = function() {
    const tbody = document.querySelector("tbody");
    // remove tbody contents
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    // add new contents from app.people

    const trContainer = document.createDocumentFragment();

    for (let i = 0; i < app.people.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${app.people[i].surname}</td><td>${app.people[i].firstname}</td><td>${app.people[i].age}</td><td>${app.people[i].height}</td>`;
        trContainer.appendChild(tr);
    }
    tbody.appendChild(trContainer);
};

    // app view
    app.onSubmit = function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const newPerson = {
            surname: formData.get("surname"), // prend un element du dom et le transforme en objet js
            firstname: formData.get("firstname"),
            age: formData.get("age"),
            height: formData.get("height"),
        };
        app.people.push(newPerson);
        app.redraw();
    };

// DOM bindings
const ready = function() {
    // Initial drawing
    app.redraw(); // Add new contents from app.people
    // On form submit
    document.getElementById("sub").addEventListener("submit", app.onSubmit); // submit is better than click because you listen all types of for submition
}
document.addEventListener("DOMContentLoaded", ready);*/

// app global variable to maintain state
const app = {};

// app model
app.people = [{
  firstname: "Landry",
  surname: "O'Hara",
  age: 34,
  height: 175
}, {
  firstname: "Sharon",
  surname: "O'Neil",
  age: 51,
  height: 177
}, {
  firstname: "Emerson",
  surname: "O'Connell",
  age: 16,
  height: 165
}, {
  firstname: "Roberto",
  surname: "O'Maley",
  age: 30,
  height: 199
}];

// app controller
app.redraw = function() {
  const tbody = document.querySelector("tbody");
  // Remove tbody contents
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // Add new contents from app.people
  const trContainer = document.createDocumentFragment();
  for (let i = 0; i < app.people.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${app.people[i].surname}</td><td>${app.people[i].firstname}</td><td>${app.people[i].age}</td><td>${app.people[i].height}</td>`;
    trContainer.appendChild(tr);
  }
  tbody.appendChild(trContainer);
};

// app view
app.onSubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const newPerson = {
    surname: formData.get("name"),
    firstname: formData.get("surname"),
    age: formData.get("age"),
    height: formData.get("height")
  };
  app.people.push(newPerson);
  app.redraw();
};

// DOM bindings
const ready = function() {
  // Initial drawing
  app.redraw();
  // On form submit
  document.getElementById("form").addEventListener("submit", app.onSubmit);
}
document.addEventListener("DOMContentLoaded", ready);
