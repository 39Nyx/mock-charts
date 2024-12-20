let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';

let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF', '#009D00'];

// 数据
let chartData = [
    {
        name: "事件类别1",
        value: 95,
    },
    {
        name: "事件类别2",
        value: 75,
    },
    {
        name: "事件类别3",
        value: 55,
    },
    {
        name: "事件类别4",
        value: 40,
    },
    {
        name: "事件类别5",
        value: 20,
    }
];
let arrName = [];
let arrValue = [];
let sum = 0;
let lineYAxis = [];

// 数据处理
chartData.forEach((v, i) => {
    arrName.push(v.name);
    arrValue.push(v.value);
})


const radius = [
    ['43%', '50%'], // 7
    ['34%', '40%'], // 6
    ['26%', '31%'], // 5
    ['19%', '23%'], // 4
    ['13%', '16%']   // 3
];
const pieSeries = [];

// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '事件',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: radius[i],
        center: ["25%", "50%"],
        itemStyle: {
            borderRadius: 10
        },
        label: {
            show: false
        },
        data: [{
            value: v.value * 0.75,
            name: v.name
        }, {
            value: 100 - v.value * 0.75,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)"
            }
        }]
    });
    // 背景
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false,
        hoverAnimation: false,
        radius: radius[i],
        center: ["25%", "50%"],
        label: {
            show: false
        },
        data: [{
            value: 7.5,
            itemStyle: {
                color: "#EEEEEE"
            }
        }, {
            value: 2.5,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)"
            }
        }]
    });
})

option = {
    backgroundColor: '#fff',
    
    series: pieSeries,
};