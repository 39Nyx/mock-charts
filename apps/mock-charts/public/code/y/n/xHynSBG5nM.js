option = {
    title : {
        text: '各学院招生人数',
        subtext: '2017级'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['学院']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['传媒', '体育', '信息技术', '化学', '历史', '外国语', '政法','教科','数学','文学','旅地','物理','环科','生科','管理','经济','美术','计算机','音乐']
    },
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
 
        {
            name:'人数',
            type:'bar',
            data:[516, 204, 175, 156, 114, 335, 176,381,180,200,210,156,163,145,309,234,375,256,120],
          
            markLine : {
               
            }
        }
    ]
}
