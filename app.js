
const ready = function ()  {
  // loading
const people = [
  { firstname: "Landry", surname : "O'Connel", age: 22, height: 140 },
  { firstname: "Sharon", surname : "O'Gara", age: 52, height: 190  },
  { firstname: "Emerson", surname : "O'Driscol", age: 32, height: 190  },
  { firstname: "Roni", surname : "O'Sam", age: 31, height: 170  },
];
const tbody = document.querySelector("tbody");

/*for (let i = 0; i < people.length; i++) {
  let tr = document.createElement("tr");
  tr.innerHTML =
  `<td>${people[i].firstname}</td><td>${people[i].firstname}</td>`
  let td = document.createElement("td");
  let firstname = document.createTextNode(people[i].firstname);
  td.appendChild(firstname);
  tr.appendChild(td);
  tbody.appendChild(tr);*/

let trContainer = document.createDocumentFragment();

 for(let i = 0; i < people.length; i++) {
   let tr = document.createElement("tr");
   tr.innerHTML = `<td>${people[i].surname}</td><td>${people[i].firstname}</td><td>${people[i].age}</td><td>${people[i].height}</td>`;
     trContainer.appendChild(tr);
 }
 tbody.appendChild(trContainer);



  }

  document.getElementById("sub").addEventListener("click", function(){
      alert("Form submited");
  });

document.addEventListener("DOMContentLoaded", ready);



/*let table = document.getElementById("table");
let row = table.insertRow(1);

let cell1 = row.insertCell(0);
let Cell2 = row.insertCell(1);
let Cell3 = row.insertCell(0);
let Cell4 = row.insertCell(1);

cell1.innerHTML = people[1];
Cell2.innerHTML = people[1];
Cell3.innerHTML = people[2];
Cell4.innerHTML = people[3];

}
document.addEventListener("DOMContentLoaded", ajout);*/
