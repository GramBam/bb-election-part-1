$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'

  }).done(function (responseData) {

    console.log(responseData);

    for(var i=0; i < responseData.candidates.length; i++) {
    $('#response-data').append('<li>  Name: ' + responseData.candidates[i].name + '</li>');
    $('#response-data').append('<li> Votes: ' + responseData.candidates[i].votes + '</li>' + '<br>');

    }

  });

});
