var equipment = ['男', '女', '未知'];
var project = ['男', '女', '未知'];
var colorList = ['#F8BA4F', '#2DB4FF', '#2F4056', '#2DB4FF', '#F8BA4F', '#2F4056']
option = {
    backgroundColor: '#fff',
    tooltip: {
        formatter: function(param) {
            if (param.data.type == null) {

                return param.data.name + ":" + param.value + '%';
            } else {

                return param.data.type + ":" + param.value + '%';
            }
        }
    },

    series: [{
            name: '整体分类',
            type: 'pie',
            radius: [0, '30%'],
            label: {
                position: 'inner',

            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },

            selectedMode: 'single',
            data: [{
                    value: 70,
                    name: '美团',

                },
                {
                    value: 30,
                    name: '饿了么',

                },
            ]
        },
        {
            name: '招标方式',
            type: 'pie',
            radius: ['40%', '55%'],

            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            label: {
                normal: {
                    formatter: function(params) {

                        if (params.value != 0)
                            return params.data.type + ":" + params.value + '%';
                        else
                            return '';
                    },
                    show: true,

                },

            },

            data: [{
                    value: 35,
                    name: '美团',
                    type: equipment[0],

                },
                {
                    value: 25,
                    name: '美团',
                    type: equipment[1],

                },
                {
                    value: 10,
                    name: '美团',
                    type: equipment[2],

                },
                {
                    value: 20,
                    name: '饿了么',
                    type: project[0],

                },
                {
                    value: 5,
                    name: '饿了么',
                    type: project[1],

                },
                {
                    value: 5,
                    name: '饿了么',
                    type: project[2],

                },



            ]
        }
    ]
};