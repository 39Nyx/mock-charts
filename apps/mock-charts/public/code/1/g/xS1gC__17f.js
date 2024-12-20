model = {
    series: {
        '蒸发量': 10,
        '降水量': 20,
        'aaa': 50,
        'bbb': 20
        // more series
    }
}

option = {
    title : {
        text: '饼图',
        subtext: '纯属虚构'
    },
    tooltip : {
    },
    legend: {
        data: Object.keys(model.series),
        bottom: 20
    },
    series : [{
        type:'pie',
        data: Object.keys(model.series).map(key => {
            return {
                name: key,
                value: model.series[key]
            };
        })
    }]
};
