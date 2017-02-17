$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'

  }).done(function (responseData) {
    console.log(responseData);

});

});
