let WHYYYYYYYYYYY = [];

$("button").click(function(){
	$.ajax({
		url:"https://swapi.co/api/films/",
		type: "GET",
		success: function getFilmData (data){
				WHYYYYYYYYYYY.push(JSON.parse);
				console.log(WHYYYYYYYYYYY);
		},
	});
});


// console.log("die")