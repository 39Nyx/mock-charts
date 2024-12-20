$('<div class="back">返回</div>').appendTo(
    $('#chart-panel')
);
$('.back').css({
    'position': 'absolute',
    'left': '17px',
    'top': '25px',
    'color': 'black',
    'font-size': '15px',
    'cursor': 'pointer',
    'z-index': '100'
})
$('.back').click(function() {
    if (parentInfo.length === 1) {
        return;
    }
    parentInfo.pop()
    getRealData(parentInfo[parentInfo.length - 1].code)
})


var parentJson = null
var parentInfo = [{
    code: 1
}]
function echartsMapClick(params) {
    //如果当前是最后一级，那就直接return
    if (parentInfo.slice(-1)[0].code == params.data.code) {
        return
    }
    let data = params.data
    parentInfo.push({
        code: data.code
    })
    getRealData(data.code)
}
//code写死 具体业务可自己拼入
function getRealData(code){
    let mockData = []
    if(code === 1){
        mockData = [
            {value: 1048, name: '搜索引擎',code:2},
            {value: 735, name: '直接访问',code:2},
            {value: 580, name: '邮件营销',code:2},
            {value: 484, name: '联盟广告',code:2},
            {value: 300, name: '视频广告',code:2}
        ]
    }
    if(code === 2){
        mockData = [
            {value: 33, name: '泰罗',code: 3},
            {value: 2222, name: '杰克',code: 3},
            {value: 122, name: '赛文',code: 3},
            {value: 1133, name: '迪迦',code: 3},
            {value: 800, name: '艾迪',code: 3}
        ]
    }
    if(code === 3){
        mockData = [
            {value: 367, name: '大力一号',code: 3},
            {value: 333, name: '葫芦娃',code: 3},
            {value: 389, name: '悟空',code: 3},
            {value: 368, name: '猪八戒',code: 3},
            {value: 359, name: '金刚',code: 3}
        ]
    }
    initEcharts(mockData);
}
//第一次渲染数据
getRealData(parentInfo[0].code);
function initEcharts(newData){
    myChart.setOption({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        top: '5%',
        left: 'center',
    },
    series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: newData
            }
        ]
    },true)
    //点击前解绑，防止点击事件触发多次
    myChart.off('click');
    myChart.on('click', echartsMapClick);
}
