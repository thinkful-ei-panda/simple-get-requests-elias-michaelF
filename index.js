'use strict';
var inputNum = $('#inputNum').val();

function getDogImage() {
  console.log(inputNum);
  fetch(`https://dog.ceo/api/breeds/image/random/${inputNum}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  imagesArray = responseJson.message;
  console.log(imagesArray);
  for (let i=0; i<inputNum.length; i++) {
    let generateForm = function(){return`<img src="${imagesArray[i]}" class="results-img">`};
    imageHtml = generateForm()
    console.log(imageHtml);
  }
  $('.results-img').html(imageHtml)
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});