const res = {
    "error": false,
    "model": {
        "左主轴承": [
            {
                "date": "2018-05-11T12:00:00.000Z",
                "value": "33"
            },
            {
                "date": "2018-05-11T12:00:00.000Z",
                "value": "13"
            }
        ],
        "下导板2": [
            {
                "date": "2018-05-10T12:00:00.000Z",
                "value": "53"
            },
            {
                "date": "2018-05-11T12:00:00.000Z",
                "value": "33"
            }
        ],
        "1号缸": [
            {
                "date": "2018-05-11T12:00:00.000Z",
                "value": "23"
            }
        ],
        "左主轴承温度": [
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "33"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "13"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "13"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "13"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "13"
            }
        ],
        "十字头与导板间隙1": [
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "23"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "23"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "23"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "23"
            }
        ],
        "十字头与导板间隙2": [
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "33"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "53"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "33"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "53"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "33"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "53"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "33"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "53"
            }
        ],
        "泵排出口压力值": [
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "33"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "33"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "33"
            },
            {
                "date": "2018-05-09T11:07:43.275Z",
                "value": "33"
            }
        ],
        "液压系统": [
            {
                "date": "2018-05-08T12:00:00.000Z",
                "value": "33"
            }
        ],
        "2号缸": [
            {
                "date": "2018-05-08T12:00:00.000Z",
                "value": "33"
            }
        ],
        "下导板1": [
            {
                "date": "2018-05-05T12:00:00.000Z",
                "value": "23"
            }
        ]
    }
}

option = {
    grid: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 35,
        containLabel: true  
    },
    tooltip: {},
    legend: {
        type: 'scroll',
        bottom: 10,
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 8,
        data: Object.keys(res.model)  
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {},
    series: Object.keys(res.model).map(key => {
        const item = res.model[key]
        return {
            type: 'line',
            name: key,
            symbol: 'circle',
            data: item.map(d => {
                return [d.date, d.value]
            })
        }
    })
};