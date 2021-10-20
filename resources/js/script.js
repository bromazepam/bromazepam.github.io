$.getJSON( "https://disease.sh/v3/covid-19/countries/serbia?strict=true",
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

$.getJSON( "https://disease.sh/v3/covid-19/vaccine/coverage/countries/serbia?lastdays=1&fullData=false",
    function( data ) {
            let obj = data.timeline;
            var str = JSON.stringify(obj);
            var subStr = str.substring(
                str.lastIndexOf(":") + 1,
                str.lastIndexOf("}")
            );
            var vaccinated = parseInt(subStr, 10);
            $(".badge13").append(vaccinated);
    }
);
