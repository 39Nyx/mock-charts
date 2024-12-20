app.title = '坐标轴刻度与标签对齐';

option = {
    title: {
        text: '外地参会人员入住五星酒店分布',
        left: 'center', //标题位置
        textStyle: {
            fontSize: 40,
            fontWeight: 'bolder'
                //color: '#333'          // 主标题文字颜色
        }
    },
        toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    color: ['red'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['20170305', '20170306', '20170307'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '40%',
            data:[32,18,14],
             label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {         // 默认使用全局文本样式，详见TEXTSTYLE
                        color: 'white',
                        fontSize: 25
                    }
                }}
            
        }
    ]
};
