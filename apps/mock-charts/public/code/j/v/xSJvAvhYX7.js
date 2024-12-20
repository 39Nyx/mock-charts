var data =[{"value":261,"name":"A采购商"},{"value":200,"name":"B采购商"},{"value":180,"name":"C采购商"},{"value":170,"name":"D采购商"},{"value":160,"name":"E采购商"},{"value":150,"name":"F采购商"},{"value":140,"name":"G采购商"},{"value":130,"name":"H采购商"},{"value":120,"name":"I采购商"},{"value":110,"name":"J采购商"},{"value":100,"name":"K采购商"},{"value":90,"name":"L采购商"},{"value":80,"name":"M采购商"},{"value":70,"name":"N采购商"},{"value":60,"name":"O采购商"},{"value":50,"name":"P采购商"},{"value":40,"name":"Q采购商"},{"value":30,"name":"R采购商"},{"value":20,"name":"S采购商"},{"value":10,"name":"T采购商"}];
var count_num = 0;
for (var m  in data){
    count_num = count_num +data[m]['value']
}
/*for (var n  in data){
    data[n]['name'] = data[n]['name'] + ' '+((data[n]['value']/count_num)*100).toFixed(1) +'%'
}*/

option = {
    backgroundColor: "#fff",
    title : {
        text: '“一带一路”沿线省区市关注领域',
        subtext:'',
        x:'center',
        top:'30',
        textStyle: {
            color: "#fff",
        }
    },
    //显示series中信息，提示框组件
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series : [
        {
            type: 'pie',    //图表类型，柱状图：bar
            //饼图：pie  (南丁格尔图在series中加上roseType:’angle’)移开后不显示原来信息
            radius : '55%',    //半径
            center: ['50%', '50%'],
            label:{formatter:"{b}+{d}%"},
            data:data,
            itemStyle: {  //itemStyle有正常显示：normal，有鼠标hover的高亮显示：emphasis
                emphasis: {  //normal显示阴影,与shadow有关的都是阴影的设置
                    shadowBlur: 10,  //阴影大小
                    shadowOffsetX: 0,  //阴影水平方向上的偏移
                    shadowColor: 'rgba(0, 0, 0, 0.5)'  //阴影颜色
                }
            }
        }
    ]
};