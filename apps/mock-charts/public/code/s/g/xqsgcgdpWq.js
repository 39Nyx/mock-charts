var valueData = [{
        value: 33,
        name: '诊所'
    },
    {
        value: 29,
        name: '汽车服务相关'
    },
    {
        value: 27,
        name: '洗衣店'
    },
    {
        value: 26,
        name: '中介机构'
    },
    {
        value: 22,
        name: '汽车维修'
    }
];
var nameData = ['诊所', '汽车服务相关', '洗衣店', '中介机构', '汽车维修'];
var colorData = ['#A769EB', '#f69846', '#f6d54a', '#45dbf7', '#5AF6DE', '#89F6DC'];

option = null;
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    legend: {
        orient: 'vertical',
        icon: 'circle',
        bottom: 20,
        x: 'right',
        y: 'top',
        data: nameData
        //data: ['诊所', '汽车服务相关', '洗衣店', '中介机构', '汽车维修', '火车站', '人流指数', '日式简餐/快餐', 'ATM', '超市']
    },
    series: [{
        type: 'pie',
        radius: ['20%', '40%'],
        center: ['50%', '50%'],
        color: colorData,
        data: valueData,
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 20,
                lineStyle: {
                    color: '#12EABE',
                    width: 2
                }
            }
        },
        label: {
            normal: {
                formatter: '{c|{b}}\n{a|{c}}' + '家',
                rich: {
                    b: {
                        fontSize: 16,
                        color: '#12EABE',
                        align: 'left',
                        padding: 4
                    },
                    d: {
                        fontSize: 16,
                        align: 'left',
                        padding: 2
                    },
                    c: {
                        color: '#676a6c',
                        fontSize: 16,
                        align: 'left',
                        padding: 2
                    }
                }
            }
        }
    }]
};