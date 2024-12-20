option = {

    backgroundColor: '#2c343c',


    title: {

        text: '中国传媒大学2017-2018学年第一学期公选课开设时间对比',

        left: 'center',

        top: 20,

        textStyle: {

            color: '#ccc'

        }

    },


    tooltip : {

        trigger: 'item',

        formatter: "{a} <br/>{b} : {c} ({d}%)"

    },


    visualMap: {

        show: false,

        min: 5,

        max: 21,

        inRange: {

            colorLightness: [0, 1]

        }

    },

    series : [

        {

            name:'访问来源',

            type:'pie',

            radius : '55%',

            center: ['50%', '50%'],

            data:[

                {value:21, name:'星期二'},

                {value:18, name:'星期三'},

                {value:16, name:'星期一'},

                {value:15, name:'星期六'},

                {value:14, name:'星期日'},

                {value:10, name:'星期四'},

                {value:5, name:'星期五'},

            ].sort(function (a, b) { return a.value - b.value; }),

            roseType: 'radius',

            label: {

                normal: {

                    textStyle: {

                        color: 'rgba(255, 255, 255, 0.3)'

                    }

                }

            },

            labelLine: {

                normal: {

                    lineStyle: {

                        color: 'rgba(255, 255, 255, 0.3)'

                    },

                    smooth: 0.2,

                    length: 10,

                    length2: 20

                }

            },

            itemStyle: {

                normal: {

                    color: '#c23531',

                    shadowBlur: 200,

                    shadowColor: 'rgba(0, 0, 0, 0.5)'

                }

            },


            animationType: 'scale',

            animationEasing: 'elasticOut',

            animationDelay: function (idx) {

                return Math.random() * 200;

            }

        }

    ]

};