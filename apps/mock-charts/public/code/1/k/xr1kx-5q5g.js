//按梯度进行折扣，人数越多，折扣越大
//默认参数为 0，表示未初始化
var price = null, //商家设定，商品的零售价。
    orderMaxLimit = null, //商家设定，最大允许合买量。(库存)
    floorPrice = null, //商家设定，最大允许合买量最低售价。
    stepSize = 1, //商家设定，台阶设定值。每阶长度。
    //----------------------------------------------------
    maxStepNumber = null, //最大台阶数，【公式计算】
    setpRate = null, //台阶价格级差。【公式计算】
    orderAmount = null, //定单总量。【后台实时统计】
    currentPrice = null, //当前适用动态售价，当前成交价。【公式计算】
    currenStep = null, //当前合买量所属台阶数。【公式计算】
    unitName = '件', //商品单位
    //----------------------------------------------------
    priceList = [],
    orderList = [],
    currentPriceList = [],
    currentOrderList = [];

//初始化参数：商定设定数据
price = 200;
orderMaxLimit = 60;
floorPrice = 120.00;
stepSize = 6;
orderAmount = 20;

topLable = false;
bottomLable = false;
//将当前价格数组，细分成每一阶的值，用于表现进度
function getProgress(amount, dataList, step) {
    var arr = [];
    for (var i = 0; i <= amount; i++) {
        arr.push([i, dataList[Math.floor(i / step)]]);
    }
    return arr;
}

//
function getBg(amount, dataList, step) {
    var arr = [];
    for (var i = 0; i <= amount; i += (stepSize + stepSize / 2)) {
        arr.push([i, dataList[Math.floor(i / step)]]);
    }
    return arr;
}
//console.debug(getBgMarkPoint(orderAmount, priceList, stepSize));
//
function getBgMarkPoint(amount, dataList, step) {
    var arr = [];
    for (var i = 0; i <= amount; i += stepSize) {
        arr.push([i + stepSize / 2, dataList[Math.floor(i / step)]]);
    }
    return arr;
}
/**
 * 计算当前价格
 * price    单个商品售价
 * orderCount   订单总量
 * floorPrice   最低价售价
 * stepSize     台阶设定值。每 stepSize 件为一级
 **/
function getCurrentPrice(price, orderCount, floorPrice, stepSize) {
    //如果订单量大于上限，按上限算
    orderCount = orderCount > orderMaxLimit ? orderMaxLimit : orderCount;
    //最大台阶数 ＝ （最大允许合买量 ÷ 台阶设定值）- 1
    var maxStepNumber = Math.ceil(orderMaxLimit / stepSize - 1);
    //台阶价格级差＝（单个商品售价－最大允许合买量最低售价）÷（最大台阶数）
    var setpRate = (price - floorPrice) / maxStepNumber; //.toFixed(4);
    //当前合买所属台阶 = 当前合买量 ÷ 台阶设定值
    var currenStep = Math.floor(orderCount / stepSize);
    //当前适用动态售价＝单个售价－（实际合买台阶数×台阶适应极差）
    var currentPrice = (price - (currenStep * setpRate)).toFixed(2);
    //不得低于最低价。
    currentPrice = currentPrice < floorPrice ? floorPrice : currentPrice;
    return currentPrice;
}
/**
 * 生成价格梯度表
 * price    单个商品售价
 * orderCount   订单总量
 * floorPrice   最低价售价
 * stepSize     台阶设定值。每 stepSize 件为一级
 **/
function getPriceList(price, orderCount, floorPrice, stepSize) {
    //如果订单量大于上限，按上限算
    orderCount = orderCount > orderMaxLimit ? orderMaxLimit : orderCount;

    var arr = [];
    var maxStepNumber = Math.floor(orderCount / stepSize - 1);
    for (var i = 0; i <= maxStepNumber; i++) {
        arr.push(getCurrentPrice(price, i * stepSize, floorPrice, stepSize));
        orderCount -= stepSize;
    }
    if (orderCount > 0) {
        arr.push(getCurrentPrice(price, maxStepNumber + 1, floorPrice, stepSize) / orderCount);
    }
    return arr;
}
/**
 * 生成订单梯度表
 * orderCount   订单总量
 * stepSize     台阶设定值。每 stepSize 件为一级
 **/
function getOrderList(orderCount, stepSize) {
    var arr = [];
    var maxStepNumber = Math.ceil(orderCount / stepSize - 1);
    for (var i = 0; i <= maxStepNumber; i++) {
        arr.push(i * stepSize + stepSize);
    }
    return arr;
}

/**
 * 生成当前订单人数列表
 * orderCount   订单总量
 * stepSize     台阶设定值。每 stepSize 件为一级
 **/
function getCurrentOrderList(orderCount, orderList, stepSize) {
    var arr = [];
    var maxStepNumber = Math.ceil(orderCount / stepSize - 1);
    for (var i = 0; i <= maxStepNumber; i++) {
        // orderCount -= orderList[i];
        if (orderCount - orderList[i] >= 0) {
            arr.push(i * stepSize + stepSize);
        } else {
            arr.push(orderCount % orderList[i]);
        }
    }
    return arr;
}

function getCurrentPriceList(priceList, orderList, currentOrderList, stepSize) {
    var arr = [],
        len = currentOrderList.length;
    for (var i = 0; i < len; i++) {
        if (orderList[i] == currentOrderList[i]) {
            arr.push(priceList[i]);
        } else {
            arr.push(priceList[i] - priceList[i] * (orderList[i] - currentOrderList[i]) / stepSize);
        }
    }
    return arr;
}

//价格数据 [下单人数，对应价格]
// var priceList = [50, 44, 38, 25, 20, 12, 7],
//     currentPriceList = [50, 44, 38, 25, 15, null, null],

//当前价格
currentPrice = getCurrentPrice(price, orderAmount, floorPrice, stepSize);

var priceList = getPriceList(price, orderMaxLimit, floorPrice, stepSize),
    orderList = getOrderList(orderMaxLimit, stepSize),
    currentOrderList = getCurrentOrderList(orderAmount, orderList, stepSize),
    currentPriceList = getCurrentPriceList(priceList, orderList, currentOrderList, stepSize),
    currentProgress = getProgress(orderAmount, priceList, stepSize),
    markPointList = getBgMarkPoint(orderMaxLimit, priceList, stepSize);
// currentPriceList = [6, 12, 18, 24, 5];

option = {
    title: {
        text: '当前成交价：' + currentPrice + '￥',
        left: 'center',
        textStyle: {
            color: 'red',
            fontWeight: 'bolder',
            fontSize: 20
        },
        subtext: '人数越多，价格越低'
    },
    tooltip: {
        trigger: 'axis',
        enterable: true, //可进入tips
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        // formatter: function(params, ticket, callback) {
        //     if (params[0].value[1] === undefined) {
        //         return '';
        //     }
        //     // console.debug(params);
        //     var str = '';
        //     var num = orderList[Math.floor(params[0].dataIndex / stepSize)];
        //     var maxStepNumber = Math.ceil(orderMaxLimit / stepSize - 1);
        //     if (num <= stepSize) {
        //         str = (num - 1) + unitName + '以内</br>原价'; //+ params[0].value[1] + '￥';
        //     } else if (num / stepSize > maxStepNumber) {
        //         str = '超过' + (num - stepSize) + unitName + '</br>统统' + params[0].value[1] + '￥';
        //         //str = 'maxStepNumberum '+ maxStepNumber + ' num '+num + '单' + params[0].value[1] + '￥';
        //     } else {
        //         str = '满' + (num - stepSize) + unitName + '</br>每' + unitName + params[0].value[1] + '￥'
        //     }
        //     //str = '满' + orderList[Math.floor(params[0].dataIndex / stepSize)] + '单</br>' + params[0].value[1] + '￥'
        //     return str;
        // }
    },
    backgroundColor:'rgba(255,255,60,0.5)',
    xAxis: {
        data: orderList,
        boundaryGap: false,
    },
    yAxis: {
        type: 'value'
    },

    series: [{
        type: 'line',
        step: 'end',
        data: orderList,
        // stack: 'x',
        areaStyle: {
            normal: {}
        },
    }, {
        type: 'line',
        step: 'end',
        data: priceList,
        z:1,
        // stack: 'x',
        areaStyle: {
            normal: {}
        },
    }, ]
};

var obj = document.getElementById('chart-panel');
obj.style.cssText = "border-radius: 10px;"
console.debug(document.getElementById('chart-panel'));


