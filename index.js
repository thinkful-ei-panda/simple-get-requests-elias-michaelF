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
  console.log(responseJson.message);
  let htmlString = [];
  //replace the existing image with the new one
  const imagesArray = responseJson.message;
  const generateForm = function(i){return`<img src="${imagesArray[i]}" class="results-img">`;};
  for (let i=0; i<inputNum; i++) {
    htmlString = generateForm(i).push();
    var images = htmlString.join('');
  }

  $('.results-img').html(images); 
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