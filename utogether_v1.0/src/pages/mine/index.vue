<template>
    <div>
        <section class="content">
<!--            <switchTab></switchTab>     -->
            <div class="content1">
                <div class="content1__imageAndMotto">
                    <img class="content1__img" src="/static/icons/nanyi.png">

                    <div class="content1__motto" v-text="motto">
                    </div>
                </div>

                <div class="content1__nameAndRate">
                    <div class="content1__name">
                        杨总3
                    </div>
                    <van-rate 
                        :value="value" 
                        :size="10"
                        allow-half
                        color="#f54b70"
                        void-color="#eee"
                        void-icon="star"
                        @change="onChange" />
                    <div class="content1__rateNum" v-text="value">
                    </div>
                </div>                
            </div>

            <div class="divider">
            </div>

            <div class="content2">
                <div class="content__item">
                    <div class="content__symbolAndName">
                        <img class="content__symbol" src="/static/icons/chuangjian.png">

                        <div class="content__name">我创建的</div>
                    </div>

                    <img class="content__arrow" src="/static/icons/arrow.png">
                </div>

                <div class="content__item">
                    <div class="content__symbolAndName">
                        <img class="content__symbol" src="/static/icons/jiaru.png">

                        <div class="content__name">我加入的</div>
                    </div>

                    <img class="content__arrow" src="/static/icons/arrow.png">
                </div>

                <div class="content__item">
                    <div class="content__symbolAndName">
                        <img class="content__symbol" src="/static/icons/collection1.png">

                        <div class="content__name">我收藏的</div>
                    </div>

                    <img class="content__arrow" src="/static/icons/arrow.png">
                </div>
            </div>

            <div class="divider">
            </div>

            <div class="content3">
                <div class="content__item">
                    <div class="content__symbolAndName">
                        <img class="content__symbol" src="/static/icons/judge.png">

                        <div class="content__name">我评价的</div>
                    </div>

                    <img class="content__arrow" src="/static/icons/arrow.png">
                </div>

                <div class="content__item">
                    <div class="content__symbolAndName">
                        <img class="content__symbol" src="/static/icons/shoudaopingjia.png">

                        <div class="content__name">评价我的</div>
                    </div>

                    <img class="content__arrow" src="/static/icons/arrow.png">
                </div>
            </div>

            <div class="divider">
            </div>

            <div class="content4">
                <div class="content__item">
                    <div class="content__symbolAndName">
                        <img class="content__symbol" src="/static/icons/xuanyan.png">

                        <div class="content__name">个性标语</div>
                    </div>

                    <img class="content__arrow" src="/static/icons/arrow.png">
                </div>
            </div>

            <img class="background__logo" src="/static/images/page-logo.png">
        </section>
        <bottomNavigation></bottomNavigation>
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
            tab:1,
            motto: "Sir Yang No.1！！！",
            value: 5
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
    flex-flow: column;
}
.content1 {
    position: relative;
    display:flex;
    flex-flow:row;
    justify-content: space-between;
    height:80px;
    margin-top: 80px;
    margin-bottom: 5px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #ffffff;
}
.content1__imageAndMotto{
    position:relative;
    display:flex;
    flex-flow:row;
}
.content1__img{
    position:relative;
    width:60px;
    height:60px;
    margin-right:5px;
    align-self: center;
}
.content1__motto{
    position:relative;
    font-size:16px;
    align-self: center;
    color:#393939;
}
.content1__nameAndRate{
    position:relative;
    display:flex;
    flex-flow:column;
    margin-right: 5px;
    align-self: center;
}
.content1__name{
    position:relative;
    font-size:12px;
    color:#979797;
}
.content1__rateNum{
    position:relative;
    font-size:10px;
    color:#f54b70;
}

.content2 {
    position: relative;
    display:flex;
    flex-flow:column;
    justify-content: space-around;
    height:80px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #ffffff;
}

.content__item{
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}
.content__symbolAndName{
    position: relative;
    display: flex;
    flex-flow: row;
}
.content__symbol{
    position: relative;
    width:15px;
    height:15px;
    margin-right: 10px;
}
.content__name{
    position: relative;
    font-size: 14px;
    color: #393939;
}
.content__arrow{
    position:relative;
    width: 20px;
    height: 20px;
}

.content3 {
    position: relative;
    display:flex;
    flex-flow:column;
    justify-content: space-around;
    height:50px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #ffffff;
}

.content4 {
    position: relative;
    display:flex;
    flex-flow:column;
    height:40px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #ffffff;
}

.divider {
    position: relative;
    margin: 0 auto;
    width: 600px;
    height: 10px;
    background-color:#f4f4f4
}

.background__logo{
    position: fixed;
    left:44%;
    bottom:15%;
    width:15%;
    height:15%;
    opacity:0.1;
}
</style>
