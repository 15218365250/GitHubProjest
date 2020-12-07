
// 点击返回顶部功能
$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $(".backTop").css("display", "block");
    } else {
        $(".backTop").hide();
    }
})
$(".backTop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 3000)
})


// 鼠标移上商品分类列表显示商品
var datas = [
    ["Redmi 9", "腾讯黑鲨游戏手机3", "Redmi 8A", "小米移动 电话卡"],
    ["小米电视 大师 65英寸OLED", "小米电视5 75英寸", "全面屏电视Pro 55英寸", "小米电视4A 58英寸"],
    ["RedmiBook 13", "显示器"],
    ["冰箱", "微波炉", "电磁炉", "插线板"],
    ["手环5NFC", "滑板车", "无线车充"],
    ["打印机", "摄像机", "小爱音箱"],
    ["移动电源", "手机壳"],
    ["洗手机", "体脂称", "婴儿推车"],
    ["小爱音箱Art", "Redmi音箱", "蓝牙音箱"],
    ["小背包", "床垫", "驱蚊器"]
]
// 鼠标进入显示和创建
$(".nav_title li").mouseover(function () {
    $(".detail").show();
    // 获取当前点击元素下标
    var index = $(this).index();
    // 清空商品表格
    $(".nav .detail .item").empty();
    // 遍历数组中对应的下标元素
    datas[index].forEach(function (value) {
        // 每遍历一次清空一次html
        var html = "";
        // 遍历数组中对应的下标元素里的内容
        for (var i = 0; i < 6; i++) {
            html += `<li><a href="#"><img src="images/nav_imgs/${value}.png">${value}</a></li>`;
        }
        var ul = `<ul>${html}</ul>`;
        $(".detail .item").append(ul);
    })
})
// 鼠标离开隐藏
$(".banner").mouseleave(function () {
    $(".detail").hide();
})

// 类似选项卡点击切换功能
$(".title .nav a").eq(0).mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".content .right .show").show();
})
$(".title .nav a").eq(1).mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".content .right .hide").show();
    $(".content .right .show").hide();

})



// 点击滑动更商品功能(闪购)

var iflashbuyDatas = [
    {
        pro_name: "小米小爱音箱 Play（白色）量产版 白色",
        pro_desc: "听音乐、语音遥控家电",
        old_price: "99元",
        new_price: "169元"
    }, {
        pro_name: "米家扫拖一体机器人 白色",
        pro_desc: "扫得干净，拖得彻底",
        old_price: "1599元",
        new_price: "1999元"
    }, {
        pro_name: "小米米家智能门锁 标准碳素黑",
        pro_desc: "一体化活体指纹识别，多种开锁方式",
        old_price: "1199元",
        new_price: "1299元"
    }, {
        pro_name: "MIJOY 抽纸青春版 24包/箱 ",
        pro_desc: "精选原生竹浆，健康环保",
        old_price: "27.9元",
        new_price: "32.9元"
    }, {
        pro_name: "米家两门冰箱 160L 银色",
        pro_desc: "小巧能装，速冻养鲜",
        old_price: "929元",
        new_price: "1099元"
    }, {
        pro_name: "巨省电 | 小米新1级空调X 1.5匹",
        pro_desc: "变频节能巨省电，自清洁",
        old_price: "2099元",
        new_price: "2399元"
    }, {
        pro_name: "小米AI音箱",
        pro_desc: "听音乐、语音遥控家电",
        old_price: "199元",
        new_price: "299元"
    }, {
        pro_name: "17PIN 星果杯 樱花粉",
        pro_desc: "随心随行，悦饮随心",
        old_price: "99元",
        new_price: "139元"
    }, {
        pro_name: "小米移动电源10000mAh高配 灰色",
        pro_desc: "轻薄设计，轻松出行",
        old_price: "129元",
        new_price: "149元"
    }, {
        pro_name: "米家手持无线吸尘器1C 白色",
        pro_desc: "吸力续航双强劲，清洁小怪兽",
        old_price: "899元",
        new_price: "999元"
    }, {
        pro_name: "米家扫拖一体机器人 白色",
        pro_desc: "扫得干净，拖得彻底",
        old_price: "1599元",
        new_price: "1999元"
    }, {
        pro_name: "圈厨多功能涮烤锅 黑色火锅盘",
        pro_desc: "深浅双盘多用途",
        old_price: "329元",
        new_price: "399元"
    }, {
        pro_name: "米家落地扇 白色",
        pro_desc: "静享智能轻风",
        old_price: "199元",
        new_price: "219元"
    }, {
        pro_name: "小米曲面显示器 34英寸 黑",
        pro_desc: "超宽大环绕显示屏",
        old_price: "2199元",
        new_price: "2499元"
    }, {
        pro_name: "自清洁 | 米家互联网立式空调 2匹",
        pro_desc: "一级能效更省电，自清洁",
        old_price: "3499元",
        new_price: "4299元"
    }, {
        pro_name: "米家空气净化器Pro",
        pro_desc: "大空间，快循环",
        old_price: "999元",
        new_price: "1499元"
    }, {
        pro_name: "小米手环4 石墨黑",
        pro_desc: "大屏彩显，20天超长续航",
        old_price: "149元",
        new_price: "169元"
    }, {
        pro_name: "小米路由器4C 白色",
        pro_desc: "300M单频，高增益4天线",
        old_price: "59元",
        new_price: "99元"
    }, {
        pro_name: "Fun Home保温泡茶杯（茶水分离） 白色 520ml",
        pro_desc: "茶水分离，长效保温",
        old_price: "79元",
        new_price: "99元"
    }, {
        pro_name: "最生活毛巾·Air（10条装） 白色+素蓝",
        pro_desc: "给生活一条好毛巾",
        old_price: "99元",
        new_price: "169元"
    }, {
        pro_name: "Pinlo迷你三明治机 白色",
        pro_desc: "小巧身材，一机多用",
        old_price: "109元",
        new_price: "169元"
    }, {
        pro_name: "小米显示器1A 23.8英寸 黑色",
        pro_desc: "高清画质，超广视角",
        old_price: "679元",
        new_price: "699元"
    }, {
        pro_name: "小浪智能衣物消毒烘干机 白色 35L",
        pro_desc: "三重杀菌 柔热烘干",
        old_price: "489元",
        new_price: "549元"
    }, {
        pro_name: "小米米家智能门锁 磨砂金 霸王锁体 磨砂金",
        pro_desc: "适配霸王锁体，多种开锁方式",
        old_price: "1499元",
        new_price: "1799元"
    }, {
        pro_name: "8H多功能护颈枕U1 混灰色",
        pro_desc: "乳胶颗粒填充 ，舒适入睡",
        old_price: "69元",
        new_price: "79元"
    }, {
        pro_name: "悦米YM人体工学椅 白色",
        pro_desc: "健康坐姿，舒适体验",
        old_price: "1199元",
        new_price: "1499元"
    }, {
        pro_name: "米家扫拖机器人1C 白色",
        pro_desc: "能扫能拖，地面清洁交给我",
        old_price: "1199元",
        new_price: "1299元"
    }, {
        pro_name: "RedmiBook 16 i7 16G 512G MX350 灰色",
        pro_desc: "便携大屏，全“芯”超越",
        old_price: "5499元",
        new_price: "5699元"
    }, {
        pro_name: "最生活浴巾·Air（4条装） 白色+素蓝",
        pro_desc: "享用一条洁净好浴巾",
        old_price: "169元",
        new_price: "269元"
    }, {
        pro_name: "米家运动鞋4 花灰色 41",
        pro_desc: "轻盈若絮,弹若脱兔",
        old_price: "189元",
        new_price: "199元"
    }, {
        pro_name: "小米游戏鼠标 黑色",
        pro_desc: "掌中游戏利器，为真玩家而生",
        old_price: "169元",
        new_price: "199元"
    }, {
        pro_name: "小米手表 尊享版 曜石黑",
        pro_desc: "能打电话、能下载APP，才是真正的智能手表",
        old_price: "1799元",
        new_price: "1999元"
    }
];

iflashbuyDatas.forEach(function (value, index) {
    index = index < 9 ? "0" + (index + 1) : index + 1;
    var html = `<li>
                    <a href="#">
                        <img src="images/shangou/iflashbuy${index}.jpg">
                        <p class="biaoti">${value.pro_name}</p>
                        <p class="desc">${value.pro_desc}</p>
                        <p class="price">
                            <span>${value.old_price}</span>
                            <del>${value.new_price}</del>
                        </p>
                    </a>
                </li>`;
    $(".iflashbuy .content .right ul").append($(html));
})
var ulwidth = $(".iflashbuy .content .right ul li").outerWidth(true);
$(".iflashbuy .content .right ul").css("width", ulwidth * iflashbuyDatas.length);

var sumdir = 0;

var allLeft = iflashbuyDatas.length/4;
// 点击向左
$(".arrow .icon-arrow-left-copy").click(function () {
    if($(this).hasClass("disabled")){
        return false;
    }
    sumdir--;
    var friemLeft = $(".iflashbuy .content .right").outerWidth(true);
    if(sumdir==0){
        $(this).addClass("disabled");
    }else{
        $(this).siblings().removeClass("disabled");
    }
    $(".iflashbuy .content .right ul").stop().animate({"left": -friemLeft * sumdir},1000);
})
// 点击向右
$(".arrow .icon-left").click(function () {
    if($(this).hasClass("disabled")){
        return false;
    }
    sumdir++;
    if(sumdir==allLeft-1){
        $(this).addClass("disabled");
    }else{
        $(this).siblings().removeClass("disabled");
    }
    var friemLeft = $(".iflashbuy .content .right").outerWidth(true);
    $(".iflashbuy .content .right ul").stop().animate({"left": -friemLeft * sumdir},1000);
})

