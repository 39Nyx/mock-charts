//var uploadedDataURL = "/asset/get/s/data-1495350605523-SJII63Rl-.js";

option = {
    //backgroundColor: "#cccccc",
    title: {
        text: '1.15 2010年世界各国农村建设用地面积比例',
        subtext: '国家基础地理信息中心',
        //sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = (params.value);
            //value = value.toFixed(5);toFixed(3)控制小数位数      
            value = (value*100).toFixed(3)+'%';
            return  params.name + ' : ' + value;
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        type: 'piecewise', //分段型。
        splitNumber: 6,
        inverse: true,
        pieces: [{
            min: 0,
            max: 0.01,
            label:'0-1%',
            color: '#ebdba4'
        }, {
            min: 0.01,
            max: 0.02,
            label:'1%-2%',
            color: '#f2d643'
        }, {
            min: 0.02,
            max: 0.04,
            label:'2%-4%',
            color: '#ffb248'
        }, {
            min: 0.04,
            max: 0.08,
            label:'4%-8%',
            color: '#eb8146'
        }, {
            min: 0.08,
            max: 0.16,
            label:'8%-16%',
            color: '#d95850'
        }, {
            min: 0.16,
            label:'>16%',
            color: '#893448'
        }],
        left: 'left',
        top: 'bottom',
        textStyle: {
            color: '#000'
        },
        //min: 0,
        //max: 60000,
        //text:['High','Low'],
        //realtime: true,
        //calculable: true,
        //color: ['red','orange','lightgreen']
    },
    series: [
        {
            name: 'World Population (2010)',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                emphasis:{label:{show:false}}
            },
            data:[
{name:'Afghanistan',value:0.000884021541727005},
{name:'Albania',value:0.000580698137237245},
{name:'Algeria',value:0.0029993077407663},
{name:'Andorra',value:1.32667513834086E-05},
{name:'Angola',value:0.00202813172508367},
{name:'Antarctica',value:0},
{name:'Antigua and Barbuda',value:1.70260305578533E-05},
{name:'Argentina',value:0.00903808731704477},
{name:'Armenia',value:0.0010367149396206},
{name:'Australia',value:0.0108621545265782},
{name:'Austria',value:0.00388336713168279},
{name:'Azerbaijan',value:0.003417106629308},
{name:'Bahamas, The',value:0.000152201358430364},
{name:'Bahrain',value:1.45646123000811E-05},
{name:'Bangladesh',value:0.0180809985743358},
{name:'Barbados',value:3.84181482634213E-05},
{name:'Belgium',value:0.00388416440654505},
{name:'Belize',value:0.000189971186706247},
{name:'Benin',value:0.000437136161541005},
{name:'Bermuda',value:2.08732175272183E-05},
{name:'Bhutan',value:4.88010355968013E-06},
{name:'Bolivia',value:0.0012050070873462},
{name:'Bosnia and Herzegovina',value:0.00113052720809986},
{name:'Botswana',value:0.000954363649904101},
{name:'Brazil',value:0.0259019023534963},
{name:'Brunei',value:0.000148409113832824},
{name:'Bulgaria',value:0.00610113550547537},
{name:'Burkina Faso',value:0.000362789364928645},
{name:'Burundi',value:0.000110714983935901},
{name:'Belarus',value:0.0078354622867526},
{name:'Cambodia',value:0.00132500977400376},
{name:'Cameroon',value:0.00122146904288664},
{name:'Canada',value:0.0197293674044216},
{name:'Cape Verde',value:2.16302013168109E-05},
{name:'Central African Republic',value:0.000575490821329805},
{name:'Chad',value:0.00119911116037855},
{name:'Chile',value:0.00211464764658453},
{name:'China',value:0.165589979320131},
{name:'Colombia',value:0.00151151592846023},
{name:'Comoros',value:3.22255324879153E-05},
{name:'Republic of the Congo',value:0.000273031843490095},
{name:'Costa Rica',value:0.000223605685796082},
{name:'Croatia',value:0.00195761135943354},
{name:'Cuba',value:0.00134984616795197},
{name:'Cyprus',value:0.000148140506681679},
{name:'Czech Republic',value:0.00573073234875333},
{name:'Denmark',value:0.0027344549850286},
{name:'Djibouti',value:2.24006154639608E-05},
{name:'Dominica',value:1.16660969508991E-05},
{name:'Dominican Republic',value:0.00049806725189523},
{name:'Ecuador',value:0.000530701799817845},
{name:'Egypt',value:0.00412167295429612},
{name:'El Salvador',value:0.000324733836319271},
{name:'Equatorial Guinea',value:0.00012028350322467},
{name:'Eritrea',value:0.000197958586628046},
{name:'Estonia',value:0.00102138479693976},
{name:'Ethiopia',value:0.00162204655021511},
{name:'Falkland Islands (Islas Malvinas)',value:7.07901937428707E-06},
{name:'Faroe Islands',value:0.000015668343502971},
{name:'Fiji',value:3.71398224122867E-05},
{name:'Finland',value:0.00384202727017986},
{name:'France',value:0.0261511148473878},
{name:'French Guiana',value:0.000121405548551502},
{name:'French Polynesia',value:1.57989842537555E-05},
{name:'Gabon',value:0.000230159700284038},
{name:'Gambia, The',value:0.000104073061653023},
{name:'Gaza Strip',value:4.18575407396833E-05},
{name:'Georgia',value:0.00151016800893811},
{name:'Germany',value:0.0273233958161916},
{name:'Ghana',value:0.00192138235945196},
{name:'Greece',value:0.00372838935206285},
{name:'Greenland',value:7.51123269931253E-06},
{name:'Grenada',value:3.56258548331015E-05},
{name:'Guadeloupe',value:0.000114664729999339},
{name:'Guatemala',value:0.00104573159330793},
{name:'Guinea',value:0.000633748049588533},
{name:'Guinea-Bissau',value:0.000078247705011954},
{name:'Guyana',value:0.000245265189711199},
{name:'Haiti',value:0.000117300742905356},
{name:'Honduras',value:0.000598809584874046},
{name:'Hong Kong',value:0.000109314563925154},
{name:'Hungary',value:0.00594713203724913},
{name:'Iceland',value:8.92398422017965E-05},
{name:'India',value:0.0491987499960869},
{name:'Indonesia',value:0.0146960686398519},
{name:'Iran',value:0.00777478148942558},
{name:'Iraq',value:0.0020424277302326},
{name:'Iraq-Saudi Arabia Neutral Zone',value:0},
{name:'Ireland',value:0.00155050791927382},
{name:'Isle of Man',value:3.55232957390276E-05},
{name:'Israel',value:0.000968571747258116},
{name:'Italy',value:0.015844198162943},
{name:'Ivory Coast',value:0.00195108664754389},
{name:'Jamaica',value:0.000195792636236534},
{name:'Jan Mayen',value:0},
{name:'Japan',value:0.0111199636702479},
{name:'Jordan',value:0.000659384160282205},
{name:'Kazakhstan',value:0.0123007826836334},
{name:'Kenya',value:0.000828915563727855},
{name:'Kerguelen',value:0},
{name:'Kiribati',value:1.07442860458307E-07},
{name:'North Korea',value:0.00104986936437717},
{name:'South Korea',value:0.0019593206776681},
{name:'Kuwait',value:0.000226671470143932},
{name:'Kyrgyzstan',value:0.0022476973151382},
{name:'Laos',value:0.000174410286063735},
{name:'Latvia',value:0.00112198916351821},
{name:'Lebanon',value:0.000258994677959537},
{name:'Lesotho',value:8.22975682862745E-05},
{name:'Liberia',value:0.000345901300771153},
{name:'Libya',value:0.00138547568560986},
{name:'Liechtenstein',value:2.45946475121833E-05},
{name:'Lithuania',value:0.00279832610274627},
{name:'Luxembourg',value:0.000229506496530116},
{name:'Macau',value:0.000013968792801176},
{name:'Macedonia',value:0.000440143340692241},
{name:'Madagascar',value:0.0002862998158151},
{name:'Malawi',value:0.000671053920057892},
{name:'Malaysia',value:0.00346145489090377},
{name:'Maldives',value:3.37956633805219E-06},
{name:'Mali',value:0.000944058902832873},
{name:'Malta',value:3.86672203490292E-05},
{name:'Martinique',value:6.93360523018952E-05},
{name:'Mauritania',value:0.00016183092479894},
{name:'Mauritius',value:6.56512505648137E-05},
{name:'Mexico',value:0.0206339898936999},
{name:'Moldova',value:0.00315886527231327},
{name:'Monaco',value:5.08155892303946E-06},
{name:'Mongolia',value:0.000680224412386328},
{name:'Morocco',value:0.00169137039310105},
{name:'Mozambique',value:0.00174134231168853},
{name:'Myanmar (Burma)',value:0.00520046398320211},
{name:'Namibia',value:0.000947412829397406},
{name:'Nepal',value:0.000487885819925209},
{name:'Netherlands',value:0.00314366577038321},
{name:'New Caledonia',value:0.000056574770739279},
{name:'New Zealand',value:0.00104830655913414},
{name:'Nicaragua',value:0.000254020561896955},
{name:'Niger',value:0.00102350801437541},
{name:'Nigeria',value:0.00651201409705028},
{name:'Northern Mariana Islands',value:5.67090743148519E-05},
{name:'Norway',value:0.00214720527518659},
{name:'Oman',value:0.000845668103368178},
{name:'Pakistan',value:0.00546960346488379},
{name:'Panama',value:0.00024030938777256},
{name:'Papua New Guinea',value:0.000227268510584433},
{name:'Paraguay',value:0.0011420541177088},
{name:'Peru',value:0.00140699111841664},
{name:'Philippines',value:0.00218723262447369},
{name:'Poland',value:0.0135405829436442},
{name:'Portugal',value:0.00459632620920261},
{name:'Puerto Rico',value:0.00060804967087346},
{name:'Qatar',value:0.000159964105098477},
{name:'Reunion',value:0.000181939832886989},
{name:'Romania',value:0.0167153534221301},
{name:'Russia',value:0.0987103784855948},
{name:'Rwanda',value:7.71976952392933E-05},
{name:'San Marino',value:1.32960539817154E-05},
{name:'Sao Tome and Principe',value:1.59906720843459E-05},
{name:'Saudi Arabia',value:0.00327780085601583},
{name:'Senegal',value:0.000930775058267118},
{name:'Seychelles',value:4.32091230865849E-05},
{name:'Sierra Leone',value:0.000176799668767336},
{name:'Singapore',value:5.84831024540101E-06},
{name:'Slovakia',value:0.00323348189701837},
{name:'Slovenia',value:0.000829569988423374},
{name:'Solomon Islands',value:1.19969721234468E-05},
{name:'Somalia',value:0.000288298497207944},
{name:'South Africa',value:0.0116014859425742},
{name:'Spain',value:0.0123395622306093},
{name:'Sri Lanka',value:0.00124136428619537},
{name:'St. Christopher-Nevis',value:4.81539365508592E-06},
{name:'St. Lucia',value:8.84694280546466E-06},
{name:'St. Vincent and the Grenadines',value:1.10873706343396E-05},
{name:'Sudan',value:0.00443817886519916},
{name:'Suriname',value:8.54524813706412E-05},
{name:'Svalbard',value:0},
{name:'Swaziland',value:0.000107446523283095},
{name:'Sweden',value:0.00532498171188212},
{name:'Switzerland',value:0.00202365209036751},
{name:'Syria',value:0.00347004177314926},
{name:'Taiwan',value:0.00107805846394832},
{name:'Tajikistan',value:0.00183573696930913},
{name:'United Republic of Tanzania',value:0.00210091205362821},
{name:'Thailand',value:0.00526453777722474},
{name:'Togo',value:0.000290951603296306},
{name:'Tonga',value:2.15410725802944E-05},
{name:'Trinidad and Tobago',value:0.000131027789270501},
{name:'Tunisia',value:0.000914687931796679},
{name:'Turkey',value:0.0089006056304972},
{name:'Turkmenistan',value:0.00283398492300247},
{name:'Turks and Caicos Islands',value:7.22797424901336E-06},
{name:'Uganda',value:0.000329781208877619},
{name:'Ukraine',value:0.0405488500710532},
{name:'United Arab Emirates',value:0.000654474754124218},
{name:'United Kingdom',value:0.00866976464480253},
{name:'United States of America',value:0.125457005154605},
{name:'Uruguay',value:0.000583531942681832},
{name:'Uzbekistan',value:0.00934602343888466},
{name:'Vanuatu',value:3.05040048373902E-05},
{name:'Venezuela',value:0.00228372730163961},
{name:'Vietnam',value:0.00671476365850149},
{name:'Western Sahara',value:9.82894613122166E-05},
{name:'Western Samoa',value:3.10888358619303E-05},
{name:'Yemen',value:0.000441303235208553},
{name:'Yugoslavia',value:0.00356190541884111},
{name:'Zaire',value:0.00474785482881351},
{name:'Zambia',value:0.00112429796407647},
{name:'Zimbabwe',value:0.000773819353261474},

{name:'Democratic Republic of the Congo',value:0},
{name:'South Sudan',value:0},
{name:'Somaliland',value:0},
{name:'Montenegro',value:0},
{name:'Kosovo',value:0},
{name:'Republic of Serbia',value:0},
]
        }
    ]
};