var sum=5432;
var num=578;
var v=num/sum*100;

function toDecimal2(x) {
var f = parseFloat(x);      
if (isNaN(f)) {   
 return false;     
}          
var y = Math.round(x*100)/100;  
var s = y.toString();       
var rs = s.indexOf('.');      
if (rs < 0) {   
 rs = s.length;      
 s += '.';   
            }       
while (s.length <= rs + 2) {   
 s += '0';       
}            
return s;   
} 
var f =toDecimal2(v);
option = {
    backgroundColor:'#ffffff',
    title : {
        text: '检查企业违规率',
    },
    tooltip : {
        formatter: "{a} <br/>{b} = {c}%"
    },
    series: [{
        name: '违规率计算公式=（企业违规数/检查数）*100%',
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "80%",
        center: ["50%", "65%"],
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [[0.3, '#C23531'],[0.7, '#63869e'],[1, '#91c7a1']]
            }
        },
 
       itemStyle: {
            normal: {
                shadowBlur: 10
            }
        },
        detail: {formatter:'{value}%'},
        data: [{value:f , name: '违规率'}]
    }]
}


