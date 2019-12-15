const app = document.getElementById('houses');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://anapioficeandfire.com/api/houses/', true);
request.onload = function() {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(house => {
             
const card = document.createElement('div');
card.setAttribute('class', 'card');

const h1 = document.createElement('h1');
h1.textContent = house.name;

const h2 = document.createElement('h2');
h2.textContent = house.words;        
        
const h3 = document.createElement('h3');
h3.textContent = house.region;              

const p = document.createElement('p');
p.textContent = house.coatOfArms;
        
container.appendChild(card);
card.appendChild(h1);
card.appendChild(h2);        
card.appendChild(h3);        
card.appendChild(p);
        
});
} 
}
request.send();



