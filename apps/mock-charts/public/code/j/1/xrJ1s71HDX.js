var data = {
    "abnormalRoomCnt": 0,
    "finishedCourseCnt": 0,
    "joinUserCnt": 0,
    "livingCourseCnt": 2,
    "masterRoomCnt": 2,
    "planCourseCnt": 38,
    "receiveRoomCnt": 1
}
var textData, receiveRoomCnt, masterRoomCnt, faultRoomCnt;

receiveRoomCnt = data.receiveRoomCnt;
masterRoomCnt = data.masterRoomCnt;
faultRoomCnt = data.abnormalRoomCnt;
textData = receiveRoomCnt + masterRoomCnt;

var faultMax = Math.max.call(receiveRoomCnt, masterRoomCnt, faultRoomCnt);
faultMax = faultMax * 1.2;
var circleData = function(val) {
    let total = faultMax;
    let count = val;
    let shadeCount;
    let noneCount = faultMax * 0.25;
    if (val > total) {
        count = total;
        shadeCount = 0;
    } else if (val == 0) {
        total = 1;
        shadeCount = total * 0.75;
        count = 0;
        noneCount = total * 0.25
    } else {
        shadeCount = total - val;
    }
    return {
        count: count,
        shadeCount: shadeCount,
        noneCount: noneCount,
    }
};

placeHolderStyle = {
    normal: {
        borderWidth: 5,
        shadowBlur: 40,
        borderColor: "#132235",
        shadowColor: 'rgba(0, 0, 0, 0)', //边框阴影
        color: "#132235"
    }
};

option = {
     backgroundColor:'#0B1A32',
    title: {
        show: true,
        text: textData + '间正在直播',
        right: 20,
        top: 40,
        textStyle: {
            fontSize: 16,
            color: '#19a3dd'
        }
    },
    color: ['#1c68e5', '#11a754'],
    tooltip: {
        show: false,
        trigger: 'item'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '13%',
        top: '40%',
        itemWidth: 10,
        itemHeight: 5,
        itemGap: 10,
        textStyle: {
            color: ['#1bbcfa', '#5beca0'],
            fontSize: 12
        },
        data: ['主讲教室 ' + masterRoomCnt, '接入教室 ' + receiveRoomCnt]
    },
    series: [{
        name: '主讲教室 ' + masterRoomCnt,
        type: 'pie',
        clockWise: false,
        radius: ['51%', '55%'],
        center: ['30%', '50%'],
        hoverAnimation: false, //鼠标移入变大
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#1d69f1'
                }, {
                    offset: 1,
                    color: '#1bbcfa'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
                value: circleData(masterRoomCnt).count,
                name: '主讲教室'
            },
            {
                value: circleData(masterRoomCnt).shadeCount,
                name: '',
                itemStyle: placeHolderStyle
            },
            {
                value: circleData(masterRoomCnt).noneCount,
                name: '',
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: 'none'
                    }
                }
            }
        ]
    }, {
        name: '接入教室 ' + receiveRoomCnt,
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: ['31%', '35%'],
        center: ['30%', '50%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#20a65a'
                }, {
                    offset: 1,
                    color: '#5beca0'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
                value: circleData(receiveRoomCnt).count,
                name: '接入教室'
            },
            {
                value: circleData(receiveRoomCnt).shadeCount,
                name: '',
                itemStyle: placeHolderStyle
            },
            {
                value: circleData(receiveRoomCnt).noneCount,
                name: '',
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: 'none'
                    }
                }
            }
        ]
    }]
};