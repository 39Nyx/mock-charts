var data = [{
    "value": 501,
    "name": "非法借贷讨债"
}, {
    "value": 1154,
    "name": "涉黄信息"
}, {
    "value": 398,
    "name": "涉赌信息"
}, {
    "value": 216,
    "name": "村霸乡霸"
}, {
    "value": 450,
    "name": "房屋纠纷"
}, {
    "value": 110,
    "name": "医闹纠纷"
}, {
    "value": 340,
    "name": "招工诈骗"
}, {
    "value": 38,
    "name": "强买强卖"
}, {
    "value": 52,
    "name": "行霸市霸"
}, {
    "value": 33,
    "name": "私挖滥采"
}, {
    "value": 45,
    "name": "票贩子"
}, {
    "value": 0,
    "unfinished": true,
    "name": "涉黄敲诈"
}, {
    "value": 0,
    "unfinished": true,
    "name": "网络涉黄"
}, {
    "value": 0,
    "unfinished": true,
    "name": "黑物业、黑保安"
}, {
    "value": 0,
    "unfinished": true,
    "name": "非法集资"
}, {
    "value": 0,
    "unfinished": true,
    "name": "套路贷"
}, {
    "value": 0,
    "unfinished": true,
    "name": "黑村官"
}, {
    "value": 0,
    "unfinished": true,
    "name": "组织策划上访"
}, {
    "value": 0,
    "unfinished": true,
    "name": "酒托吧托"
}, {
    "value": 0,
    "unfinished": true,
    "name": "黑旅游"
}, {
    "value": 0,
    "unfinished": true,
    "name": "号贩子"
}, {
    "value": 0,
    "unfinished": true,
    "name": "黑物流"
}, {
    "value": 0,
    "unfinished": true,
    "name": "黑中介"
}]
var dataOne = data.filter(function(row) {
    return !row.unfinished
})
var dataTwo = data.filter(function(row) {
    return row.unfinished
})

var selectedObj = {}
dataTwo.forEach(function(row) {
    selectedObj[row.name] = false
})
option = {
    tooltip: {
        trigger: 'item'
    },
    legend: [{
        orient: 'vertical',
        left: 0,
        data: dataOne.map(function(row) {
            return row.name
        })
    }, {
        orient: 'vertical',
        right: 0,
        selectedMode: false,
        selected: selectedObj,
        data: dataTwo.map(function(row) {
            return row.name
        })
    }],
    series: [{
        name: '二类占比',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: data
    }]
};