<template>
    <div>
        <section class="sec-nav">
            <navigation-bar :title="navigationBarTitle"
            :navBackgroundColor="'light'"
            :titleColor="'red'"
            :back-visible="false"
            :home-path="'/pages/index/main'"></navigation-bar>
        </section>
        <section class="content">
            这里是内容
        </section>
    </div>
</template>

<script>
import navigationBar from '../../components/navigationBar.vue';
export default {
    components: {
        navigationBar,
    },
    data () {
        return  {
            navigationBarTitle: 'Utogother'
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
    padding-top: 150rpx;
}
</style>
