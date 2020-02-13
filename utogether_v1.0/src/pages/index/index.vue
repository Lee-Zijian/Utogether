<template>
    <div>
        <section class="sec-nav">
            <navigationBar :title="navigationBarTitle"
            :navBackgroundColor="'light'"
            :titleColor="'red'"
            :back-visible="true"
            :home-path="'/pages/index/main'"></navigationBar>
        </section>
        <topNavigationBar></topNavigationBar>
        <section class="content">
            <navigator url="/pages/detail/main" hover-class="noshadow">
            <van-card
                date="8.16-8.18"
                locate="图书馆"
                title="考研英语"
                desc="12345jaksflkahgalj"
                thumb="/static/icons/nanhai.png"
                thumb2="/static/icons/sanjiao-down.png"
                boy_num="/static/icons/nanhaizi.png"
                girl_num="/static/icons/nvhaizi.png"
                like="/static/icons/thumbup.png"
                share="/static/icons/fenxiang.png"
                comment="/static/icons/anwer-ico.png"
                collection="/static/icons/collection1.png"
                post_date="今天18:21"
                >
            </van-card>
            </navigator>
        </section>
        <navigator url="/pages/post/main">
            <img class="post__logo" src="/static/icons/post_logo.png">
        </navigator>
<!--        <bottomNaviBar></bottomNaviBar>         -->
        <bottomNavigation></bottomNavigation>
<!--        <tabBar></tabBar>                       -->
    </div>
</template>

<script>
import navigationBar from '../../components/navigationBar.vue';
import topNavigationBar from '../../components/topNavigationBar.vue';
import bottomNavigation from '../../components/bottomNavigation.vue';
import card from '../../components/card_static.vue';
import bottomNaviBar from '../../components/bottom_tabbar.vue';
import tabBar from '../../components/tab_bar';
export default {
    components: {
        navigationBar,
        topNavigationBar,
        bottomNavigation,
        card,
        bottomNaviBar,
        tabBar,
    },
    data () {
        return  {
            navigationBarTitle: 'Utogother',
        };
    }
};
</script>
<style lang="scss" scoped>
.content {
    width: 100vw;
    height: 150vh;
    border: 1px solid white;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20rpx;
}
.post__logo{
    position: fixed;
    right:5%;
    bottom:10%;
    width:100rpx;
    height:100rpx;
    box-shadow: 1px 1px 5px 1px #dd5c5c;
    border-radius:100%;
}
.noshadow{
    hover-class:none;
}
</style>
