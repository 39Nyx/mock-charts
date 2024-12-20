app.title = '环形图'

var data = [{
  value: 335,
  name: '直接访问'
}, {
  value: 310,
  name: '邮件营销'
}, {
  value: 234,
  name: '联盟广告'
}, {
  value: 135,
  name: '视频广告'
}, {
  value: 1548,
  name: '搜索引擎'
}]

function translateData (data) {
  let sum = 0
  let count = data.length
  for (let i = 0; i < count; i++) {
    sum += data[i].value
    data[i].itemStyle = {
      normal: {
        borderWidth: 5,
        borderColor: 'white'
      }

    }
  }
  let val = sum / count
  for (let i = 0; i < count; i++) {
    data.push({
      value: val,
      itemStyle: {
        normal: {
        //   color: 'none'
        }
      }
    })
  }
  console.log(data)
  return data
}

option = {
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['10%', '90%'],
      center:['50%','80%'],
      startAngle: -180,
      roseType: 'area',
      label: {
        normal: {
          show: true,
          position: 'inside'
        }
      },
      labelLine: {
        normal: {
          show: true
        }
      },
      data: translateData(data)
    }
  ]
}
