<template>
    <div>
        <section class="sec-nav">
            <navigation-bar :title="navigationBarTitle"
            :navBackgroundColor="'light'"
            :titleColor="'red'"
            :back-visible="true"
            :home-path="'/pages/index/main'"></navigation-bar>
        </section>
        <van-search :value="value" placeholder="请输入搜索关键词" />
<!--        <topNavigationBar></topNavigationBar>   -->
        <section class="content">
            
        </section>
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
</style>
