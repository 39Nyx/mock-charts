var getname = ['执行中任务', '已完成任务', '逾期未完成任务'];

var getvalue = [50, 30, 20];

var getbl = [40, 30, 18, 12];

var data = [];
var sum = 0;
for (var i = 0; i < getname.length; i++) {
    sum = sum + getvalue[i];
    data.push({ name: getname[i], value: getvalue[i] });
}

var colorList = ['#1890FF', '#12DDA1', '#FFB026', '#B9A9FF'];

var colorList1 = ['#1183ED', '#00CF92', '#EF9D0F', '#A793FF'];

option = {
    tooltip: {
        trigger: 'item',
        show: false,
    },
    title: {
        text: sum+'个',
        textAlign:'center',
        x: '25%',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#1890ff',
            fontSize: '60',
        },
        subtext:'应完成任务',
        subtextStyle: {
            fontWeight: 'normal',
            color: '#000',
            fontSize: '20',
        },
    },
    legend: {
        type: 'scroll',

        orient: 'vertical',

        height: '88%',

        right: '11%',

        top: 'center',

        icon: 'circle',

        itemWidth: 10,

        itemHeight: 10,

        itemGap: 10,

        data: getname,

        formatter: function (name) {
            for (var i = 0; i < getname.length; i++) {
                if (name == data[i].name) {
                    return '{name|' + name + '}{value|' + getvalue[i] + '个}';
                }
            }
        },

        textStyle: {
            rich: {
                name: {
                    fontSize: 13,

                    fontWeight: 400,

                    width: 50,

                    height: 35,

                    padding: [0, 0, 0, 10],

                    color: '#666666',
                },

                value: {
                    fontSize: 13,
                    fontWeight: 400,
                    width: 50,
                    height: 35,
                    padding: [0, 0, 0, 50],
                    color: '#333333',
                },

                rate: {
                    fontSize: 13,

                    fontWeight: 500,

                    height: 35,

                    width: 55,

                    align: 'left',

                    color: '#666666',
                },
            },
        },
    },

    series: [
        {
            type: 'pie',

            radius: ['35%', '55%'],

            center: ['25%', '50%'],

            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },

            label: {
                normal: {
                    show: false,
                },
            },

            labelLine: {
                normal: {
                    show: false,
                },
            },

            data: data,
        },
        {
            type: 'pie',

            radius: ['30%', '40%'],

            center: ['25%', '50%'],

            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList1[params.dataIndex];
                    },
                },
            },

            label: {
                normal: {
                    show: false,
                },
            },

            labelLine: {
                normal: {
                    show: false,
                },
            },

            data: data,
        },
    ],
};

return option;
