var data_20 = [[2.36601376098,0.613174667541],[2.07413357974,1.03291014437],[2.0759426031,1.03492473857],[1.64632914408,1.26454890169],[1.64336615192,1.25607842695],[1.11939163859,1.37635411403],[1.11606971723,1.3691305454],[0.46448405193,1.87445455658],[0.46448405193,1.87445455658],[-0.10478005237,1.94321225777],[-0.104780818565,1.94322532816],[-0.830554378946,1.76764105929],[-0.830554378946,1.76764105929],[-1.48325148253,-0.312975166971],[-1.48325148253,-0.312975166971],[-0.580869257911,-0.896223363564],[-0.580869257911,-0.896223363564],[-0.03747018941,-0.859757666697],[-0.03747018941,-0.859757666697],[0.798576581072,-0.625351728944],[0.798576581072,-0.625351728944],[1.54679282245,-1.21807188309],[1.54679282245,-1.21807188309],[2.17845666287,-0.966810283968],[2.17845666287,-0.966810283968],[2.46669793703,-0.3416118672],[2.46437123801,-0.341052367729],[2.48897772812,0.164055706401],[2.48929667506,0.164091144951],[2.36455295403,0.612494033736]];
var data_100 = [[-0.605411134297,-0.144593666554],[-0.326721621794,0.23773201225],[-0.329376978812,0.241146042702],[-0.148621112888,0.301154488693],[-0.148621112888,0.301154488693],[0.0577393872108,0.0120680950543],[0.0577393872108,0.0120680950543],[-0.121779403907,-0.243901755025],[-0.123642357951,-0.239067710479],[-0.605411134297,-0.144593666554]];
var data_40 = [[0.335173811418,-0.675254608111],[-0.748243856152,-0.788042007685],[-0.916917120513,-0.679021268393],[-0.859618505559,0.916178836001],[-0.859618505559,0.916178836001],[-0.580304067204,1.54057070831],[-0.568241620145,1.52392981419],[0.240983975018,1.64547377031],[0.244143850386,1.65458164637],[1.03160809827,0.781256790052],[1.03160809827,0.781256790052],[1.47660144698,0.989874539911],[1.47660144698,0.989874539911],[2.01445076271,0.682824001489],[2.00646148739,0.675833385583],[2.46443303983,-0.341711461756],[2.46443303983,-0.341711461756],[1.69204799705,-0.848039274707],[1.69287326411,-0.852288522089],[1.34206735201,-0.775191333094],[1.34206735201,-0.775191333094],[0.842644625253,-0.358782207152],[0.842644625253,-0.358782207152],[0.255190945484,-0.468791244855],[0.255190945484,-0.468791244855],[0.335173811418,-0.675254608111]];
var data_60_1 = [[1.95051045461,0.590458260229],[1.26473215651,0.588773190557],[1.26473215651,0.588773190557],[0.873855855885,-0.384805534827],[1.0558892042,-0.536581462116],[1.67181693931,-0.557082514875],[1.67098173073,-0.554456247912],[2.00415238142,-0.313002092604],[2.00415238142,-0.313002092604],[1.95051045461,0.590458260229]];
var data_60_2 = [[0.141608712389,-0.565501361313],[0.565671598003,-0.172151742817],[0.565671598003,-0.172151742817],[0.409225411615,0.570208125791],[0.424875249601,0.572500149307],[0.35330154864,1.05174976038],[0.35330154864,1.05174976038],[0.0105391225971,1.38133328405],[0.0105391225971,1.38133328405],[-0.440064031463,1.17588314098],[-0.438414503544,1.17393427788],[-0.625957310597,0.90528728194],[-0.625957310597,0.90528728194],[-0.754102778421,0.361572804846],[-0.761296861149,0.362716168205],[-0.799330438432,-0.30141216374],[-0.799330438432,-0.30141216374],[-0.464316305412,-0.633831317111],[-0.464316305412,-0.633831317111],[0.135282460579,-0.551114996086]];
var data_80_1 = [[1.70304965767,0.0851317332682],[1.68489390503,-0.104665125141],[1.69081720257,-0.10754496041],[1.58296989393,-0.196074333424],[1.58352071153,-0.198063396975],[1.42757214978,-0.16962929188],[1.43809970826,-0.159235842429],[1.35905205999,0.0994766722308],[1.35905205999,0.0994766722308],[1.56158740106,0.221536575219],[1.56125339016,0.218122241607],[1.71325617876,0.0887680646677]];
var data_80_2 = [[-0.783780244111,-0.0298803922508],[-0.400460719735,0.74298998974],[-0.400460719735,0.74298998974],[-0.0214393436632,0.96390036985],[-0.0214393436632,0.96390036985],[0.225721164425,0.292638187269],[0.241976028695,0.297351493637],[0.294558632626,-0.0964528668292],[0.311198417407,-0.100079965984],[0.0800960146894,-0.406275149197],[0.0731242913007,-0.394294330433],[-0.348021659083,-0.478531031114],[-0.348021659083,-0.478531031114],[-0.79010618732,-0.140341684912]];
var data_test = [[0,0],[0,1],[1,0]];

option = {
    grid: {
    },
    xAxis: {
        min: -3,
        max: 3,
        type: 'value',
        axisLine: {onZero: false}
    },
    yAxis: {
        min: -3,
        max: 3,
        type: 'value',
        axisLine: {onZero: false}
    },
    
    
};

setTimeout(function () {
    // Add shadow circles (which is not visible) to enable drag.
    var polygon_data_100 = [];
    for(var i=0;i<data_100.length;i++){
        polygon_data_100.push(myChart.convertToPixel('grid', data_100[i]));
    }
    var polygon_data_20 = [];
    for(var i=0;i<data_20.length;i++){
        polygon_data_20.push(myChart.convertToPixel('grid', data_20[i]));
    }
    var polygon_data_40 = [];
    for(var i=0;i<data_40.length;i++){
        polygon_data_40.push(myChart.convertToPixel('grid', data_40[i]));
    }
    var polygon_data_60_1 = [];
    for(var i=0;i<data_60_1.length;i++){
        polygon_data_60_1.push(myChart.convertToPixel('grid', data_60_1[i]));
    }
    var polygon_data_60_2 = [];
    for(var i=0;i<data_60_2.length;i++){
        polygon_data_60_2.push(myChart.convertToPixel('grid', data_60_2[i]));
    }
    var polygon_data_80_1 = [];
    for(var i=0;i<data_80_1.length;i++){
        polygon_data_80_1.push(myChart.convertToPixel('grid', data_80_1[i]));
    }
    var polygon_data_80_2 = [];
    for(var i=0;i<data_80_2.length;i++){
        polygon_data_80_2.push(myChart.convertToPixel('grid', data_80_2[i]));
    }
    myChart.setOption({
        graphic: [{
            type: 'polygon',
            shape:{
                points: polygon_data_20
            },
            style:{
                fill:'#9ba1e4'
            },
            z:1
        }
        ,{
            type: 'polygon',
            shape:{
                points: polygon_data_40
            },
            style:{
                fill:'#878ee2'
            },
            z:2
        }
        ,{
            type: 'polygon',
            shape:{
                points: polygon_data_60_1
            },
            style:{
                fill:'#777fe0'
            },
            z:3
        },
        ,{
            type: 'polygon',
            shape:{
                points: polygon_data_60_2
            },
            style:{
                fill:'#777fe0'
            },
            z:3
        },
        {
            type: 'polygon',
            shape:{
                points: polygon_data_80_1
            },
            style:{
                fill:'#6872e2'
            },
            z:4
        },
        ,{
            type: 'polygon',
            shape:{
                points: polygon_data_80_2
            },
            style:{
                fill:'#6872e2'
            },
            z:4
        },
        {
            type: 'polygon',
            shape:{
                points: polygon_data_100
            },
            style:{
                fill:'#545fe2'
            },
            z:10
        },
        ]
    });
}, 0);