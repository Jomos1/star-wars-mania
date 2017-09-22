function buildHTMLElements (responseData) {
	let title = $("<h2 class='film-title'></h2>").text("Title");
	let director = $("<h2 class='film-director'></h2>").text("Director");
	$(".films").append(title, director);
};



$("button").click(function(){
	$.ajax({
		url:"https://swapi.co/api/films/",
		type: "GET",
		success: function getFilmData (data){
			// console.log(data.results[0]);
			$(".film-title").append(data.results[0].title);
		},
	});
});



// console.log("die")