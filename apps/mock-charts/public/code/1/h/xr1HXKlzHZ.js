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

var data0=[],
    data1=[],
    data2=[];
function runData(){
   //参数调整
    var params={
        fj_dz:0.1,     //房价递增率        参考值：杭州无
        tz_ll:0.13,     //期望年化收益      参考值：余额宝0.04
        fj:200,         //房价(装修在内)    参考值：杭州300，宁波150
        sf:0.3,         //首付              参考值：杭州最低0.3
        dk_ll:0.049,    //贷款利率等额本息  参考值：公积金0.0325，商贷0.049，杭州只能商贷(影响不大)
        dk_nx:30,       //贷款年限          参考值：杭州最高30
        zj_bl:0.04,     //年租金比例        参考值：商品房0.04，酒店公寓0.08
        zj_dz:0,        //租金递增          参考值：可用0.05，由于计算房价递增该项填0
        
        sjall:50,       //总计算年限        参考值：最好比贷款年限高
    }

    params.nfd=f_debx(params.fj*(1-params.sf),params.dk_ll,params.dk_nx)*12;//每年房贷：每月房贷*12


    for(var i=0;i<params.sjall;i++){
        var fj_dn = params.fj * Math.pow(1 + params.fj_dz, i);          //当年房价
        params.zc_fd = params.nfd * (i>30?30:i);                        //共支出房贷,30年后不用还
        params.sy_fz = fj_dn*params.zj_bl*f_dbqh(params.zj_dz,i);       //共收益房租：房价*年租金比例*等比求和

        var shouyi = params.sy_fz-params.zc_fd-params.fj*params.sf;    //第n年的购房投资收益：共收益房租-共支出房贷-首付
        var tz_fz=params.fj*params.sf*Math.pow(1+params.tz_ll,i);       //用首付做理财投资收益
        var tz_fd=params.nfd*f_dbqh(params.tz_ll,i>30?30:i);            //用房贷做理财投资收益
        if(i>30){ tz_fd=tz_fd*Math.pow(1+params.tz_ll,i-30);}           //30年后房贷不用再还，理财投资不再计算每年房贷投入

        data0.push(i);
        data1.push(~~(tz_fz+tz_fd));
        data2.push(~~(shouyi+fj_dn));
    }
}
runData();


var colors = ['#5793f3', '#d14a61', '#675bba'];
option = {
    color: colors,

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['买房投资', '理财投资']
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '买房投资，第' + params.value+"年收益+房价："+params.seriesData[0].data+"万";
                    }
                }
            },
            data: data0
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '理财投资，第' + params.value+"年收益+本金："+params.seriesData[0].data+"万";
                    }
                }
            },
            data:data0
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name:'买房投资',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data: data1
        },
        {
            name:'理财投资',
            type:'line',
            smooth: true,
            data: data2
        }
    ]
};
