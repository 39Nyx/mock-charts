backgroundColor = 'rgba(0,0,0,1)';
chartdata = [
    {
        label: '竞争性谈判',
        value: '200',
    },
    {
        label: '公开招标',
        value: '300',
    },
    {
        label: '询价',
        value: '200',
    },
    {
        label: '单一来源',
        value: '600',
    },
    {
        label: '邀请招标',
        value: '500',
    },
];
itemGap = 28.4;
itemHeight = 32.5;
padding = [5, 5];
color = ['#37FFC9', '#FFE777', '#19D6FF', '#32A1FF', '#FFFFFF'];

let data1 = chartdata;
let sum = 0;
data1.forEach((item) => {
    item.name = item.label || item.name;
    sum += Number(item.value);
});

let arrName = getArrayValue(data1, 'name');
let arrValue = getArrayValue(data1, 'value');
let sumValue = eval(arrValue.join('+'));
let objData = array2obj(data1, 'name');
let optionData = getData(data1);

function getArrayValue(array, key) {
    var key = key || 'value';
    var res = [];
    if (array) {
        array.forEach((t) => {
            res.push(t[key]);
        });
    }
    return res;
}

function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}

function getData(data1) {
    var res = {
        series: [],
        yAxis: [],
    };
    for (let i = 0; i < data1.length; i++) {
        res.series.push({
            name: '',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            legendHoverLink: true,
            radius: [92 - i * 15 + '%', 84 - i * 15 + '%'],
            center: ['40%', '50%'],
            label: {
                show: false,
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                borderWidth: 5,
                // opacity:'0.95'
            },
            data: [
                {
                    value: data1[i].value * 0.75,
                    name: data1[i].name,
                },
                {
                    value: sumValue - data1[i].value * 0.75,
                    name: '',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                    },
                    hoverAnimation: false,
                },
            ],
        });
        res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [92 - i * 15 + '%', 84 - i * 15 + '%'],
            center: ['40%', '50%'],
            label: {
                show: false,
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                borderWidth: 5,
            },
            data: [
                {
                    value: 7.5,
                    itemStyle: {
                        color: '#203643',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    hoverAnimation: false,
                },
                {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    hoverAnimation: false,
                },
            ],
        });
        res.yAxis.push(((data1[i].value / sumValue) * 100).toFixed(2) + '%');
    }
    return res;
}

option = {
    backgroundColor: backgroundColor,
    tooltip: {
        formatter: (params) => {
            if (params.name != '') {
                return (
                    params.name + ' : ' + params.value / 0.75 + '\n' + '(' + (params.percent / 0.75).toFixed(2) + '%)'
                );
            }
        },
    },
    legend: {
        show: true,
        icon: 'rect',
        // top: "center",
        top: '3.38%',
        bottom: '0',
        left: '39.5%',
        data: arrName,
        selected: true,
        width: 496,
        itemWidth: 496,
        // height:90,
        itemHeight: itemHeight,
        padding: padding,
        itemGap: itemGap,
        tooltip: {
            show: true,
            formatter: (name) => {
                return (
                    name.name +
                    ' : ' +
                    objData[name.name].value +
                    ' (' +
                    ((Number(objData[name.name].value) * 100) / sum).toFixed(2) +
                    '%)'
                );
            },
        },
        formatter: (name) => {
            return '{line|}{circle|●}{value|' + objData[name].value + '}';
        },
        textStyle: {
            rich: {
                value: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: '#fff',
                },
                line: {
                    width: 98,
                    height: 1,
                    backgroundColor: '#fff',
                },
                circle: {
                    color: '#fff',
                    padding: [0, 6, 0, 0],
                },
            },
        },
    },
    color: this.color,
    xAxis: [
        {
            show: false,
        },
    ],
    series: optionData.series,
};
