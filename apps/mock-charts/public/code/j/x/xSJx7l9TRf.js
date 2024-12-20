/*按照5个成员的格式展现，成员1 成员2 成员3 成员4 成员5*/
var member = ['李**','孙*','李**','张*','李小*','李亚*'];
var physical_type = ['步行','跑步','保健运动','平衡训练','摸高运动'];
var walk_data = [30,23,35,30,35];
var run_data = [15, 10, 2, 2, 30];
var healthkeep_data = [15,12,20,25,3];
var balance_data = [5,5,16,20,2];
var hightouch_data =[5,2,0,0,15];
var phyData = [walk_data,run_data,healthkeep_data,balance_data,hightouch_data];

option = {
    title: {
        text: '不同运动项目的成员使用呈现'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center',
        data:physical_type
    },
    radar: [
        {
            //步行运动
            indicator: [
                {text: member[0], max: 40},
                {text: member[1], max: 40},
                {text: member[2], max: 40},
                {text: member[3], max: 40},
                {text: member[3], max: 40}
            ],
            center: ['35%','25%'],
            radius: 100
        },
        {
            //跑步运动
            indicator: [
                {text: member[0], max: 40},
                {text: member[1], max: 40},
                {text: member[2], max: 40},
                {text: member[3], max: 40},
                {text: member[3], max: 40}
            ],
            center: ['65%','25%'],
            radius: 100
        },
        {
            //保健运动
            indicator: [
                {text: member[0], max: 30},
                {text: member[1], max: 30},
                {text: member[2], max: 30},
                {text: member[3], max: 30},
                {text: member[4], max: 30}
            ],
            radius: 100,
            center: ['50%','55%'],
        },
        {
            //平衡训练
            indicator: [
                {text: member[0], max: 30},
                {text: member[1], max: 30},
                {text: member[2], max: 30},
                {text: member[3], max: 30},
                {text: member[4], max: 30}
            ],
            radius: 100,
            center: ['35%','85%'],
        },
        {
            //摸高运动
            indicator: [
                {text: member[0], max: 20},
                {text: member[1], max: 20},
                {text: member[2], max: 20},
                {text: member[3], max: 20},
                {text: member[4], max: 20}
            ],
            radius: 100,
            center: ['65%','85%'],
        },
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: phyData[0],
                    name: physical_type[0]
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 1,
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: phyData[1],
                    name: physical_type[1]
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 2,
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: phyData[2],
                    name: physical_type[2]
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 3,
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: phyData[3],
                    name: physical_type[3]
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 4,
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: phyData[4],
                    name: physical_type[4]
                }
            ]
        },
    ]
};