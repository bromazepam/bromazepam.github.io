$.getJSON( "https://corona.lmao.ninja/v2/countries/serbia",
    function( data ) {
        var tests = data.tests;
        var cases = data.cases;
        var todayCases = data.todayCases;
        var deaths = data.deaths;
        var todayDeaths = data.todayDeaths;
        var recovered = data.recovered;
        var active = data.active;
        var critical = data.critical;
        var todayRecovered = data.todayRecovered;

        $(".badge1").append(cases);
        $(".badge2").append(todayCases);
        $(".badge3").append(deaths);
        $(".badge4").append(todayDeaths);
        $(".badge5").append(recovered);
        $(".badge6").append(active);
        $(".badge7").append(critical);
        $(".badge8").append(tests);
        $(".badge12").append(todayRecovered);
    }
).fail(function(jqXHR){
        if(jqXHR.status == 410){
                alert("Подаци нису тренутно доступни, молим Вас покушајте поново за пар минута.");
        }else{
                alert("Проблем са конекцијом, покушајте поново за пар минута.");
        }
});

// $.getJSON( "https://corona.lmao.ninja/v2/all",
//     function( data ) {
//         var casesInWorld = data.cases;
//         var deathsInWorld = data.deaths;
//         var recoveredInWorld = data.recovered;
//
//         $(".badge9").append(casesInWorld);
//         $(".badge10").append(recoveredInWorld);
//         $(".badge11").append(deathsInWorld);
//     }
// );
$.getJSON( "https://disease.sh/v3/covid-19/vaccine/coverage/countries/serbia?lastdays=1",
    function( data ) {
            let obj = data.timeline;
            var str = JSON.stringify(obj);
            var subStr = str.substring(
                str.lastIndexOf(":") + 1,
                str.lastIndexOf("}")
            );

            var vaccinated = parseInt(subStr, 10);
            console.log(str);
            console.log(vaccinated);

            $(".badge13").append(vaccinated);
    }
);