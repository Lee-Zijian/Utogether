<template>
  <div class="container">
    <img class="toc_icon" :src="toc_icon">
    <div class="tt">{{title}}</div>
    <div class="slg">{{slogan}}</div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            title: '糖葫芦',
            slogan: '差你一个就成串儿',
            toc_icon: '/static/images/begin/start_logo.png'
        };
    },
    mounted(){
        setTimeout(()=>{
            wx.navigateTo({
                url:"/pages/index/main"
            });
        },3000);
    }
};
</script>

<style>
.container {
  background-color: #FFF;
  align-content: center;
  justify-content: center;
}


.toc_icon{
  height: 300rpx; 
  width: 300rpx; 
  margin-bottom:40rpx;
}


.tt{
  font-size:60rpx;
  text-align:center;
  margin-bottom:40rpx;
  font-family: STKaiti;
}


.slg{
  font-size:35rpx;
  text-align:center;
  font-family: STXinwei;
}
</style>
