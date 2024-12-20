  var status = [];
  //var prices = [116,129,135,86,73,85,73,68,92,130,245,139,115,111,309,206,137,128,85,94,71,106,84,93,85,73,83,125,107,82,44,72,106,107,66,91,92,113,107,131,111,64,69,88,77,83,111,57,55,60,44,127,114,86,73,52,69,86,118,56,91,121,127,78,79,46,108,80,79,69,80,105,119,105,55,74,41,62,104,118,121,126,99,92,75,91,94,69,93,124,120,93,26,32,70,89,117,144,111,120,97,108,74,105,127,143,62,80,136,29,91,93,114,45,102,111,93,117,78,76,100,75,169,59,89,91,75,28,47,92,72,149,86,88,104,91,88,55,63,41,85,99,121,96,90,80,116,207,306,283,200,93,49,78,40,74,67,118,196,101,59,83,83,124,57,78,113,172,129,103,75,125,121,204,141,106,146,95,149,71,157,141,197,43,81,109,118,115,92,123,147,59,103,146,137,74,64,67,107,101,79,137,165,81,100,126,56,108,88,78,105,77,105,93,107,128,53,81,128,179,225,116,153,161,149,115,136,101,109,108,86,101,109,139,110,113,130,62,88,105,87,140,116,100,83,102,106,157,131,77,101,148,227,105,155,293,99,57,97,104,117,125,216,149,256,172,113,338,57,48,111,87,175,186,201,76,131,127,128,152,144,162,500,358,128,54,57,54,80,71,73,139,224,107,150,180,77,95,194,143]
 // var balances = [205,129,64,61,79,121,130,150,205,154,81,140,119,156,72,108,124,94,157,100,158,277,332,303,238,500,99,93,104,74,68,90,114,142,126,185,402,189,189,189,112,137,158,158,116,132,110,82,56,54,71,101,57,88,99,84,139,132,141,159,131,180,164,134,163,105,74,50,60,82,111,89,81,76,70,74,99,91,113,93,69,74,75,108,115,86,67,68,74,69,95,99,92,84,77,69,62,83,101,98,89,82,105,79,48,119,126,44,42,86,68,93,89,76,54,53,35,65,108,114,90,63,79,102,100,107,81,79,116,98,96,94,63,39,81,73,66,52,64,61,83,85,99,97,93,86,105,98,109,92,68,92,72,64,88,97,102,103,120,94,95,93,56,98,81,100,75,84,91,70,96,128,92,107,95,63,115,69,47,86,122,104,122,49,36,83,107,126,126,78,72,76,87,143,259,183,276,232,167,105,129,140,61,85,155,38,106,134,57,51,68,129,158,85,121,161,94,58,57,71,105,66,117,87,88,131,151,310,161,23,52,82,128,115,63,102,96,107,89,59,100,136,137,119,112,186,192,83,97,113,89,106,119,62,79,58,61,64,108,101,82,85,98,132,88,97,116,111,81,78,138,100,157,349,196,190,100,103,160,97,103,123,137,268,52,44,66,106,94,96,58,62,56,62,109,96,95,126,161,138]
  

var prices = [Math.random() * 300];
var balances = [Math.random() * 300];
  
  for(var i=1; i< 300; i++) {
     var price = Math.abs((Math.random() - 0.5) * 20 + prices[i - 1])
     var balance = Math.abs((Math.random() - 0.5) * 20 + balances[i - 1])
    prices.push(price)
    balances.push(balance)
      status.push({
     timestamp: Date.now() - 24 * 3600 * 1000 * 300 + 24 * 3600 * 1000 * i,
     price:price,
     balance: balance
  })
  }
  
  
  const getXLabel = (t) => {
    const time = new Date(t)
    return time.getMonth() + 1 + '-' + time.getDate()
  }

  const priceData = status.map(s => {
    return {
      name: getXLabel(s.timestamp),
      value: [s.timestamp, s.price],
    }
  })

  const balanceData = status.map(s => {
    return {
      name: getXLabel(s.timestamp),
      value: [s.timestamp, s.balance],
    }
  })
  
console.log(priceData)
console.log(balanceData)

var option = {
    backgroundColor: '#fafcfd',
    tooltip: {
         showContent: true,
      alwaysShowContent: true,
       position:function (point, params, dom, rect, size) { return [size.viewSize[0]/2 -size.contentSize[0]/2, '10%']; },
      triggerOn: 'click',
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0)',
      textStyle: {
        color: '#333',
        width: 300,
      },
      axisPointer: {
          snap: true,
        lineStyle: {
          color: '#71B7F1',
        },
      }
    },
    legend: {
      icon: 'circle',
      show: true,
      itemWidth: 5,
      itemHeight: 5,
      itemGap: 13,
      data: ['price', 'balance'],
      selectedMode: true,
      right: '1%',
      top: '4%',
      textStyle: {
        fontSize: 12,
        color: '#333',
      }
    },
    grid: {
      show: false,
      left: 2,
      right: 2,
      bottom: 30,
      containLabel: false
    },
    dataZoom: [
      {
        id: 'dataZoomX',
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 100,
        filterMode: 'none',
        bottom: 0,
      }],
    xAxis: [{
      type: 'time',
      boundaryGap: ['0%', '0%'],
      // minInterval: 1,
      // maxInterval: 3600 * 24 * 1000 * 7,
      splitLine: {
        show: false,
      },
      axisTick: {
        alignWithLabel: true,
        interval: 1,
        length: 2,
        lineStyle: {
          opacity: 0.5,
          color: '#57617B',
        },
      },
      axisLabel: {
        interval: 1,
        margin: 8,
        showMinLabel: false,
        showMaxLabel: false,
        color: '#c2c8cc',
        fontStyle: 'italic',
        fontWeight: 'lighter',
        fontSize: 11,
        formatter: function(value) {var d = new Date(value);return [d.getMonth() + 1, d.getDate()].join('/');},
      },
    }],
    yAxis: [{
      type: 'value',
      name: '',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    }],
    series: [{
      name: 'price',
      type: 'line',
      smooth: true,
      // smoothMonotone: 'x',
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      // sampling: 'average',
      animation: true,
      lineStyle: {
        normal: {
          width: 1,
        },
      },
      itemStyle: {
        normal: {
          color: '#83C4F1',
          borderColor: 'rgba(137,189,2,0.27)',
          borderWidth: 0,
        },
      },
      data: priceData,
    }, {
      name: 'balance',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      // sampling: 'average',
      animation: true,
      lineStyle: {
        normal: {
          width: 1,
        },
      },
      itemStyle: {
        normal: {
          color: '#CBADFB',
          borderColor: 'rgba(0,136,212,0.2)',
          borderWidth: 0,

        },
      },
      data: balanceData
    }]
  }

