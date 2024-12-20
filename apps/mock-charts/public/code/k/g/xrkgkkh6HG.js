app.title = 'XX区域的获证企业数';

option = {
    backgroundColor:'#FFFFFF',
    title: {
        //text: 'XX区域的获证企业数',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['获证企业数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市','北海市','梧州市','桂林市','柳州市','南宁市']
    },
    series: [
        {
            name: '获证企业数',
            type: 'bar',
            //color:'#6666cc',
            data: [12263,13203,12203,18103,21203,28903,38203,11603,18203, 23489, 29034, 54970, 71744, 80230]
        }
    ]
};
