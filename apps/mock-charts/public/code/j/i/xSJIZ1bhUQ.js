var jsonData = {
    "RECORDS": [{
            "enterprises": "XX汽车有限公司",
            "TotalTax": 11111111111.11,
            "TotalTax_Rank": 1,
            "TotalTaxLeave": 555555555.55,
            "TotalTaxLeave_Rank": 7,
            "TotalContribute": 444444444.44,
            "TotalContribute_Rank": 6,
            "TotalAppropriation": 111111111.11,
            "TotalAppropriation_Rank": 9
        },
        {
            "enterprises": "XX股份有限公司XX分公司",
            "TotalTax": 8888888888.88,
            "TotalTax_Rank": 2,
            "TotalTaxLeave": 1111111111.11,
            "TotalTaxLeave_Rank": 2,
            "TotalContribute": 888888888.888,
            "TotalContribute_Rank": 2,
            "TotalAppropriation": 222222222.223,
            "TotalAppropriation_Rank": 5
        },
        {
            "enterprises": "XX公司",
            "TotalTax": 6666666666.66,
            "TotalTax_Rank": 3,
            "TotalTaxLeave": 3333333333.33,
            "TotalTaxLeave_Rank": 1,
            "TotalContribute": 1111111111.11,
            "TotalContribute_Rank": 1,
            "TotalAppropriation": 2222222222.22,
            "TotalAppropriation_Rank": 1
        }
    ]
};

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    series: [
        {
            type: 'pie',
            center: ['50%', '33%'],
            clockWise: false,
            hoverAnimation: false,
            radius: [0, 1],
            itemStyle: dataStyle,
            name: jsonData.RECORDS[0].enterprises,
            label: {
                normal: {
                    show: true,
                    backgroundColor: '#eee',
                    borderColor: '#777',
                    borderWidth: 1,
                    borderRadius: 4,
                    formatter: [
                        '{title|{a}}{abg|}',
                        '{stringHead|指标名}{valueHead|指标值}{rateHead|排名}',
                        '{hr|}',
                        '{string|税收}{value|' + (Math.round(jsonData.RECORDS[0].TotalTax * 100) / 100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,') + '}{rate|' + Math.round(jsonData.RECORDS[0].TotalTax_Rank * 100) / 100 + '}',
                        '{string|留成}{value|' + (Math.round(jsonData.RECORDS[0].TotalTaxLeave * 100) / 100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,') + '}{rate|' + Math.round(jsonData.RECORDS[0].TotalTaxLeave_Rank * 100) / 100 + '}',
                        '{stringL|财力贡献}{value|' + (Math.round(jsonData.RECORDS[0].TotalContribute * 100) / 100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,') + '}{rate|' + Math.round(jsonData.RECORDS[0].TotalContribute_Rank * 100) / 100 + '}',
                        '{string|拨款}{value|' + (Math.round(jsonData.RECORDS[0].TotalAppropriation * 100) / 100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,') + '}{rate|' + Math.round(jsonData.RECORDS[0].TotalAppropriation_Rank * 100) / 100 + '}',
                    ].join('\n'),
                 
                    rich: {
                        title: {
                            color: '#eee',
                            align: 'center'
                        },
                        abg: {
                            backgroundColor: '#333',
                            width: '100%',
                            align: 'right',
                            height: 25,
                            borderRadius: [4, 4, 0, 0]
                        },
                        string: {
                            height: 20,
                            align: 'left',
                            color: 'black',
                            padding: [0, 20, 0, 0]
                        },
                        stringL: {
                            height: 20,
                            align: 'left',
                            color: 'black',
                            padding: [0, 10, 0, 0]
                        },
                        stringHead: {   //指标名
                            color: 'red',
                            height: 24,
                            align: 'left',
                            padding: [0, 20, 0, 0]
                        },
                        hr: {
                            borderColor: '#777',
                            width: '100%',
                            align: 'right',
                            borderWidth: 0.5,
                            height: 0
                        },
                        value: {
                            width: 40,
                            padding: [0, 10, 0, 40],
                            align: 'left'
                        },
                        valueHead: {
                            color: '#333',
                            width: 40,
                            padding: [0, 10, 0, 30],
                            align: 'center'
                        },
                        rate: {
                            width: 40,
                            align: 'right',
                            padding: [0, 10, 0, 0]
                        },
                        rateHead: {
                            color: '#333',
                            width: 40,
                            align: 'right',
                            padding: [0, 10, 0, 0]
                        }
                    }

                    //formatter: "{a} {b} : {c} ({d}%)"
                }
            },
            data: [{
                value: 1,
                name: 'invisible'
            }]
        },




    ]
};
myChart.setOption(option);