option = {
    title:{
        text:'折线柱状图',
    },
  color: ['#23cbe5', '#ec561b', '#ffa500', '#dddf00', '#b23aee', '#50b332'],
  xAxis:{
      type:'category',
      data:['一月','二月','三月','四月','五月','六月'],
  },
  yAxis:{
      name:'销量',
     type:'value',
  },
   series:[
       {
        name:'1',
       type:'bar',
       data:[12,45,65,45,78,65],
   },
   {   name:'2',
       type:'line',
       lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
       data:[15,15,45,65,45,21],
   },
   ]

};