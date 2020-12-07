// 因为此插件是依赖于jQuery,所有要确保jQuery库提前引入
if(typeof jQuery === "undefined" ){
    throw new Error("请先引入jQuery库,再重试");
}

// 使用jQuery提供的插件机制封装方法提供jQuery对象调用
$.fn.extend({
    "quanxuan":function(){
        this.prop("checked",true);
    },
    "quanbuxuan":function(){
        this.prop("checked",false);
    },
    "fanxuan":function(){
        $.each(this,function(index,item){
            $(this).prop("checked", !$(this).prop("checked") );
        })
    },
});