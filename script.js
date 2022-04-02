'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const input = document.querySelector('input');
const search = document.querySelector('label');
///////////////////////////////////////

// const getCountry = function (country) {
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/all`);
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(request.responseText);
  console.log(data);

  data.forEach(function (data) {
    console.log(data);
    let html = `
<article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1_000_000
    ).toFixed(2)} mln people</p>
    <p class="country__row"><span>🗣️</span>${
      data.languages ? data.languages[0].nativeName : data.language
    }</p>
    <p class="country__row"><span>💰</span> ${
      data.currencies
        ? ` ${data.currencies[0].name} ${data.currencies[0].symbol}`
        : data.currency
    }</p>
  </div>
</article>
  `;
    search.addEventListener('click', function () {
      if (input.value == data.name) {
        countriesContainer.innerHTML += html;
        countriesContainer.style.opacity = 1;
      }
    });
  });
});
// };

// getCountry('usa');
