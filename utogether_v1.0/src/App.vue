<template>
  <div id="app">
  <router-view></router-view>
  <Tabbar></Tabbar>
  <div class="empty"></div>
  </div>
</template>

<script>
export default {
    created () {
    // 调用API从本地缓存中获取数据
        const logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);

        console.log('app created and cache logs by setStorageSync');
    }
};
</script>

<style>
/*@import "/static/iconfont/iconfont.css";*/
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
