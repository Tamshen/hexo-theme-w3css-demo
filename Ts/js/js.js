function menu_open() {
    document.getElementsByClassName("menu_link")[0].style.maxHeight = '1000px';
    document.getElementsByClassName("menubtn")[0].style.display = "none";
    document.getElementsByClassName("menubtnoff")[0].style.display = "block";
    //document.getElementById("scrollto").style.display = "block";
}
function menu_close() {
    document.getElementsByClassName("menubtnoff")[0].style.display = "none";
    document.getElementsByClassName("menubtn")[0].style.display = "block";
    document.getElementsByClassName("menu_link")[0].style.maxHeight = '0px';
}


function navlist(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}



/**bug:到底部会无限制触发*/
function gotow(ele,targetPageY,speed) {
    //检查是否设定速度
    if (!speed) {
        speed = 10;
    }
    //检查是否设定指定距离
    if (!targetPageY) {
        var curEle = document.querySelectorAll(ele)[0];
        var totalLeft = null;
        var totalTop = null;
        var par = curEle.offsetParent;
        totalLeft += curEle.offsetLeft;
        totalTop += curEle.offsetTop;
        while (par) {
            if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
                totalTop += par.clientTop;
                totalLeft += par.clientLeft;
            }
            totalTop += par.offsetTop;
            totalLeft += par.offsetLeft;
            par = par.offsetParent;
        }
        var targetPageY = totalTop;
    }
    var timer = setInterval(function() {
        var currentY = document.documentElement.scrollTop || document.body.scrollTop;
        var distance = targetPageY > currentY ? targetPageY - currentY : currentY - targetPageY;
        var speed = Math.ceil(distance / 10);
       
        if (currentY == targetPageY) {
            clearInterval(timer);
        } else {
            window.scrollTo(0, targetPageY > currentY ? currentY + speed : currentY - speed)
        }
    }, speed);
}


window.onscroll = function () {
    var scrollh = document.documentElement.scrollTop + document.body.scrollTop;
    var toc = document.getElementById("toc");


    if (scrollh > 100) {
        document.getElementById("scrollto").style.display = "block";
    }
    else {
        document.getElementById("scrollto").style.display = "none";
    }
    if(toc){
        if(scrollh > 666){
            toc.style.position = "fixed";
        }else{
            toc.style.position = "relative";
        }
    }
};



console.log("\n %c @TAMSHEN | https://github.com/Tamshen ","color:#ffffff;    background-image: linear-gradient(to right, #2aa8f2, #9db1fa);line-height: 3;padding:5px 0;border-radius:5px;")




//打开关闭搜索 old
function searchbtn(){
    var obj=document.getElementById('search'); 
    if(obj.style.display=="block"){
        obj.style.display="none";
    }else{
        obj.style.display="block";
        Searchtext.Searchtext.focus();
    }
	
}
//检测搜索字符
function SearchGet(){
	if(this.Searchtext.value.length == 0){
		alert("不能为空！");
		this.Searchtext.focus();
        return false;
	}
}

/**
 * 看图插件
 */
var if_id = document.getElementById("article_viewer");
if(if_id){
    var viewer = new Viewer(if_id, {
        url: 'src',
        toolbar: false,
        navbar: false,
        title: false
    });
}
