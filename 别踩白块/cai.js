window.onload = function () {

    // 封装获取元素函数
    function getselet(selet) {
        return document.querySelectorAll(selet);
    }

    // 获取随机数
    function getrandom() {
        // 随机数0~3
        var random = parseInt(Math.random() * 4);
        return random;
    }

    // 生成黑块
    var te = -100;
    var sum = 0;
    var set = false;
    function creatingBlack() {
        var operate = getselet(".box")[0];
        var ul = document.createElement("ul");
        var getnum = getrandom();
        var uls = getselet(".operateul");

        for (var i = 0; i < 4; i++) {
            var li = document.createElement("li");
            if (i == getnum) {
                li.className = "back";
            }
            ul.appendChild(li);
        }
        ul.className = "operateul";
        operate.insertBefore(ul, uls[0]);

        // 添加一个ul就把top往回拉
        te -= 100;
        operate.style.top = `${te / 4}%`;

    } creatingBlack();

    // 定时器
    var clear = null;
    function setTime() {
        clear = setInterval(function () {
            onclickget();
            console.log(sum);
            var operate = getselet(".box")[0];
            te += 1;
            operate.style.top = `${te / 4}%`;
            if (te >= 0) {
                creatingBlack();
            }
            if (operate.children.length > 8) {
                operate.children[operate.children.length - 1].remove();
            }
            overslaugh();
        }, 20);
    } setTime();


    // 点击事件函数

    function onclickget() {
        // 加分
        var mast = getselet(".mast")[0];
        // 点击消除黑块
        var lis = getselet(".operateul li");
        for (let i = 0; i < lis.length; i++) {
            lis[i].onclick = function () {
                if (!set) {
                    if (lis[i].className == "back") {
                        this.className = "";
                        sum++;
                    } else {
                        alert("结束游戏");
                        clearInterval(clear);
                        clear = null;
                        set = true;
                    }
                } else {
                    alert("结束游戏");
                    clearInterval(clear);
                    clear = null;
                    
                }
            }
        }
        // 计算分数
        mast.innerHTML = sum;
    }

    // 遗漏点击黑块，结束游戏
    function overslaugh() {
        var lis = getselet(".back");
        var lisTop = lis[lis.length - 1].offsetTop;
        if (lisTop == 400) {
            alert("结束");
            clearInterval(clear);
            clear = null;
        }

    }


}