//c39091a7

var url="https://www.omdbapi.com/?apikey=c39091a7&t=the+lion+king";
var ploturl="https://www.omdbapi.com/?apikey=c39091a7&plot=full&t=the+lion+king";

$.get(url, function (response){
  console.log(response.Actors);
  document.getElementById("actors").innerHTML = response.Actors;
  console.log(response.Title);
  document.getElementById("title").innerHTML = response.Title;
  console.log(response.Year);
  document.getElementById("year").innerHTML = response.Year;
  // document.getElementById("plot").innerHTML = response.Plot;
  document.getElementById("poster").src = response.Poster;
})

$.get(ploturl, function (response){
  document.getElementById("plot").innerHTML = response.Plot;
  console.log(response)
})
