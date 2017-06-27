// pages/gamevideo/gamevideo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  id:"",
  url:"",
  txt:"",
  gamecomment:null
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      id:options.id
    });
    if(this.data.id==1){
      this.setData({ url: "http://cdn.steamstatic.com.8686c.com/steam/apps/256684985/movie480.webm?t=1494792493",
      txt:"Refunct是一款静谧平和，流程简短的第一人称沙盒游戏。在开放的环境中去重塑一个充满活力的世界吧。",
      configuration:"操作系统: Windows 10,处理器: Core i5 / AMD FX 2.4Ghz,内存: 2 GB RAM,图形: NVIDIA GeForce GTX 470 / AMD Radeon HD 6870,DirectX 版本: 11,存储空间: 需要 250 MB 可用空间",
      gamecomment: [{
        img: 'http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/a7/a796a17138f5919c3d6e089c770a42f1221101cc.jpg', time: '0.6', comment: '这么个游戏，居然还支持16种语言你敢信？SE学着点，勒索病毒都比你有良心。'},{img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/47/474b7d72e60b818e82eb02aeadfe771c09dc3a14.jpg",time:"0.5",comment:'画面感觉很棒动作很流畅充满惊喜很暖心'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/55/5584207ee309488e3eba199326e86f350f851f5d.jpg",time:0.5,comment:"最多30分钟就能实现全成就的游戏电子乐搭配迷幻风格的场景让人感觉特别美好难度不高，各个位置都能轻松达到PS。看不见本体，这人真的不是卢西奥么？？"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/28/28343eefbc39c45b5f9cb31ed60fd196facb8722.jpg",time:0.2,comment:"很棒说真的很不喜欢那种丧尸血腥的游戏 这样的游戏希望多出一点 游戏要带给人美好的感觉，而不是一味去刺激负面感官缺点就是内容不够丰富 可玩性不高 不过这也是他的特点 总之值得入手 尤其打折 还犹豫啥"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/58/58e32d0ccf56c2a8885eb1506060ca0b49b151c7.jpg",time:0.5,comment:"非常好玩的游戏，尤其是音乐很良心，对3d眩晕的同志们也很友好，缺点就是太短了还有逼死强迫症...我这种重度强迫症患者必须要把所有板块玩儿踩成草地才行= ="},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/0c/0ccf7e4e8fb8382a60a4c8be99fce0180742c5bc.jpg",time:4.3,comment:"音乐好评，流程略短，很好的跑酷游戏"}]
      
}
      )
    }
    else if (this.data.id == 2) { this.setData({ 
        url: "http://cdn.steamstatic.com.8686c.com/steam/apps/256669280/movie480.webm?t=1472090901", 
        txt:"你独自一人被困在空间站中，你需要想办法离开这里。 游戏体验基于HTV Vive，包含4个充满谜题的房间。 每个场景都经过精心设计，失重的太空舱，太空景观走廊...",
        configuration:"操作系统: Windows 7 SP1, Windows 8.1 or Windows 10处理器: Intel® i5-4590, AMD FX 8350 equivalent or better内存: 4 GB RAM图形: NVIDIA GeForce® GTX 970, AMD Radeon™ R9 290 equivalent or better, Video Output: HDMI 1.4, DisplayPort 1.2 or newer存储空间: 需要 600 MB 可用空间",
        gamecomment: [
        {img: 'http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/3b/3b907e16bfb95bc094343e490d9b5a15f156df8e.jpg', time: '1.2', comment:'这是我的游戏通关攻略，如果感兴趣的话可以来看一下http://v.youku.com/v_show/id_XMTcwNjQ4OTA4MA==.html总的来说这个游戏第四关是最经典的，我觉得结合了很多元素，其他几关相对轻松我希望以后有DLC的话多出几个吧，希望难一点我喜欢玩VR也喜欢探索最新的VR游戏，也会用心做好每一个视频steam是一个要花钱的平台，所以我希望用我的视频让大家能更好的了解每一个游戏最后，祝大家游戏越快哦~再感谢一下3974118多谢你地帮助，我也会帮助更多人'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/47/474b7d72e60b818e82eb02aeadfe771c09dc3a14.jpg",time:"2.4",comment:'终于通了！游戏其实很不错的！下面是我的几点感受优点：1游戏场景很细腻2题材很好3个别地方有难度,缺点：1操控不好，手一直扣着扳机键，才能拿着东西，可以改成直接拿起货放下，一直扣着很累2场景有点太暗了，vive的集镜片反光，太暗看着不舒服3最后一个场景那个坐标很难看，角度会影响准确性4有bug，瞬移的时候会飞出太空舱回不去游戏很好，望优化下操作，以后多更新点场景'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/f4/f4b6e74ddbc7ab73dac01268e4a21c4f64ac2b25.jpg",time:0.1,comment:"朋友推荐买的这款游戏，玩了一会，感觉做的很不错，身为一款VR游戏，细节什么的都挺到位，还不错，各位朋友可以考虑入手，价格也不贵。"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/fc/fca48806fa67279a4e7a61e41e172130994e8a20.jpg",time:0.3,comment:"看效果很沉侵，刚买等玩一阵子再来评论。 有中文版，先赞一个"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/7f/7ffb87d6d6a11c753569e84b70893dc9d5656cec.jpg",time:0.9,comment:"第四关透过玻璃看到外太空的景色实在是太震撼了！游戏流程不长，但是很精致，完成度很高。另外，知道为什么有官方中文么？没错，是国人的开发团队！！"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/aa/aaadf619fa1de3c88d356c3332f1e83e6fa37ad0.jpg",time:12.1,comment:"现在的VR正慢慢起步的路上••••希望这样的游戏能够越做越好•••非常棒的一款空间站解密游戏有条件的朋友推荐入手玩一玩优点 1：游戏的环境气氛很棒2：宇宙空间站的这种设定很吸引人3：个别有趣的谜题4：画面和细节很棒••5：官方中文官方中文官方中文_(:з」∠)_一查才知道原来是国人的开发团队！缺点：1：有些柜子打开时声音会鬼畜一下•有些机关开启的声音有些突兀••2：只有四关但是对得起这个价格了"}]
        })}
    else if (this.data.id == 3) { this.setData({ url: "http://cdn.steamstatic.com.8686c.com/steam/apps/256665455/movie480.webm?t=1465569337",
     txt:"成为有史以来最著名的侦探：夏洛克•福尔摩斯！利用你们惊人的侦探才华破解五个令人毛骨悚然的不同罪案：谋杀、寻人、惊天盗窃，调查有时会把你们引入光怪陆离的世界。",
     configuration:"操作系统: Windows 7 64 Bit / Windows 8.1 64 Bit / Windows 10 64 Bit处理器: INTEL Core i5 2100 3.1 GHZ / AMD A8-7600 3.1 GHz内存: 8 GB RAM图形: 2048MB 100% DirectX 11 compatible ATI R9 270X / NVIDIA GeForce 760 GTX or higherDirectX 版本: 11存储空间: 需要 20 GB 可用空间声卡: DirectX Compatible",
        gamecomment: [
        {img: 'http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/73/73193914d96b5f267e68dcdb024dc4f7bf47efa7.jpg', time: '1.6', comment:'太短！！！！新人一定要知道白色圈圈就是有线索要看或者还没看！！绿色圈圈就是线索找齐了！！不然一直卡关！！！'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/0c/0ca12ab0026a2e3bf83c98eb73da53d5c03571e6.jpg",time:"10.3",comment:'很好玩的一款游戏，至少对于我来说，已经做得很不错了游戏剧情设计的不错，虽说有的案件确实是一眼就能看出凶手，但推理游戏享受的不是结果而是过程不是'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/14/1402674912771f2c0d4735ded358b28c9d7ab791.jpg",time:0.5,comment:"买了这款游戏，然后就退款了。和第一部是一个毛病，当人物超出地图允许的活动范围是，采取的是将人物闪回并转换视角的方式。结果就是，不晕cs，不晕半条命，不晕传送门的我，晕倒想死。第一部是强撑着玩到结局的，第二部是真不行了。所以，你要是容易3d晕眩的话，这款游戏不是很适合你。"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/19/1913020adff7c6c71e0c9e88766ee0c7cd67a3a5.jpg",time:14.5,comment:"看了别人的评测发现，原来是墙的锅……好吧==============================================机翻，但是有中文总比没有强，绝大部分不影响解谜，个别地方需要切回英文。就算全低特效，场景切换也卡得要命（i7-4790，GTX970，8G，机械硬盘）。不知道因为我没把游戏存到固态里，还是内存捉急了。所有案件的结局并没有正确选项（虽然有的是可能性极小极小的），对于我这种强迫症来说简直要吐血……最低难度通一遍即可全程就。第一次玩这个系列，最低难度不跳谜题，我用了12小时通关（卡成狗……）。考虑等打折入手前作。"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/b1/b16f8967130f366dddf5c926c836195193e5ff5f.jpg",time:0.7,comment:"垃圾游戏"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/e4/e4b36519ab63e8942823cf550f255d00309c4cdd.jpg",time:11.9,comment:"这种如跗骨之蛆的卡顿换别的游戏我早就给差评了但冲着二线小厂特意加的简中我也要给好评PS：卡顿应该不是我电脑配置问题找到方法了，挂vpn玩就不卡（本人亲测），并不是制作组的锅，目测应该是万能的墙把上传的统计数据给墙了所以卡顿，同理断网应该也不会卡，所以不要刷差评了，和制作组没关系阿"}]
         }) }
    else if (this.data.id == 4) { this.setData({ url: "http://cdn.steamstatic.com.8686c.com/steam/apps/256667891/movie480.webm?t=1469902708",
     txt:"《Half Dead》是一款关于死亡真人秀的多人科幻游戏，玩家的目的是在无数充满陷阱的房间中存活。",
     configuration:"操作系统: 64-bit Windows 7 or later处理器: Intel core i5/ core i7 or equivalent Amd内存: 4096 MB RAM图形: NVIDIA GeForce 480 GTX / AMD Radeon HD 5850 or equivalent videocardDirectX 版本: 12网络: 宽带互联网连接存储空间: 需要 2 GB 可用空间声卡: DirectX compatible sound card",
        gamecomment: [
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/8e/8e74db491fc1421b3d5ff45fdc9eca37cd11d448.jpg", time:0.1, comment:'好评。蓝-4格安全绿-1格危险黄-2格危险紫-3格危险红-4格危险G丢鞋，E开门捡鞋，M地图，O标记，右键取消标记'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/38/38cefc2ee3719b611811a817f9878fe4f3fb03c7.jpg",time:2.4,comment:'有提示，有中文，可联机可撕逼，还支持创意工坊，游戏质量还不差。一个喜加一能做到这种地步也是相当不容易了。必须推荐。'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/a4/a4564d2aed5a1d4195e561c077577d37bf7853f2.jpg",time:1.0,comment:"血统鉴定机???"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/b7/b7fed965d54c78415fa3020519dbb67f501a4965.jpg",time:6.1,comment:"第一人称扫雷游戏，看地标判断与当前房间连接的四个房间陷阱情况蓝-4格安全 绿-1个陷阱 黄-2个紫-3个红-4个前提你并不知道陷阱类型，可以丢鞋试雷，两只丢完了就要以身试险（或让别人先走？红色陷阱必死，黄色陷阱可以躲，找到绿色出口即为胜利，（会玩扫雷且脸不太黑一般都可以过关大概吧 ，一人玩有点无聊，和基友一起会好点？房间最多8人，线上模式晚上人多有点意思，建议打折入"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/b2/b22772eb38a44dcd4ae7e97419fc331966b95b9d.jpg",time:1.5,comment:"goodgame"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/84/8437000be2bf7eb7f09fbdef4e48363918db4659.jpg",time:2.2,comment:"好玩，完完全全可以拿来和朋友撕逼。而且前天和散人玩的好开心。"}]
    }) }
    else if (this.data.id == 5) { this.setData({ url: "http://cdn.steamstatic.com.8686c.com/steam/apps/2038661/movie480.webm?t=1447373137", 
        txt:"《桌面地下城》是一款由QCF Design制作发行奇幻背景的快节奏roguelike解密游戏。 游戏中，你将扮演一位王国的管理者，派遣不同种族、职业的英雄前往各种各样的地下城冒险，挑战种类繁多，特性不一的敌人，同时利用所获取的资源逐步将王国发展壮大。",
        configuration:"操作系统: Windows XP处理器: 1.2GHz内存: 1 GB RAM图形: any Direct3D 9 cardDirectX 版本: 9.0c存储空间: 需要 350 MB 可用空间",
        gamecomment: [
        {img:'http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/fb/fbcbda431354026f55bf6e5ee24b891bdc260681.jpg', time:17.0, comment:'惊了 下周终于要上官中了，有生之年系列啊，撒花撒花，感谢谜叔感谢制作组'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",time:8.8,comment:'迷之声：这个游戏出了四年，我玩了七年。游戏下周会出官方中文。现在已经有游戏的玩家，在Steam里右键点游戏的“属性”，选择“测试”选项卡，在测试许可代码中输入testlocalization，然后选择“locbeta”这一测试版本，可以现在玩到中文版。'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/ad/ad4d658df15e68ccafaa9f7752dcd785965b62af.jpg",time:6.7,comment:"我为谜叔续一根"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/55/550fa5cdeb39014c8651a5fc18ab37f1adb77e16.jpg",time:17.2,comment:"竟然更新了中文！！我最喜欢的地牢探险RPG！疯狂安利去了！DEAR DEVS and THE TRANSLATION TEAM IN CHINA~ THANKS A LOT FOR CHINESE UPDATE! I'M GONNA ASK ALL MY FRIENDS BUY THIS GAME,'CAUSE I REALLY LOVE IT!有些朋友问怎么调中文：进入游戏主菜单那里，选language选项，再选simplified chinese就是中文啦~"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/2c/2c046874d4f93350fcb3431a2d647ec1db43f744.jpg",time:19.4,comment:"通过谜叔入坑之后简直停不下来。入手三四天玩了16个小时-= =刚开始不熟悉的时候会感觉各种别扭。强烈推荐过完新手教程之后，去玩探索屋的谜题。能很快的上手游戏，而且这些谜题,玩起来和做高数一样有成就感2333顺便下谜叔给出的测试汉化steam右键属性，选择测试。测试许可代码输入 testlocalization。然后选择 locbeta。 ！！这时候进游戏还是英文，退出主页面之后选择language，然后选择chinese就可以啦。"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/2e/2ec96e485a32caaf7e6d1d46147f2f2f0e1a582f.jpg",time:16.3,comment:"动脑子好难哦，感谢谜叔推荐的游戏，挺有趣的"}]
    }) }
    else if (this.data.id == 6) { this.setData({ url: "http://cdn.steamstatic.com.8686c.com/steam/apps/256676514/movie480.webm?t=1481816520", 
        txt:"Earthlock is an indie developed, adventure RPG inspired by the classic 3D RPGs of the late 90's, with a fresh take on turn based combat and character progression.",
         configuration:"操作系统: Windows 7 or newer处理器: x86 Quad Core 3.4GHz or greater内存: 4 GB RAM图形: DirectX 11 GPU with 2GB of memory存储空间: 需要 5 GB 可用空间",
        gamecomment: [
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/d8/d815930d067ca29be7b63b72cb7f32593b9b9e07.jpg", time:3.0, comment:'以这款游戏的机翻中文做类比，它的UI、战斗机制、战斗画面、角色移动方式等等同样生硬且吊诡。如果你是玩惯JRPG的老司机，玩它的过程就如同把车开到了沟里。我承认我很主观。当我刚刚通过教学战，反复纠结着要不要把语言改为非母语的时候，发现自己的耐心已被耗尽。即使在打折期也不推荐入手。'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",time:0.4,comment:'第一遍通关，写点自己的看法。首先从游戏画风上看，像古董风格的游戏，画风简单，特别是大场景，人物画的不错但做的效果不咋地，而且npc除了主要流程和商店有实质性的内容，其他的都是摆设和无聊的对话。然后看看剧情，基本没什么剧情，简单就是一个年轻人和一群朋友拯救世界的故事。再看看战斗风格，游戏是回合制的战斗，野外遇敌，你可以引怪一个个打，也可以多引一起解决，但是最多一次战斗打8个怪。而且人物技能缺乏群体伤害，唯一的角色带群伤的是个狗（母的），但是游戏的计算群伤机制还有问题，举个例子群伤1000的伤害，如果是5个敌人，每人就200，如果是一个人就1000，可以说不是群伤技能~~~，游戏中任意2个角色都可以组队，不同的组队通过升级打怪可以得到不同的被动效果，同时还有组队能量，每个角色都有特殊攻击，组队能量满了可以发动，多怪练级适当使用角色特别技能，可以加快速度，因为这些技能大部分都是群体buff或群体aoe，练级中适当使用猪兔角色的烟雾（翻译有误）应该是混乱，可以轻松点。游戏的怪物机制，怪物有人形，植物，野兽，幽灵他们带属性的就是风，火，电，水，冰和土循环相克，游戏中有怪兽资料，可以查看，找到弱点打着方便，物理攻击有爆破，压碎，挥砍，穿刺，其中没有弱点的同时也没有增强，幽灵弱治疗。角色特点，开始给了的角色如果不特别去练，基本用到最后，因为角色一共6个，其中有两个后出来，角色等级远远落于前4个，基本用不上。角色战斗中有两种姿态，主角男女两种姿态分别是近战和远程而且都带盗取技能（战斗中获取怪物身上的而外物品和钱）建议前期都用近战形态，男的已盗取为主，后期男的改远程，女的用近战，辅助性角色一个猪兔，加血和控制战场（小怪）控制对boss战不好使，机器人，加防御（物理）和控制战场（对小怪），狗，法术攻击和加防御（魔法），还有一个纯物理攻击的角色，没啥用~~角色装备，可以说基本没装备，就是靠级别碾压和武器弹药升级，武器的弹药（远程）分为3级，但要获取，通过一个在神秘岛屿上的田地种出来，就和我们长玩的种地类似。角色技能，通过升级和获得道具卡牌来实现，卡牌分为技能卡（战斗中可以使用的技能），被动一般卡（增加物理、魔法伤害，暴击率，闪避，物理和魔法防御，暴击倍数，精准），被动特殊卡（通过boss战和开宝箱获得，获得后可在神秘岛祭坛反复制作）介绍几个实用特殊卡牌（增加元素抗性25%的卡牌，在战沙场，每次战斗中死亡可复活一次，被攻击结合率提高的卡牌，远程弹药伤害加25%的卡牌）这个游戏总体看中等偏上，个人感觉~'},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/2c/2cd6eadd05f0139924859c8ac6cb63076d6d0555.jpg",time:29.7,comment:"回合制，导致我放弃了他"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/ef/ef8dd0d57af768cc80c14753f0f0a0bcf57e210e.jpg",time:0.9,comment:"这游戏。。。好玩的我都退款了。。。。"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/ef/ef8dd0d57af768cc80c14753f0f0a0bcf57e210e.jpg",time:0.3,comment:"什么情况不能保存？我从头开始玩了三遍"},
        {img:"http://cdn.steamstatic.com.8686c.com/steamcommunity/public/images/avatars/81/81768d4e1762ca690c775fd4c01a76d3347e022d.jpg",time:0.5,comment:"11月底时更新了简体中文，先说翻译质量，可以说是原文直译，整体翻译质量中等，属于能看懂的水平。世界设定是魔法与机械共存，正如介绍说的是传统回合制RPG系统还有点意思，类似FF10那水晶盘，而技能又需要各种素材，还有种田什么的。BGM挺不错，感觉适合出到掌机上，例如明年3月的nintendo switch"}]
         }) }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.gamecomment)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})