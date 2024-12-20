option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品生产监管情况',
        subtext: '事项办理类型发展趋势'
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
        data: ['单位办理事项排名'],
        left:'27%'
    },
    grid: {
        left: '1%',
        right: '40%',
        bottom: '40%',
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
            name: '单位办理事项排名',
            
            type: 'bar',
            data: [9263,13203,14203,18103,21203,28903,38203,41603,48203, 53489, 59034, 64970, 71744, 80230]
        }
    ]
};
