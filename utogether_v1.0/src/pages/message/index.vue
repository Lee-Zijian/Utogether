<template>
    <div>
<!--        <section class="sec-nav">
            <navigationBar :title="消息"
            :navBackgroundColor="'light'"
            :titleColor="'red'"
            :back-visible="true"
            :home-path="'/pages/index/main'"></navigationBar>
        </section>
-->
<!--        <van-search :value="value" placeholder="请输入搜索关键词" />    -->
<!--        <topNavigationBar></topNavigationBar>   -->
        <section class="content">
            <switchTab></switchTab>
<!--            <van-tabs>
                <van-tab title="标签 1" @click="changeTab(1)">123</van-tab>
                <van-tab title="标签 2" @click="changeTab(2)">内容 2</van-tab>
            </van-tabs>
-->
        </section>
<!--        <bottomNaviBar></bottomNaviBar>         -->
        <bottomNavigation></bottomNavigation>
<!--        <tabBar></tabBar>                       -->
    </div>
</template>

<script>
//import navigationBar from '../../components/navigationBar.vue';
import topNavigationBar from '../../components/topNavigationBar.vue';
import bottomNavigation from '../../components/bottomNavigation.vue';
import card from '../../components/card_static.vue';
import bottomNaviBar from '../../components/bottom_tabbar.vue';
//import tabBar from '../../components/tab_bar';
import switchTab from '../../components/switch_tab.vue';
export default {
    components: {
        topNavigationBar,
        bottomNavigation,
        card,
        bottomNaviBar,
        switchTab,
    },
    data () {
        return  {
            navigationBarTitle: 'Utogother',
            tab:1
        };
    },
    methods: {
        changeTab(index) {
            this.tab=index;
        }
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
    padding-top: 100rpx;
}
</style>
