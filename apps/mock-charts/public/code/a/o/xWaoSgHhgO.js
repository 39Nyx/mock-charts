// Generate data
var category = ['TC373全国制糖标准化技术委员会', 'TC452全国建筑节能标准化技术委员会', 'SWG13全国特种作业机器人标准化工作组', 'TC559全国生物样本标准化技术委员会', 'TC549全国智能电网用户接口标准化技术委员会', 'TC537全国城市公共设施服务标准化技术委员会', 'TC343全国项目管理标准化技术委员会', 'TC448全国建筑幕墙门窗标准化技术委员会', 'TC319全国洁净室及相关受控环境标准化技术委员会', 'TC453全国建筑节水产品标准化技术委员会', 'TC494全国食品包装机械标准化技术委员会', 'TC426全国智能建筑及居住区数字化标准化技术委员会', 'TC455全国城镇供热标准化技术委员会', 'TC534全国社会工作标准化技术委员会', 'TC304全国发制品标准化技术委员会', 'TC458全国混凝土标准化技术委员会', 'TC583全国资产管理标准化技术委员会', 'TC441全国燃烧节能净化标准化技术委员会', 'TC483全国保健服务标准化技术委员会', 'TC487全国光电测量标准化技术委员会', 'TC330全国高原电工产品环境技术标准化技术委员会', 'TC573全国信息化和工业化融合管理标准化技术委员会', 'TC378全国制笔标准化技术委员会', 'TC311全国家用卫生杀虫用品标准化技术委员会', 'TC321全国电力设备状态维修与在线监测标准化技术委员会', 'TC403全国参茸产品标准化技术委员会', 'TC562全国增材制造标准化技术委员会', 'TC463全国产品缺陷与安全管理标准化技术委员会', 'TC446全国电网运行与控制标准化技术委员会', 'TC489全国国际货运代理标准化技术委员会', 'TC480全国家具标准化技术委员会', 'TC470全国社会信用标准化技术委员会', 'TC454全国建筑构配件标准化技术委员会', 'TC546全国海洋能转换设备标准化技术委员会', 'TC380全国生物基材料及降解制品标准化技术委员会', 'SWG11全国工具酶标准化工作组', 'TC514全国文具标准化技术委员会', 'TC529全国城市客运标准化技术委员会', 'TC414全国醇醚燃料标准化技术委员会', 'TC351全国公共安全基础标准化技术委员会', 'TC364全国机动车运行安全技术检测设备标准化技术委员会', 'TC366全国拍卖标准化技术委员会', 'TC541全国伴侣动物（宠物）标准化技术委员会', 'TC563全国电子商务质量管理标准化技术委员会', 'SWG14全国行政审批标准化工作组', 'TC518全国变频调速设备标准化技术委员会', 'TC527全国新闻出版标准化技术委员会', 'TC434全国城镇给水排水标准化技术委员会', 'TC400全国钮扣标准化技术委员会', 'TC338全国测量、控制和实验室电器设备安全标准化技术委员会', 'TC508全国消费品安全标准化技术委员会', 'TC381全国腐蚀控制标准化技术委员会', 'TC357全国减速机标准化技术委员会', 'TC294全国废弃化学品处置标准化技术委员会', 'TC287全国物品编码标准化技术委员会', 'TC382全国分离膜标准化技术委员会', 'TC342全国燃料电池及液流电池标准化技术委员会', 'TC449全国城镇风景园林标准化技术委员会', 'TC532全国品牌评价标准化技术委员会', 'TC459全国能量系统标准化技术委员会', 'TC564全国微电网与分布式电源并网标准化技术委员会', 'TC586全国化学纤维标准化技术委员会', 'TC337全国绿色制造技术标准化技术委员会', 'TC333全国高压直流输电设备标准化技术委员会', 'TC196全国电梯标准化技术委员会', 'TC302全国家用纺织品标准化技术委员会', 'TC323全国电磁屏蔽材料标准化技术委员会', 'TC550全国电力储能标准化技术委员会', 'TC547全国平板显示器件标准化技术委员会', 'SWG15全国政务大厅服务标准化工作组', 'TC477全国中药标准化技术委员会', 'TC412全国电工专用设备标准化技术委员会', 'TC438全国批发与零售市场标准化技术委员会', 'TC143全国暖通空调及净化设备标准化技术委员会', 'TC335全国升降工作平台标准化技术委员会', 'TC154全国量度继电器和保护设备标准化技术委员会', 'TC292全国人力资源服务标准化技术委员会', 'TC465全国建材装备标准化技术委员会', 'TC474全国社会保险标准化技术委员会', 'TC374全国质量监管重点产品检验方法标准化技术委员会', 'TC385全国营造林标准化技术委员会', 'TC353全国信息分类与编码标准化技术委员会', 'TC525全国计量器具管理标准化技术委员会', 'TC467全国蔬菜标准化技术委员会', 'TC331全国连续搬运机械标准化技术委员会', 'TC69全国铅酸蓄电池标准化技术委员会', 'TC341全国审计信息化标准化技术委员会', 'TC275全国环保产业标准化技术委员会', 'TC410全国金属餐饮及烹饪器具标准化技术委员会', 'TC290全国城市轨道交通标准化技术委员会', 'TC442全国节水标准化技术委员会', 'TC65全国高压开关设备标准化技术委员会', 'TC104全国电工仪器仪表标准化技术委员会', 'TC309全国氢能标准化技术委员会', 'TC511全国大型发电机标准化技术委员会', 'TC375全国糖果和巧克力标准化技术委员会', 'TC542全国创新方法标准化技术委员会', 'TC581全国设施管理标准化技术委员会', 'TC447全国工业玻璃和特种玻璃标准化技术委员会', 'TC401全国丝绸标准化技术委员会', 'TC415全国产品回收利用基础与管理标准化技术委员会', 'TC492全国口腔护理用品标准化技术委员会', 'TC300全国电工电子产品着火危险试验标准化技术委员会', 'TC212全国家用自动控制器标准化技术委员会', 'TC486全国科技平台标准化技术委员会', 'TC367全国机床数控系统标准化技术委员会', 'TC45全国电力电容器标准化技术委员会', 'TC509全国移动实验室标准化技术委员会', 'TC340全国熔断器标准化技术委员会', 'TC297全国电工电子产品与系统的环境标准化技术委员会', 'TC170全国印刷标准化技术委员会', 'TC545全国电磁超材料技术及制品标准化技术委员会', 'TC316全国民用装饰镜标准化技术委员会', 'TC260全国信息安全标准化技术委员会', 'TC163全国高电压试验技术和绝缘配合标准化技术委员会', 'TC81全国避雷器标准化技术委员会', 'TC406全国非金属矿产品及制品标准化技术委员会', 'TC407全国棉花加工标准化技术委员会', 'SWG2全国蜂产品标准化工作组', 'TC389全国图书馆标准化技术委员会', 'TC376全国电站过程监控及信息标准化技术委员会', 'TC285全国墙体屋面及道路用建筑材料标准化技术委员会', 'TC1全国电压电流等级和频率标准化技术委员会', 'TC231全国工业机械电气系统标准化技术委员会', 'TC253全国玩具标准化技术委员会', 'TC436全国包装机械标准化技术委员会', 'TC472全国饮料标准化技术委员会', 'TC523全国森林消防标准化技术委员会', 'TC184全国水泥标准化技术委员会', 'TC261全国认证认可标准化技术委员会', 'TC155全国自行车标准化技术委员会', 'TC544全国北斗卫星导航标准化技术委员会', 'TC526全国实验室仪器及设备标准化技术委员会', 'TC249全国建筑卫生陶瓷标准化技术委员会', 'TC402全国太阳能标准化技术委员会', 'TC352全国中文新闻信息标准化技术委员会', 'TC515全国沼气标准化技术委员会', 'TC124全国工业过程测量控制和自动化标准化技术委员会', 'TC481全国仪器分析测试标准化技术委员会', 'TC490全国休闲食品标准化技术委员会', 'TC460全国石材标准化技术委员会', 'TC548全国碳排放管理标准化技术委员会', 'TC269全国物流标准化技术委员会', 'TC208全国机械安全标准化技术委员会', 'TC20全国能源基础与管理标准化技术委员会', 'TC255全国建筑用玻璃标准化技术委员会', 'TC416全国林业生物质材料标准化技术委员会', 'TC411全国电器设备网络通信接口标准化技术委员会', 'TC50全国风力机械标准化技术委员会', 'TC262全国锅炉压力容器标准化技术委员会', 'TC263全国竹藤标准化技术委员会', 'TC291全国体育用品标准化技术委员会', 'TC358全国白酒标准化技术委员会', 'TC26全国旋转电机标准化技术委员会', 'SWG12全国磁力材料及设备标准化工作组', 'TC207全国环境管理标准化技术委员会', 'TC162全国非金属化工设备标准化技术委员会', 'TC491全国机械密封标准化技术委员会', 'TC151全国质量管理和质量保证标准化技术委员会', 'TC301全国电气绝缘材料与绝缘系统评定标准化技术委员会', 'TC197全国水泥制品标准化技术委员会', 'TC502全国职业经理人考试测评标准化技术委员会', 'TC482全国激光修复技术标准化技术委员会', 'TC501全国果品标准化技术委员会', 'TC568全国科普服务标准化技术委员会', 'TC328全国建筑施工机械与设备标准化技术委员会', 'TC60全国电力电子系统和设备标准化技术委员会', 'TC296全国电力监管标准化技术委员会', 'TC339全国茶叶标准化技术委员会', 'TC160全国钟表标准化技术委员会', 'TC409全国冶金设备标准化技术委员会', 'TC469全国煤化工标准化技术委员会', 'TC28全国信息技术标准化技术委员会', 'TC222全国互感器标准化技术委员会', 'TC71全国橡胶塑料机械标准化技术委员会', 'TC258全国雷电防护标准化技术委员会', 'TC195全国轻质与装饰装修建筑材料标准化技术委员会', 'TC405全国日用陶瓷标准化技术委员会', 'TC462全国邮政业标准化技术委员会', 'TC9全国防爆电气设备标准化技术委员会', 'TC372全国往复式内燃燃气发电设备标准化技术委员会', 'TC19全国轮胎轮辋标准化技术委员会', 'TC422全国裸电线标准化技术委员会', 'TC186全国铸造机械标准化技术委员会', 'TC553全国新闻出版信息标准化技术委员会', 'TC499全国物流仓储设备标准化技术委员会', 'TC320全国市场、民意和社会调查标准化技术委员会', 'TC485全国通信标准化技术委员会', 'TC82全国电力系统管理及其信息交换标准化技术委员会', 'TC379全国黄金标准化技术委员会', 'TC336全国微机电技术标准化技术委员会', 'TC284全国光辐射安全和激光设备标准化技术委员会', 'TC83全国电子业务标准化技术委员会', 'TC192全国印刷机械标准化技术委员会', 'TC46全国家用电器标准化技术委员会', 'TC180全国金融标准化技术委员会', 'TC310全国风险管理标准化技术委员会', 'TC395全国食品用洗涤消毒产品标准化技术委员会', 'TC75全国热处理标准化技术委员会', 'TC56全国无损检测标准化技术委员会', 'TC507全国气象仪器与观测方法标准化技术委员会', 'SWG3全国工程材料标准化工作组', 'TC451全国城镇环境卫生标准化技术委员会', 'TC393全国社会艺术水平考级服务标准化技术委员会', 'TC114全国汽车标准化技术委员会', 'TC44全国变压器标准化技术委员会', 'TC211全国泵标准化技术委员会', 'TC228全国电工合金标准化技术委员会', 'TC100全国安全防范报警系统标准化技术委员会', 'TC418全国小型电力变压器、电抗器、电源装置及类似产品标准化技术委员会', 'TC219全国服装标准化技术委员会', 'TC79全国无线电干扰标准化技术委员会', 'TC552全国食用淀粉及淀粉衍生物标准化技术委员会', 'TC266全国低压成套开关设备和控制设备标准化技术委员会', 'TC324全国高压直流输电工程标准化技术委员会', 'TC218全国防伪标准化技术委员会', 'TC383全国饮食加工设备标准化技术委员会', 'TC388全国剧场标准化技术委员会', 'TC189全国低压电器标准化技术委员会', 'TC404全国土壤质量标准化技术委员会', 'SWG9全国银耳标准化工作组', 'TC175全国水轮机标准化技术委员会', 'TC332全国工业车辆标准化技术委员会', 'TC344全国四轮全地形车标准化技术委员会', 'TC67全国电器附件标准化技术委员会', 'TC119全国制冷标准化技术委员会', 'TC278全国牵引电气设备与系统标准化技术委员会', 'TC238全国冷冻空调设备标准化技术委员会', 'TC206全国气体标准化技术委员会', 'TC268全国智能运输系统标准化技术委员会', 'TC428全国带轮与带标准化技术委员会', 'TC188全国阀门标准化技术委员会', 'TC377全国日用玻璃标准化技术委员会', 'TC150全国地毯标准化技术委员会', 'TC80全国绝缘子标准化技术委员会', 'TC503全国安全泄压装置标准化技术委员会', 'TC471全国酿酒标准化技术委员会', 'TC41全国木材标准化技术委员会', 'TC267全国物流信息管理标准化技术委员会', 'TC387全国生化检测标准化技术委员会', 'TC371全国乐器标准化技术委员会', 'TC506全国大型铸锻件标准化技术委员会', 'TC569全国特高压交流输电标准化技术委员会', 'TC315全国社会福利服务标准化技术委员会', 'TC512全国螺杆膨胀机标准化技术委员会', 'TC299全国紫外线消毒标准化技术委员会', 'TC496全国方便食品标准化技术委员会', 'TC520全国洗染标准化技术委员会', 'TC392全国文化娱乐场所标准化技术委员会', 'TC198全国人造板标准化技术委员会', 'TC122全国试验机标准化技术委员会', 'TC25全国电气安全标准化技术委员会', 'TC70全国电焊机标准化技术委员会', 'TC54全国铸造标准化技术委员会', 'TC493全国喷射设备标准化技术委员会', 'TC456全国体育标准化技术委员会', 'TC18全国真空技术标准化技术委员会', 'TC168全国颗粒表征与分检及筛网标准化技术委员会', 'TC264全国服务标准化技术委员会', 'TC225全国地震标准化技术委员会', 'TC147全国复印机械标准化技术委员会', 'TC435全国航空器标准化技术委员会', 'TC96全国石油钻采设备和工具标准化技术委员会', 'TC176全国原电池标准化技术委员会', 'TC327全国遥感技术标准化技术委员会', 'TC191全国绝热材料标准化技术委员会', 'TC174全国五金制品标准化技术委员会', 'TC234全国低速汽车标准化技术委员会', 'TC322全国电气化学标准化技术委员会', 'TC250全国索道与游乐设施标准化技术委员会', 'TC34全国电工电子设备结构综合标准化技术委员会', 'TC521全国道路运输标准化技术委员会', 'TC348全国会展业标准化技术委员会', 'TC226全国高压电气安全标准化技术委员会', 'TC185全国胶粘剂标准化技术委员会', 'TC59全国图形符号标准化技术委员会', 'TC318全国生铁及铁合金标准化技术委员会', 'TC215全国纺织机械与附件标准化技术委员会', 'TC286全国标准化原理与方法标准化技术委员会', 'TC317全国铁矿石与直接还原铁标准化技术委员会', 'TC101全国轻工机械标准化技术委员会', 'TC398全国调味品标准化技术委员会', 'TC461全国人工晶体标准化技术委员会', 'TC242全国音频、视频及多媒体系统与设备标准化技术委员会', 'TC298全国珠宝玉石标准化技术委员会', 'TC236全国滑动轴承标准化技术委员会', 'TC3全国液压气动标准化技术委员会', 'TC240全国产品几何技术规范标准化技术委员会', 'TC121全国工业电热设备标准化技术委员会', 'TC259全国燃气轮机标准化技术委员会', 'TC334全国土方机械标准化技术委员会', 'TC227全国起重机械标准化技术委员会', 'TC554全国知识管理标准化技术委员会', 'TC252全国皮革工业标准化技术委员会', 'TC7全国人类工效学标准化技术委员会', 'TC516全国屠宰加工标准化技术委员会', 'TC220全国锻压机械标准化技术委员会', 'TC279全国纳米技术标准化技术委员会', 'TC72全国搪玻璃设备标准化技术委员会', 'TC235全国弹簧标准化技术委员会', 'TC203全国半导体设备和材料标准化技术委员会', 'TC265全国超导标准化技术委员会', 'TC223全国交通工程设施（公路）标准化技术委员会', 'TC282全国花卉标准化技术委员会', 'TC177全国内燃机标准化技术委员会', 'TC271全国植物检疫标准化技术委员会', 'TC152全国缝制机械标准化技术委员会', 'TC277全国植物新品种测试标准化技术委员会', 'TC48全国塑料制品标准化技术委员会', 'TC61全国林业机械标准化技术委员会', 'TC33全国模具标准化技术委员会', 'TC172全国汽轮机标准化技术委员会', 'TC257全国香料香精化妆品标准化技术委员会', 'TC17全国声学标准化技术委员会', 'TC133全国农药标准化技术委员会', 'TC55全国焊接标准化技术委员会', 'TC437全国桑蚕业标准化技术委员会', 'TC497全国冷冻饮品标准化技术委员会', 'TC314全国城市临时性社会救助标准化技术委员会', 'TC551全国食品加工机械标准化技术委员会', 'TC354全国殡葬标准化技术委员会', 'TC391全国网络文化标准化技术委员会', 'TC2全国微电机标准化技术委员会', 'TC399全国肉禽蛋制品标准化技术委员会', 'TC224全国照明电器标准化技术委员会', 'TC397全国食品直接接触材料及制品标准化技术委员会', 'TC202全国架空线路标准化技术委员会', 'TC566全国感官分析标准化技术委员会', 'TC244全国天然气标准化技术委员会', 'TC97全国衡器标准化技术委员会', 'TC305全国制鞋标准化技术委员会', 'TC539全国农业气象标准化技术委员会', 'TC145全国压缩机标准化技术委员会', 'TC31全国气瓶标准化技术委员会', 'TC498全国休闲标准化技术委员会', 'TC5全国涂料和颜料标准化技术委员会', 'TC36全国带电作业标准化技术委员会', 'TC355全国石油天然气标准化技术委员会', 'TC313全国食品质量控制与管理标准化技术委员会', 'TC243全国有色金属标准化技术委员会', 'TC233全国地名标准化技术委员会', 'TC356全国制药装备标准化技术委员会', 'TC230全国地理信息标准化技术委员会', 'TC49全国包装标准化技术委员会', 'TC306全国潜水器标准化技术委员会', 'TC159全国自动化系统与集成标准化技术委员会', 'TC98全国滚动轴承标准化技术委员会', 'TC146全国技术产品文件标准化技术委员会', 'TC112全国个体防护装备标准化技术委员会', 'TC424全国短路电流计算标准化技术委员会', 'TC513全国纤维标准化技术委员会', 'TC51全国绝缘材料标准化技术委员会', 'TC127全国油墨标准化技术委员会', 'TC132全国量具量仪标准化技术委员会', 'TC312全国空间科学及其应用标准化技术委员会', 'TC35全国橡胶与橡胶制品标准化技术委员会', 'TC369全国野生动物保护管理与经营利用标准化技术委员会', 'TC210全国旅游标准化技术委员会', 'TC88全国矿山机械标准化技术委员会', 'TC183全国钢标准化技术委员会', 'TC288全国安全生产标准化技术委员会', 'TC109全国机器轴与附件标准化技术委员会', 'TC6全国集装箱标准化技术委员会', 'TC396全国燃料喷射系统标准化技术委员会', 'TC421全国生物芯片标准化技术委员会', 'TC103全国光学和光子学标准化技术委员会', 'TC251全国危险化学品管理标准化技术委员会', 'TC15全国塑料标准化技术委员会', 'TC37全国农作物种子标准化技术委员会', 'TC419全国仪表功能材料标准化技术委员会', 'TC246全国电磁兼容标准化技术委员会', 'TC39全国纤维增强塑料标准化技术委员会', 'TC209全国纺织品标准化技术委员会', 'TC74全国锻压标准化技术委员会', 'TC62全国语言与术语标准化技术委员会', 'TC572全国碳纤维标准化技术委员会', 'TC350全国填料与静密封标准化技术委员会', 'TC531全国船舶电气及电子设备标准化技术委员会', 'TC274全国畜牧业标准化技术委员会', 'TC187全国风机标准化技术委员会', 'TC384全国饲料机械标准化技术委员会', 'TC443全国教育服务标准化技术委员会', 'TC427全国航空电子过程管理标准化技术委员会', 'TC270全国粮油标准化技术委员会', 'TC4全国信息与文献标准化技术委员会', 'TC540全国气候与气候变化标准化技术委员会', 'TC92全国分离机械标准化技术委员会', 'TC141全国造纸工业标准化技术委员会', 'TC23全国电声学标准化技术委员会', 'TC425全国宇航技术及其应用标准化技术委员会', 'TC213全国电线电缆标准化技术委员会', 'TC466全国特殊膳食标准化技术委员会', 'TC504全国气体分离与液化设备标准化技术委员会', 'TC214全国饮食服务业标准化技术委员会', 'TC201全国农业机械标准化技术委员会', 'TC229全国稀土标准化技术委员会', 'TC530全国港口标准化技术委员会', 'TC53全国机械振动、冲击与状态监测标准化技术委员会', 'TC21全国统计方法应用标准化技术委员会', 'TC134全国染料标准化技术委员会', 'TC200全国消毒技术与设备标准化技术委员会', 'TC423全国设备监理工程咨询标准化技术委员会', 'TC64全国食品工业标准化技术委员会', 'TC47全国印制电路标准化技术委员会', 'TC148全国残疾人康复和专用设备标准化技术委员会', 'TC193全国耐火材料标准化技术委员会', 'TC63全国化学标准化技术委员会', 'TC538全国人工影响天气标准化技术委员会', 'TC346全国气象基本信息标准化技术委员会', 'TC118全国标准样品技术委员会', 'TC329全国移动电站标准化技术委员会', 'TC431全国光学功能薄膜材料标准化技术委员会', 'TC113全国消防标准化技术委员会', 'TC8全国电工电子产品环境条件与环境试验标准化技术委员会', 'TC199全国水文标准化技术委员会', 'TC156全国水产标准化技术委员会', 'TC105全国肥料和土壤调理剂标准化技术委员会', 'TC256全国首饰标准化技术委员会', 'TC283全国海洋标准化技术委员会', 'SWG4全国原产地域产品标准化工作组', 'TC194全国工业陶瓷标准化技术委员会', 'TC488全国焙烤制品标准化技术委员会', 'TC125全国教育装备标准化技术委员会', 'TC390全国文化馆标准化技术委员会', 'TC439全国连锁经营标准化技术委员会', 'TC245全国玻璃纤维标准化技术委员会', 'TC84全国木工机床与刀具标准化技术委员会', 'TC237全国管路附件标准化技术委员会', 'TC247全国汽车维修标准化技术委员会', 'TC345全国气象防灾减灾标准化技术委员会', 'TC57全国金属与非金属覆盖层标准化技术委员会', 'TC144全国烟草标准化技术委员会', 'TC173全国凿岩机械与气动工具标准化技术委员会', 'TC161全国特种加工机床标准化技术委员会', 'TC149全国烟花爆竹标准化技术委员会', 'TC272全国表面活性剂和洗涤用品标准化技术委员会', 'TC110全国外科植入物和矫形器械标准化技术委员会', 'TC27全国电气信息结构、文件编制和图形符号标准化技术委员会', 'TC85全国紧固件标准化技术委员会', 'TC24全国电工电子产品可靠性与维修性标准化技术委员会', 'TC22全国金属切削机床标准化技术委员会', 'TC139全国磨料磨具标准化技术委员会', 'TC120全国颜色标准化技术委员会', 'TC232全国电工术语标准化技术委员会', 'TC52全国齿轮标准化技术委员会', 'TC359全国航空货运及地面设备标准化技术委员会', 'TC108全国螺纹标准化技术委员会', 'TC295全国盐业标准化技术委员会', 'TC137全国船用机械标准化技术委员会', 'TC157全国渔船标准化技术委员会', 'TC12全国海洋船标准化技术委员会', 'TC77全国碱性蓄电池标准化技术委员会', 'TC429全国化工机械与设备标准化技术委员会', 'TC68全国电动工具标准化技术委员会', 'TC475全国针灸标准化技术委员会', 'TC280全国石油产品和润滑剂标准化技术委员会', 'TC140全国拖拉机标准化技术委员会', 'TC93全国自然资源与国土空间规划标准化技术委员会', 'TC417全国低压设备绝缘配合标准化技术委员会', 'TC38全国微束分析标准化技术委员会', 'TC181全国动物卫生标准化技术委员会', 'TC116全国麻醉和呼吸设备标准化技术委员会', 'TC42全国煤炭标准化技术委员会', 'TC205全国建筑物电气装置标准化技术委员会', 'TC106全国医用输液器具标准化技术委员会', 'TC76全国饲料工业标准化技术委员会', 'TC408全国辛香料标准化技术委员会', 'TC131全国劳动定额定员标准化技术委员会', 'TC307全国应急管理与减灾救灾标准化技术委员会', 'TC164全国链传动标准化技术委员会', 'TC99全国口腔材料和器械设备标准化技术委员会', 'TC78全国半导体器件标准化技术委员会', 'TC107全国照相机械标准化技术委员会', 'TC182全国频率控制和选择用压电器件标准化技术委员会', 'TC129全国船舶舾装标准化技术委员会', 'TC153全国电子测量仪器标准化技术委员会', 'SWG5全国白度标准样品标准化工作组', 'TC95全国医用注射器（针）标准化技术委员会', 'TC179全国刑事技术标准化技术委员会', 'TC190全国电子设备用高频电缆及连接器标准化技术委员会', 'TC66全国人造板机械标准化技术委员会', 'TC239全国广播电影电视标准化技术委员会', 'TC126全国服装洗涤机械标准化技术委员会', 'TC166全国电子设备用机电元件标准化技术委员会', 'TC90全国太阳光伏能源系统标准化技术委员会', 'TC91全国刀具标准化技术委员会', 'TC158全国医用体外循环设备标准化技术委员会', 'TC178全国玻璃仪器标准化技术委员会', 'TC289全国文物保护标准化技术委员会', 'TC10全国医用电器标准化技术委员会', 'TC281全国实验动物标准化技术委员会', 'TC241全国小艇标准化技术委员会', 'TC130全国内河船标准化技术委员会', 'TC136全国医用临床检验实验室和体外诊断系统标准化技术委员会', 'TC30全国核仪器仪表标准化技术委员会', 'TC11全国食品添加剂标准化技术委员会', 'TC248全国医疗器械生物学评价标准化技术委员会', 'TC347全国卫星气象与空间天气标准化技术委员会', 'TC89全国磁性元件与铁氧体材料标准化技术委员会', 'TC102全国感光材料标准化技术委员会', 'TC94全国外科器械标准化技术委员会', 'TC58全国核能标准化技术委员会', 'TC217全国有或无电气继电器标准化技术委员会', 'TC43全国导航设备标准化技术委员会', 'TC165全国电子设备用阻容元件标准化技术委员会', 'TC167全国电真空器件标准化技术委员会', 'TC115全国林木种子标准化技术委员会', 'TC432全国数码影像材料与数字印刷材料标准化技术委员会', 'TC169全国计划生育器械标准化技术委员会', 'TC254全国商业自动化标准化技术委员会', 'TC111全国商业机械标准化技术委员会', 'TC557全国经济林产品标准化技术委员会', 'TC370全国森林资源标准化技术委员会', 'TC478全国中医标准化技术委员会', 'TC86全国文献影像技术标准化技术委员会', 'TC16全国量和单位标准化技术委员会']
var dottedBase = [];
var lineData = [];
var barData =[22.6, 22, 21, 18, 18, 17.8, 16.66666667, 16.63636364, 16, 16, 15.53571429, 15.23809524, 15.1875, 15, 14.57142857, 14.5, 14.2, 14.14285714, 13.66666667, 13.5, 13.16666667, 13, 12.77777778, 12.75, 12, 11.71428571, 11.57142857, 11.5, 11.36363636, 11.2, 11.125, 11.07692308, 11, 11, 10.73076923, 10.66666667, 10.66666667, 10.52173913, 10.5, 10, 10, 10, 10, 9.888888889, 9.777777778, 9.625, 9.5, 9.4, 9.333333333, 9.333333333, 9.3125, 9.044444444, 9, 8.666666667, 8.6, 8.529411765, 8.52, 8.5, 8.433333333, 8.4, 8.4, 8.265306122, 8.129032258, 8.111111111, 8.081967213, 8, 8, 8, 8, 8, 8, 8, 8, 7.85106383, 7.769230769, 7.747126437, 7.684210526, 7.666666667, 7.516129032, 7.511111111, 7.5, 7.489795918, 7.428571429, 7.375, 7.333333333, 7.235294118, 7.090909091, 7.083333333, 7.071428571, 7.071428571, 7.066666667, 7.061538462, 7.042168675, 7.037037037, 7, 7, 7, 7, 6.982758621, 6.866666667, 6.806451613, 6.789473684, 6.723404255, 6.689655172, 6.666666667, 6.642857143, 6.632653061, 6.59375, 6.529411765, 6.413043478, 6.39, 6.333333333, 6.333333333, 6.328981723, 6.321428571, 6.269230769, 6.235294118, 6.230769231, 6.230769231, 6.1875, 6.166666667, 6.146341463, 6.114285714, 6.070175439, 6.05, 6, 6, 6, 5.990909091, 5.847826087, 5.789473684, 5.75, 5.725806452, 5.694736842, 5.682926829, 5.666666667, 5.666666667, 5.604519774, 5.6, 5.6, 5.588235294, 5.5625, 5.511904762, 5.5, 5.483333333, 5.470588235, 5.384615385, 5.375, 5.370689655, 5.331896552, 5.32, 5.317073171, 5.304347826, 5.297142857, 5.25, 5.227272727, 5.208333333, 5.166666667, 5.14516129, 5.136842105, 5.029126214, 5, 5, 5, 5, 4.988235294, 4.957894737, 4.944444444, 4.941860465, 4.920634921, 4.892857143, 4.86440678, 4.859452736, 4.8, 4.794871795, 4.787878788, 4.774193548, 4.769230769, 4.75, 4.742424242, 4.714285714, 4.683544304, 4.68, 4.677419355, 4.666666667, 4.666666667, 4.666666667, 4.649122807, 4.637931034, 4.636363636, 4.636363636, 4.617647059, 4.613043478, 4.612903226, 4.608058608, 4.578947368, 4.571428571, 4.555555556, 4.537037037, 4.536945813, 4.517857143, 4.5, 4.5, 4.5, 4.499245852, 4.492753623, 4.485294118, 4.466666667, 4.441860465, 4.433333333, 4.422222222, 4.4, 4.394736842, 4.392857143, 4.384615385, 4.375, 4.333333333, 4.285714286, 4.255172414, 4.25, 4.25, 4.243902439, 4.220338983, 4.19047619, 4.183098592, 4.178571429, 4.166666667, 4.120879121, 4.107843137, 4.10619469, 4.1, 4.094736842, 4.090909091, 4.088235294, 4.083333333, 4.076923077, 4.04, 4.038461538, 4.008064516, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3.953333333, 3.903508772, 3.847222222, 3.846153846, 3.845679012, 3.8, 3.766666667, 3.75, 3.746666667, 3.702702703, 3.681818182, 3.678571429, 3.677777778, 3.666666667, 3.666666667, 3.647058824, 3.610169492, 3.574468085, 3.553846154, 3.545454545, 3.509433962, 3.5, 3.5, 3.5, 3.5, 3.485714286, 3.455284553, 3.448275862, 3.426573427, 3.394736842, 3.3625, 3.35, 3.333333333, 3.333333333, 3.281690141, 3.269230769, 3.266666667, 3.265, 3.25170068, 3.25, 3.25, 3.246231156, 3.226618705, 3.222222222, 3.212765957, 3.2, 3.2, 3.185714286, 3.181818182, 3.172413793, 3.166666667, 3.148148148, 3.136363636, 3.133333333, 3.111111111, 3.09947644, 3.074349442, 3.0625, 3.055555556, 3.052023121, 3.038461538, 3.03652968, 3.033333333, 3.026315789, 3.026315789, 3.016666667, 3.009615385, 3, 3, 3, 3, 3, 3, 2.982758621, 2.980769231, 2.978417266, 2.974358974, 2.961538462, 2.944444444, 2.931372549, 2.923076923, 2.92173913, 2.913043478, 2.906976744, 2.904, 2.875, 2.872389791, 2.853658537, 2.830601093, 2.8125, 2.78226445, 2.777777778, 2.769230769, 2.761702128, 2.75, 2.75, 2.728434505, 2.724137931, 2.721212121, 2.718309859, 2.714285714, 2.703703704, 2.700636943, 2.7, 2.691666667, 2.684210526, 2.669447341, 2.666666667, 2.642857143, 2.64, 2.63844086, 2.614035088, 2.610619469, 2.609375, 2.6, 2.588235294, 2.563380282, 2.561643836, 2.548623853, 2.540540541, 2.533333333, 2.528735632, 2.512315271, 2.511658031, 2.509615385, 2.5, 2.5, 2.5, 2.482758621, 2.478494624, 2.476190476, 2.454545455, 2.4375, 2.428571429, 2.427549195, 2.417391304, 2.4, 2.375, 2.359126984, 2.357142857, 2.347826087, 2.335443038, 2.333333333, 2.333333333, 2.333333333, 2.318181818, 2.31420765, 2.3125, 2.310734463, 2.3046875, 2.294736842, 2.288888889, 2.25, 2.223880597, 2.203389831, 2.196202532, 2.188034188, 2.173343606, 2.166666667, 2.166666667, 2.153846154, 2.105263158, 2.103448276, 2.103274559, 2.1, 2.078947368, 2.0375, 2.025125628, 2.023809524, 2.02173913, 2.014634146, 2, 2, 2, 2, 2, 1.986842105, 1.985507246, 1.968838527, 1.966666667, 1.963636364, 1.963414634, 1.963302752, 1.944444444, 1.942857143, 1.936170213, 1.934911243, 1.931034483, 1.908045977, 1.891104294, 1.88, 1.879518072, 1.875968992, 1.862745098, 1.855769231, 1.835164835, 1.833333333, 1.828571429, 1.826086957, 1.81871345, 1.8, 1.797297297, 1.793103448, 1.761904762, 1.756521739, 1.741935484, 1.73993808, 1.727722772, 1.714285714, 1.714285714, 1.700787402, 1.682080925, 1.666666667, 1.665738162, 1.641791045, 1.62962963, 1.615384615, 1.609756098, 1.571428571, 1.5625, 1.555555556, 1.533333333, 1.504950495, 1.46875, 1.466666667, 1.464, 1.463157895, 1.444444444, 1.416666667, 1.414634146, 1.398230088, 1.366666667, 1.337078652, 1.333333333, 1.325, 1.324324324, 1.323907455, 1.307692308, 1.298507463, 1.289473684, 1.285714286, 1.284313725, 1.280898876, 1.272727273, 1.25, 1.233183857, 1.206896552, 1.176470588, 1.166666667, 1.158730159, 1.15, 1.111111111, 1.107692308, 1.105263158, 1.086956522, 1.06122449, 1.037974684, 1.034482759, 1, 1, 1, 1, 1, 1, 1, 0.943925234, 0.923076923]
var rateData = [];
// option
option = {
    title: {
        text: '各TC单位标准的参编单位数量',
        x: 'center',
        y: 0,
        textStyle: {
            fontSize: 25,
        },
    },
    dataZoom: [
        {
            type: 'inside',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 3,
        },
    ],
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC',
            },
        },
    },
    legend: {
        data: ['标准数'],
        textStyle: {},
        top: '7%',
    },
    grid: {
        x: '12%',
        width: '82%',
        y: '3%',
        bottom: 180,
    },
    xAxis: {
        data: category,
        axisLabel: {
            textStyle: {},
            interval: 0,
            rotate: -30,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [
        {
            splitLine: {
                show: false,
            },
            axisLine: {},

            axisLabel: {
                formatter: '{value} ',
            },
        },
    ],

    series: [
        {
            name: '标准数',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#956FD4',
                        },
                        {
                            offset: 1,
                            color: '#3EACE5',
                        },
                    ]),
                },
            },
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
            },
            data: barData,
        },
    ],
};