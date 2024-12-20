option = {

    backgroundColor: '#F5F5F5',

    title: {

        text: '中国传媒大学2017-2018学年第一学期公选课课容量与学分对比',

        left: 'center',

        top: 0,

        textStyle: {

            color: '#999'

        }

    },

    tooltip: {

        trigger: 'axis',


        axisPointer: {

            type: 'cross',

            crossStyle: {

                color: '#999'

            }

        }

    },

    toolbox: {

        feature: {

            dataView: {show: true, readOnly: false},

            magicType: {show: true, type: ['line', 'bar']},

            restore: {show: true},

            saveAsImage: {show: true}

        }

    },

    legend: {

        data:['蒸发量','平均温度']

    },

    xAxis: [

        {

            type: 'category',

            data: ['健康与教育与体育','经济与管理','科学技术类','人文社科类','外语类','艺术类'],

            axisPointer: {

                type: 'shadow'

            }

        }

    ],

    yAxis: [

        {

            type: 'value',

            name: '课容量',

            min: 0,

            max: 90,

            interval: 30,

            axisLabel: {

                formatter: '{value} 人'

            }

        },

        {

            type: 'value',

            name: '学分',

            min: 1.5,

            max: 3,

            interval: 0.5,

            axisLabel: {

                formatter: '{value} 分'

            }

        }

    ],

    series: [

        {

            name:'平均客容量',

            type:'bar',

            data:[67.89, 60.5, 81.83, 73.21, 51.67, 67.30]

        },

        {

            name:'平均学分',

            type:'line',

            yAxisIndex: 1,

            data:[1.5263, 1.8000, 1.8333, 1.8929, 2.0000, 1.9630]

        }

    ]

};