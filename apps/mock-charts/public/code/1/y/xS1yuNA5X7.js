var data =[{"value":261,"name":"A关区"},{"value":200,"name":"B关区"},{"value":180,"name":"C关区"},{"value":170,"name":"D关区"},{"value":160,"name":"E关区"},{"value":150,"name":"F关区"},{"value":140,"name":"G关区"},{"value":130,"name":"H关区"},{"value":120,"name":"I关区"}];
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