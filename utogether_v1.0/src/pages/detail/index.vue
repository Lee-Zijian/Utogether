<template>
    <div>
        <div class="detail">
            <div class="detail__content1">
                <img class="content1__img" src="/static/icons/nvhai.png">

                <div class="content1__nameAndRate">
                    <div class="content1__name">
                        杨总3
                    </div>
                    <van-rate 
                        :value="value1" 
                        :size="10"
                        allow-half
                        color="#f54b70"
                        void-color="#eee"
                        void-icon="star"
                        @change="onChange" />
                    <div class="content1__rateNum" v-text="value1">
                    </div>
                </div>

                <div class="content1__desc">
                    <div class="content1__title" v-text="descTitle">
                    </div>
                    <div class="content1__date" v-text="descDate">
                    </div>
                    <div class="content1__location" v-text="descLocation">
                    </div>
                </div>

                <img class="content1__downMenu" src="/static/icons/sanjiao-down.png">
                
            </div>


            <div class="detail__content2">
                <div class="content2__desc" v-html="desc">
                </div>

                <div class="content2__postDate" v-text="post_date">
                </div>
            </div>


            <div class="detail__content3">
                <div class="content3__button4">
                    <img class="content3__button" src="/static/icons/thumbup.png">
                    <img class="content3__button" src="/static/icons/anwer-ico.png">
                    <img class="content3__button" src="/static/icons/collection1.png">
                </div>

                <div class="content3__peopleNum">
                    <img class="content3__people" src="/static/icons/nanhai.png">
                    <img class="content3__people" src="/static/icons/nanhai.png">
                    <img class="content3__people" src="/static/icons/nvhai.png">
                </div>

                <div class="content3__readNum" v-text="readNum">
                </div>
            </div>


            <div class="detail__content4">
                <img class="content4__img" src="/static/icons/nanhai.png">

                <div class="content4__nameAndRate">
                    <div class="content4__name">
                        杨总3
                    </div>
                    <van-rate 
                        :value="value2" 
                        :size="8"
                        allow-half
                        color="#f54b70"
                        void-color="#eee"
                        void-icon="star"
                        @change="onChange" />
                    <div class="content4__rateNum" v-text="value2">
                    </div>
                </div>
            </div>


            <div class="detail__content5">
                <div class="content5__comment" v-text="content5_comment1">
                </div>

                <img class="content5__image" src="/static/icons/thumbup.png">
            </div>


            <div class="detail__content6">
                <img class="content6__img" src="/static/icons/nvhaizi.png">

                <div class="content6__nameAndRate">
                    <div class="content6__name">
                        杨总1 ▷ 杨总4
                    </div>
                    <van-rate 
                        :value="value3" 
                        :size="8"
                        allow-half
                        color="#f54b70"
                        void-color="#eee"
                        void-icon="star"
                        @change="onChange" />
                    <div class="content6__rateNum" v-text="value3">
                    </div>
                </div>
            </div>


            <div class="detail__content7">
                <div class="content7__comment" v-text="content7_comment1">
                </div>

                <img class="content7__image" src="/static/icons/thumbup.png">
            </div>

            <img class="background__logo" src="/static/images/page-logo.png">
        </div>


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
            tab: 1,
            value1: 4.5,
            value2: 5.0,
            value3: 3.5,
            descTitle:"考研英语",
            descDate:"8.16-8.18",
            descLocation:"图书馆",
            desc:"8月16日上午10点开始在图书馆学英语啊啊，<br>8月17日上午9点开始在图书馆学英语啊啊，<br>8月18日上午9点开始在图书馆学高......",
            post_date:"今天18:21",
            readNum:"浏览121次",
            content5_comment1:"我也是想在假期学英语呢，你是学雅思吗？",
            content7_comment1:"嗯嗯，是学雅思哒"
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
.detail{position:relative;
    height:400px;
/*    padding:5px 5px;*/
    margin-top:80px;
    background-color:#ffffff;
}
.detail__content1 {
    position: relative;
    display:flex;
    flex-flow:row;
//    justify-content: center;
    height:50px;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #ffffff;
}
.content1__img{position:relative;
    width:50px;
    height:50px;
    margin-right:2px;
    align-self: center;
}
.content1__nameAndRate{
    position:relative;
    display:flex;
    flex-flow:column;
    margin-right: 5px;
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
.content1__desc{
    position:relative;
    display:flex;
    flex-flow:column;
    margin-left:10px;
    margin-right:80px;
}
.content1__title{
    font-weight:700;
    margin-top:10px;
    font-size:20px;
    text-align:center;
    line-height:16px;
}
.content1__date{
    line-height:40px;
    font-size:14px;
    text-align:center;
    color:#8f8b8b;
}
.content1__location{
    line-height:4px;
    font-size:14px;
    text-align:center;
    color:#8f8b8b;
}
.content1__downMenu{
    position:relative;
    width:20px;
    height:20px;
}
.detail__content2 {
    position: relative;
    display: flex;
    flex-flow: column;
    height:65px;
    margin-top: 30px;
    margin-bottom: 8px;
    margin-left: 65px;
    margin-right: 65px;
    background-color:#ffffff;
}
.content2__desc{
    font-size:12px;
    color:#8f8b8b;
}
.content2__postDate{
    font-size:8px;
    color:#8f8b8b;
}
.detail__content3{
    position:relative;
    display: flex;
    flex-flow: column;
    height: 70px;
    margin-top: 5px;
    margin-bottom: 5px;
    align-items: flex-end;
    background-color: #ffffff;
}
.content3__button4{
    position:relative;
    display:flex;
    flex-flow:row;
}
.content3__button{
    position:relative;
    width: 20px;
    height: 20px;
    margin-right:10px;
}
.content3__peopleNum{
    position:relative;
    display:flex;
    flex-flow: row;
    margin-right:5px;
}
.content3__people{
    position:relative;
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
.content3__readNum{
    position:relative;
    font-size:10px;
    color:#8f8b8b;
    margin-right:10px;
}
.detail__content4{
    position:relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 65px;
    margin-right: 20px;
    background-color: #ffffff;
}
.content4__img{position:relative;
    width:40px;
    height:40px;
    margin-right:2px;
    align-self: center;
}
.content4__nameAndRate{
    position:relative;
    display:flex;
    flex-flow:column;
    margin-right: 5px;
}
.content4__name{
    position:relative;
    font-size:10px;
    color:#979797;
}
.content4__rateNum{
    position:relative;
    font-size:8px;
    color:#f54b70;
}
.detail__content5{
    position:relative;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    height: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left:110px;
    margin-right:20px;
    background-color: #ffffff;
}
.content5__comment{
    position:relative;
    font-size: 10px;
    color: #979797;
}
.content5__image{
    position:relative;
    width: 15px;
    height: 15px;
}
.detail__content6{
    position:relative;
    display:flex;
    flex-flow: row;
    height:30px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 110px;
    background-color: #ffffff;
}
.content6__img{position:relative;
    width:40px;
    height:40px;
    margin-right:2px;
    align-self: center;
}
.content6__nameAndRate{
    position:relative;
    display:flex;
    flex-flow:column;
    margin-right: 5px;
}
.content6__name{
    position:relative;
    font-size:10px;
    color:#979797;
}
.content6__rateNum{
    position:relative;
    font-size:8px;
    color:#f54b70;
}
.detail__content7{
    position:relative;
    display:flex;
    flex-flow: row;
    justify-content: space-between;
    height:30px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 160px;
    margin-right: 20px;
    background-color: #ffffff;    
}
.content7__comment{
    position:relative;
    font-size: 10px;
    color: #979797;
}
.content7__image{
    position:relative;
    width: 15px;
    height: 15px;
}
.background__logo{
    position: fixed;
    left:44%;
    bottom:15%;
    width:15%;
    height:15%;
    opacity:0.1;
}
.noshadow{
    hover-class:none;
}
</style>
