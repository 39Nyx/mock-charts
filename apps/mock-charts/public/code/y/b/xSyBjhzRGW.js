option = {
    title: {
        text: '按行业类型分',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data:['投资项目总数', '总投资额']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var now = new Date();
                var res = ['采矿业','房地产','建筑业','交通运输及邮政','教育','金融业','科研','、农林渔牧','批发、零售','水利和环境','卫生和社会工作','文体娱乐','信息技术','制造业'];
                return res;
            })()
        },
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var res = [];
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '投资项目数（个）',
            max: 7000,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'value',
            scale: true,
            name: '投资总额（万元）',
            max: 100000000,
            min: 0,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            name:'总投资额',
            type:'bar',
            xAxisIndex: 1,
            barMaxWidth:75,
            yAxisIndex: 1,
            data:(function (){
                var res = [1957444.4,60194662.2884,12127016.7,8797383.97,1485960.328,414016.58,2225161.5,21534861.44,4031624.69,4974117.21,4173419.29,1898511.905,4984495.7,82093677.33];

                return res;
            })()
        },
        {
            name:'投资项目总数',
            type:'line',
            data:(function (){
                var res = [107,870,323,294,65,24,93,1110,262,171,81,69,187,4801];
                return res;
            })()
        }
    ]
};

app.count = 20;
setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = option.series[0].data;
    var data1 = option.series[1].data;
    data0.shift();
    data0.push(Math.round(Math.random() * 1000));
    data1.shift();
    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);
    option.xAxis[1].data.shift();
    option.xAxis[1].data.push(app.count++);

   // myChart.setOption(option);
}, 2100);
