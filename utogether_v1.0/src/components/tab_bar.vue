<template>
    <div class="tab-bar">
        <van-tabbar v-model="active" @change="change">
        <van-tabbar-item to="/pages/index/main" replace>
            <span>门店</span>
            <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active : icon.normal"
            >
        </van-tabbar-item>
      
        <van-tabbar-item to="/pages/index/main" replace>
            <span>我的</span>
            <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.myactive : icon.mynormal"
            >
        </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    props: {
        courrentTabBar: {
            type: String
        }
    },
    data () {
        return {
            active: '',
            icon: {
                normal: '/static/icons/market1.png',
                active: '/static/image/market2.png',
                gnnormal: '/static/image/market1.png',
                gnactive: '/static/image/market2.png',
                mynormal: '/static/image/to_do1.png',
                myactive: '/static/image/to_do2.png'
            }
        };
    },
    methods: {
    /**
     * tab栏的切换
     */
        change () {
            if (this.active === 0) {
                this.$router.push({
                    path: '/index',
                    replace: true
                });
            } else if (this.active === 1) {
                this.$router.push({
                    path: '/index',
                    replace: true
                });
            }   
        }
    },
//    mounted () {
    // 判断当前页面是否为home或newpersonal页面
//        const CURRENTTABBAR = window.location.hash.split('/')[1];
//        if (CURRENTTABBAR === 'Home') {
//            this.active = 0;
//        } else if (CURRENTTABBAR === 'NewPersonal') {
//            this.active = 1;
//        }
//    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tab-bar{
  height: 44px;
}
</style>
