'use strict';

function getDogImage() {
  let number = $('#dogs').val()
  fetch('https://dog.ceo/api/breeds/image/random/'+ number)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //loop through results
  let picResults = responseJson.message
  let display = getImages(picResults); 
  $('.image-content-multiple').html(display);
}

function getImages(pics){
    let result = '';
    for (let i = 0; i < pics.length; i++){
        result += `<img src="${pics[i]}" class="image-content-multiple">`;
    }
    return result;
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