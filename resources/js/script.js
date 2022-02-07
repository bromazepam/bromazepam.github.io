$.getJSON("https://disease.sh/v3/covid-19/countries/serbia?strict=true",
    function (data) {
        let tests = data.tests;
        let cases = data.cases;
        let todayCases = data.todayCases;
        let deaths = data.deaths;
        let todayDeaths = data.todayDeaths;
        let recovered = data.recovered;
        let active = data.active;
        let critical = data.critical;
        let todayRecovered = data.todayRecovered;

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
).fail(function (jqXHR) {
    if (jqXHR.status === 410) {
        alert("Подаци нису тренутно доступни, молим Вас покушајте поново за пар минута.");
    } else {
        alert("Проблем са конекцијом, покушајте поново за пар минута.");
    }
});

$.getJSON("https://disease.sh/v3/covid-19/vaccine/coverage/countries/serbia?lastdays=1&fullData=false",
    function (data) {
        let obj = data.timeline;
        let str = JSON.stringify(obj);
        let subStr = str.substring(
            str.lastIndexOf(":") + 1,
            str.lastIndexOf("}")
        );
        let vaccinated = parseInt(subStr, 10);
        $(".badge13").append(vaccinated);
    }
);
