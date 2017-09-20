

$("button").click(function(){
	$.ajax({
		url:"https://swapi.co/api/films/",
		type: "GET",
		success: function getFilmData (data){
				console.log(data);
		},
	});
});

// console.log("die")