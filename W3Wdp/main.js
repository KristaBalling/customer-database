


let targetLocation = document.querySelector("body");
targetLocation.innerHTML = `<h1>internal company directory</h1>`

for (let i=0; i < customers.results.length; i++){
targetLocation.innerHTML += `
<div class= "profiles">
<img src= ${customers.results[i].picture.large}>
<p class="names"> ${customers.results[i].name.first} ${customers.results[i].name.last}</p>
<p class="email">${customers.results[i].email}</p>
<p class="street">${customers.results[i].location.street}</p>
<p class="city">${customers.results[i].location.city}</p>
<p class="phone">${customers.results[i].phone}</p>
<p class="ssn">${customers.results[i].id.value}</p>
</div>`
}
