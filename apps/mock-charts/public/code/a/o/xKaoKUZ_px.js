//做环形图的本质是 radius: ['内半径', '外半径'] 内半径!=0
const backgroundColor = '#101736';
const title = {
  text: '网络/安全设备',
  textStyle: {
    color: '#fff',
    fontSize: 16,
  },
  padding: 0,
  top: 35,
  left: 'center',
};
const legend = {
  //data，就是取得每个series里面的name属性。
  orient: 'vertical',
  icon: 'circle', //图例形状
  padding: 0,
  bottom: 'center',
  right: 40,
  itemWidth: 14, //小圆点宽度
  itemHeight: 14, // 小圆点高度
  itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
  textStyle: {
    fontSize: 14,
    color: '#ffffff',
  },
};
const tooltip = {
  show: true,
  formatter: '{b}:{d}%',
};
const color = ['#03acd1', '#04cab7', '#03c781', '#fce348', '#fc2d8a', '#0292fe'];
option = {
  backgroundColor,
  color,
  title,
  tooltip,
  legend,
  
  series: [
    {
      name: '网络安全设备',
      type: 'pie',
      center: ['50%', '50%'], //圆心的位置
      top: '2%', //单单指的饼图距离上面的距离，top越大饼图越小
      left: '0%', //单单指的饼图距离左面的距离，会改变饼图的大小
      radius: ['40%', '70%'], //环形图的本质就在这里 [内半径!=0，外半径] 外半径越大，圆越大
       avoidLabelOverlap: false, //做同心圆用到
      clockwise: true, //顺时针排列
      startAngle: 90, //起始角度 影响不大
      //roseType:"", // 实心圆 不能出现roseType这个属性
      
      label: {
        show: false, //false不显示饼图上的标签
        position: 'center', //inside（在饼图上显示）,outside(默认就会出现引导线) center
        formatter: '{b}:{c}',
      },
      
      itemStyle: {
        //每个扇形的设置
        borderColor: 'rgba(0,0,0,.1)', //扇形边框颜色
        borderWidth: 1, //扇形边框大小 要先给borderColor颜色 设置borderWidth才会有效果
       
      },
      data: [
        { value: 1048, name: 'IDS' },
        { value: 735, name: 'VPN' },
        { value: 580, name: '交换机' },
        { value: 484, name: '防火墙' },
        { value: 300, name: ' WAF' },
        { value: 600, name: ' 堡垒机' },
      ].sort((a, b) => b.value - a.value), //数组从大到小排序

      emphasis: {
        scale: true,
        scaleSize: 10,
        //同心圆单独加上的
         label: {
          show: true,
          fontSize: 24,
          fontWeight: 'bold'
        },
         //启用鼠标放上去放大效果，这个挺好的
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
