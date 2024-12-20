/*
一些必要的说明——
直方图，区别于柱状图，柱子与柱子之间互相靠的很近。目前echarts中没有直接提供直方图的示例，因而做了这个，参考了
https://blog.csdn.net/a805814077/article/details/110956526（其实基本上是照搬==）

*/
// 数据集，为方便查看和修改，将用作x轴刻度间隔值作为一个数据，柱子的高度作为一个数组
// 需要注意的是dataX的数组是决定柱子在x轴某个数值范围内的，即间隔，为了更好显示直方图，
// 间隔必须统一
const dataX = [[0,1],[1,2],[2,3],[3,4],[4,5]] 
const dataY = [2,5,8,6,7]

const series = []
let max = 0 // x轴最大值
let min = 10 // x轴最小值
let interval = 0 // 柱子之间的间隔

// 组装数据集
const data = dataY.map((item, index) => {
    return dataX[index].concat(item)
})
// 遍历数据集并筛选出其中x轴的最大值和最小值，同时获取x轴的固定刻度间隔（柱子之间的间隔）
data.forEach(item => {
      const x0 = item[0]
      const x1 = item[1]
      interval = x1 - x0
      min = Math.min(min, x0)
      max = Math.max(max, x1)
      return [x0, x1, item[2]]
})
// 这个是核心，
function renderItem(params, api) {
      var yValue = api.value(2) // 意思是取出 dataItem 中的数值。例如 api.value(0) 表示取出当前 dataItem 中第一个维度的数值
      var start = api.coord([api.value(0), yValue]) // 意思是进行坐标转换计算。例如 var point = api.coord([api.value(0), api.value(1)]) 表示 dataItem 中的数值转换成坐标系上的点。
      var size = api.size([api.value(1) - api.value(0), yValue])// 表示得到坐标系上一段数值范围对应的长度。
      var style = api.style() // 得到 series.itemStyle 中定义的样式信息，以及视觉映射的样式信息
      return {
        type: 'rect', // 矩形类型
        shape: {
          x: start[0], // 离x轴原点的距离
          y: start[1],// 离y轴原点的距离
          width: size[0] - 1, // 柱子的宽度
          height: size[1] // 柱子的高度
        },
        style: style
      }
}


const optionSeries = {
  type: 'custom',
  renderItem: renderItem,
  label: {
    show: true,
    position: 'insideTop',
    formatter: (name) => {
      if (name.data && name.data.length > 1) {
        return Number(name.data[2]) > 0 ? name.data[2] : ''
      } else {
        return ''
      }
    }
  },
  encode: {
      // 将data[0] data[1]映射到x轴
    x: [0, 1],
    // 将data[2]映射到y轴
    y: 2,
    // 将data[2]映射到tooltip
    tooltip: 2,
    // 将data[2]映射到label
    label: 2
  },
  data: data
}
series.push(optionSeries)

option = {
    title: {
        text: 'Histogram '
    },
    xAxis: {
        type: 'value',
        interval: interval
    },
    yAxis: {type: 'value',max: 10},
    series: series
};

