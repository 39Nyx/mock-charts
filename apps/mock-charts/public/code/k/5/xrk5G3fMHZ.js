
//app.title = '买房投资与理财投资回报分析';
//等比数列求和
function f_dbqh(_q,_n){
    if(!_q){return _n;}
    return (Math.pow(1+_q,_n)-1)/_q;
}
//等额本息
function f_debx(_a,_q,_n){//_a:本金  _q:年化 _n:年数
    _q=_q/12;_n=_n*12;
    return (_a*_q*Math.pow(1+_q,_n))/(Math.pow(1+_q,_n)-1);
}
var map = ["首付及贷款","房价","房租"]
var data0=[],
    data1=[],
    data2=[],
    data3=[];
function runData(){
   //参数调整
    var params={
        fj_dz:0.04,     //房价递增率        参考值：杭州无
        tz_ll:0.04,     //期望年化收益      参考值：余额宝0.04，需要比房价递增率高3个点才能持平
        fj:200,         //房价(装修在内)    参考值：杭州300，宁波150
        sf:0.3,         //首付              参考值：杭州最低0.3
        dk_ll:0.049,    //贷款利率等额本息  参考值：公积金0.0325，商贷0.049，杭州只能商贷(影响不大)
        dk_nx:30,       //贷款年限          参考值：杭州最高30
        zj_bl:0.04,     //年租金比例        参考值：商品房0.04，酒店公寓0.08
        zj_dz:0,        //租金递增          参考值：可用0.05，由于计算房价递增该项填0
        sjall:35,       //总计算年限        参考值：最好比贷款年限高
    }

    params.nfd=f_debx(params.fj*(1-params.sf),params.dk_ll,params.dk_nx)*12;//每年房贷：每月房贷*12


    for(var i=0;i<params.sjall;i++){
        var fj_dn = params.fj * Math.pow(1 + params.fj_dz, i);          //当年房价
        params.zc_fd = params.nfd * (i>30?30:i);                        //共支出房贷,30年后不用还
        params.sy_fz = fj_dn*params.zj_bl*f_dbqh(params.zj_dz,i);       //共收益房租：房价*年租金比例*等比求和

        // var shouyi = params.sy_fz-params.zc_fd-params.fj*params.sf;    //第n年的购房投资收益：共收益房租-共支出房贷-首付

        data0.push(i);
        data1.push(~~(-params.zc_fd-params.fj*params.sf));
        data2.push(~~(fj_dn));
        data3.push(~~(params.sy_fz));
    }
}
runData();

option = {
    title: {
        text: '房价构成'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:["首付及贷款","房价","房租"]
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : data0
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'首付及贷款',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:data1
        },
        {
            name:'房价',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:data2
        },
        {
            name:'房租',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:data3
        }
    ]
};
