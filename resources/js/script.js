$.getJSON( "https://coronavirus-19-api.herokuapp.com/countries/serbia",
    function( data ) {
        console.log(data);
        var cases = data.cases;
        var todayCases = data.todayCases;
        var deaths = data.deaths;
        var todayDeaths = data.todayDeaths;
        var recovered = data.recovered;
        var active = data.active;
        var critical = data.critical;
        var casesPerOneMillion = data.casesPerOneMillion;


        $(".badge1").append(cases);
        $(".badge2").append(todayCases);
        $(".badge3").append(deaths);
        $(".badge4").append(todayDeaths);
        $(".badge5").append(recovered);
        $(".badge6").append(active);
        $(".badge7").append(critical);
        $(".badge8").append(casesPerOneMillion);
    }
);
$.getJSON( "https://coronavirus-19-api.herokuapp.com/all",
    function( data ) {
        var casesInWorld = data.cases;
        var deathsInWorld = data.deaths;
        var recoveredInWorld = data.recovered;

        $(".badge9").append(casesInWorld);
        $(".badge10").append(recoveredInWorld);
        $(".badge11").append(deathsInWorld);
    }
);

