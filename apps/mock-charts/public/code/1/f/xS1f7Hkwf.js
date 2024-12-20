var uploadedDataURL = "/asset/get/s/data-1463377204568-ByTVpRIz.csv";

var nameMap = {
    'United States': 'United States of America'
}

$.get(uploadedDataURL).done(function (csvText) {
    var result = Papa.parse(csvText);
    
    myChart.setOption({
        title: {
            text: 'Alcohol Consumption Per Country',
            subtext: "The World Health Organization (WHO)'s breakdown of per capita alcohol\nconsumption among adults over 15.",
            sublink: 'https://opendata.socrata.com/Government/Alcohol-Consumption-Per-Country/hj43-2bpj',
            textStyle: {
                fontSize: 30
            }
        },
        visualMap: {
            min: 0,
            max: 15,
            formatter: '{value} liters / captita'
        },
        series: [{
            type: 'map',
            map: 'world',
            data: result.data.map(function (item) {
                return {
                    name: nameMap[item[0]] || item[0],
                    value: item[1]
                }
            })
        }] 
    });
});