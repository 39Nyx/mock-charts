myChart.showLoading();
var data = {nodes: [
  {name: "移动商城","value": "1342",itemStyle:{
                  normal:{color:'#009944'}}
				  },
  {name: "一级门户","value": "207",itemStyle:{
                  normal:{color:'#009944'}}
				  },
  {name: "直接来源","value": "36",itemStyle:{
                  normal:{color:'#009944'}}
				  },
  {name: "统一搜索","value": "23",itemStyle:{
                  normal:{color:'#009944'}}
				  },
  {name: "未知","value": "12",itemStyle:{
                  normal:{color:'#009944'}}
				  },
  {name: "套餐详情页","value": "1620",itemStyle:{
                  normal:{color:'#ea4d1c'}}
				  },
  {name: "进入订单页","value": "46",itemStyle:{
                  normal:{color:'#ea4d1c'}}},
  {name: "关闭套餐详情页","value": "1132"},
  {name: "跳转移动商城个人中心","value": "11"},
  {name: "跳转移动商城商品列表页","value": "40"},
  {name: "跳转移动商城商品详情页","value": "46"},
  {name: "跳转移动商城非商品页面","value": "345"},
  {name: "确认订购","value": "37",itemStyle:{
                  normal:{color:'#ea4d1c'}}
				  },
  {name: "关闭订单页","value": "9"},
  {name: "Step1流失","value": "1574"},
  {name: "Step2流失","value": "9"},
  {name: "转化成功","value": "37",itemStyle:{
                  normal:{color:'#ea4d1c'}
              }}
  ],
  links: [
  {source:"移动商城", "target":"套餐详情页", "value": "1342"},
  {source:"一级门户", "target":"套餐详情页", "value": "207"},
  {source:"直接来源", "target":"套餐详情页", "value": "36"},
  {source:"统一搜索", "target":"套餐详情页", "value": "23"},
  {source:"未知", "target":"套餐详情页", "value": "12"},
  {source:"套餐详情页", "target":"关闭套餐详情页", "value": "1132" },
  {source:"套餐详情页", "target":"进入订单页", "value": "46",lineStyle: {
	                normal: {
	                    color: '#ea4d1c',
	                    opacity: 0.3
	                }}
				  },
  {source:"套餐详情页", "target":"跳转移动商城个人中心", "value": "11"},
  {source:"套餐详情页", "target":"跳转移动商城商品列表页", "value": "40"},
  {source:"套餐详情页", "target":"跳转移动商城商品详情页", "value": "46"},
  {source:"套餐详情页", "target":"跳转移动商城非商品页面", "value": "345"},
  {source:"进入订单页", "target":"确认订购", "value": "37",lineStyle: {
	                normal: {
	                    color: '#ea4d1c',
	                    opacity: 0.3
	                }}
				  },
  {source:"进入订单页", "target":"关闭订单页", "value": "9"},
  {source:"关闭套餐详情页", "target":"Step1流失", "value": "1132"},
  {source:"跳转移动商城个人中心", "target":"Step1流失", "value": "11"},
  {source:"跳转移动商城商品列表页", "target":"Step1流失", "value": "40"},
  {source:"跳转移动商城商品详情页", "target":"Step1流失", "value": "46"},
  {source:"跳转移动商城非商品页面", "target":"Step1流失", "value": "345"},
  {source:"确认订购", "target":"转化成功", "value": "37",lineStyle: {
	                normal: {
	                    color: '#ea4d1c',
	                    opacity: 0.3
	                }}
				  },
  {source:"关闭订单页", "target":"Step2流失", "value": "9"}
  ]}; 
  myChart.hideLoading();
  myChart.setOption(option = {
  title: {
  text: 'Sankey 桑基图'
  },
  tooltip: {
  trigger: 'item',
  formatter: function(data) 
              {
                 return data.name  + '：'+data.value; //提示框显示信息
               },
  triggerOn: 'mousemove'
},
  color:['#3ca8d3'],
  backgroundColor: '#ffffff)',
  series: [
  {
  type: 'sankey',
  layout:'none',
  data: data.nodes,
  links: data.links,
  itemStyle: {
  normal: {
  borderWidth: 1,
  borderColor: '#aaa'
  }
  },
  lineStyle: {
  normal: {
  curveness: 0.5
  }
  }
  }
  ]
  });