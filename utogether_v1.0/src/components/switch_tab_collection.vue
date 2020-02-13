<template>
    <div class="test">
        <div class="testNav">
            <div :class="{'selected':tab == 1,'testTitle':true}" @click="changTab(1)">活动</div>
            <div :class="{'selected':tab == 2,'testTitle':true}" @click="changTab(2)">用户</div>
        </div>
        <div>
            <div v-if="tab==2">
                <div class="card">
                    <div class="card__content1">
                        <div class="card__content1Left">
                            <img class="content1__img" src="/static/icons/nanyi.png">
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
                        </div>

                        <div class="content1__collection">
                            <img class="content1__collectionImg" src="/static/icons/yishoucang.png">
                        </div>                        
                    </div>
                </div>

                <div class="divider"></div>

                <div class="card">
                    <div class="card__content1">
                        <div class="card__content1Left">
                            <img class="content1__img" src="/static/icons/nanhaizi.png">
                            <div class="content1__nameAndRate">
                                <div class="content1__name">
                                    杨总2
                                </div>
                                <van-rate 
                                    :value="value2" 
                                    :size="10"
                                    allow-half
                                    color="#f54b70"
                                    void-color="#eee"
                                    void-icon="star"
                                    @change="onChange" />
                                <div class="content1__rateNum" v-text="value2">
                                </div>
                            </div>    
                        </div>

                        <div class="content1__collection">
                            <img class="content1__collectionImg" src="/static/icons/yishoucang.png">
                        </div>
                    </div>
                </div>

                <div class="divider"></div>
            </div>
                
            <div v-else>
                <div class="card2">
                    <div class="card__content1">
                        <div class="card__content1Left">
                            <img class="content1__img" src="/static/icons/nanyi.png">
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
                        </div>

                        <div class="content1__deleteAndDate">
                            <img class="content1__delete" src="/static/icons/shanchu.png">

                            <div class="content1__date" v-text="content_date">
                            </div>
                        </div>
                    </div>

                    <div class="card2__content3">
                        <img class="content3__img" src="/static/icons/nvyi.png">

                        <div class="content3__name">
                            杨总1：
                        </div>

                        <div class="content3__descAll">
                            <div class="content3__desc" v-text="descTitle"></div>
                            <div class="content3__desc" v-text="descDate"></div>
                            <div class="content3__desc" v-text="descLocation"></div>
                        </div>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="card2">
                    <div class="card__content1">
                        <div class="card__content1Left">
                            <img class="content1__img" src="/static/icons/nanyi.png">
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
                        </div>

                        <div class="content1__deleteAndDate">
                            <img class="content1__delete" src="/static/icons/shanchu.png">

                            <div class="content1__date" v-text="content_date">
                            </div>
                        </div>
                    </div>

                    <div class="card2__content3">
                        <img class="content3__img" src="/static/icons/nvyi.png">

                        <div class="content3__name">
                            杨总1：
                        </div>

                        <div class="content3__descAll">
                            <div class="content3__desc" v-text="descTitle"></div>
                            <div class="content3__desc" v-text="descDate"></div>
                            <div class="content3__desc" v-text="descLocation"></div>
                        </div>
                    </div>
                </div>

                <div class="divider"></div>
            </div>
            <img class="background__logo" src="/static/images/page-logo.png">
        </div>
    </div>  
</template>

<script>
    export default {
        data() {
            return {
                tab: 1,
                value1: 4.5,
                value2: 5.0,
                content_event: "评论了你",
                content_event2: "申请加入活动",
                content_event3: "同意你的申请",
                content_date: "今天19:26",
                comment:"Sir Yang No.1",
                descTitle:"考研英语",
                descDate:"8.16-8.18",
                descLocation:"图书馆"
            };
        },
        methods: {
            changTab(index) {
                this.tab = index;
            },
            onChange(event){
                this.setData({
                    value: event.detail
                });
            },
        }
    };
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
}
.card{position:relative;
    height:50px;
/*    padding:5px 5px;*/
    margin-top:5px;
    background-color:#ffffff;
}
.card2{position:relative;
    height:115px;
/*    padding:5px 5px;*/
    margin-top:5px;
    background-color:#ffffff;
}
.card__content1 {
    position: relative;
    display:flex;
    flex-flow:row;
    justify-content: space-between;
    height:50px;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #ffffff;
}
.card__content1Left{
    position:relative;
    display:flex;
    flex-flow:row;
}
.card__content2 {
    position: relative;
    display: flex;
    flex-flow: row;
    height:25px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 65px;
    margin-right: 65px;
    background-color:#ffffff;
}
.card__content3 {
    position: relative;
    display: flex;
    flex-flow: row;
    height:50px;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 65px;
    margin-right: 15px;
    border-radius: 6px;
    background-color: #f4f4f4;
}
.card2__content3 {
    position: relative;
    display: flex;
    flex-flow: row;
    height:50px;
    margin-top: 8px;
    margin-bottom: 2px;
    margin-left: 65px;
    margin-right: 15px;
    border-radius: 6px;
    background-color: #f4f4f4;
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
.content1__event{
    position:relative;
    align-self: center;
    font-size:14px;
    color:#383838;
}
.content1__deleteAndDate{
    position:relative;
    display:flex;
    flex-flow: column;
    justify-content: space-between;
}
.content1__collection{
    position:relative;
    display:flex;
    margin-right:30px;
}
.content1__collectionImg{
    position:relative;
    align-self: center;
    width:40px;
    height:20px;
}
.content1__delete{
    position:relative;
    align-self: flex-end;
    width:15px;
    height:15px;
}
.content1__date{
    position:relative;
    font-size:9px;
    color:#383838;
}
.content2__comment{
    position: relative;
    font-size:18px;
    color:#383838;
}
.content3__img{
    position:relative;
    width: 40px;
    height: 40px;
    margin-left: 5px;
    margin-right: 10px;
    align-self: center;
    background-color: #ffffff;
}
.content3__name{
    position:relative;
    margin-top:5px;
    font-size:12px;
    color:#692525;
}
.content3__descAll{
    position:relative;
    display:flex;
    flex-flow: column;
}
.content3__desc{
    position:relative;
    font-size:12px;
    color:#383838;
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
.test {
    width: 100%;
    .testNav {
        padding: 0 20rpx;
        height: 80rpx;
        line-height: 80rpx;
        display: flex;
        .testTitle {
            flex: 1;
            text-align: center;
        }
        .selected {
            width: 50%;
            color: #f84a63;
            border-bottom: 2px solid #f84a63;
        }
    }
}
.card__header{display:-webkit-flex;display:flex;flex-flow:row}
.card__header--center{-webkit-align-items:center;
    display:flex;
    flex-flow:row;
    align-items:center;
    -webkit-justify-content:center;
    justify-content:center}
.card__thumb:empty{display:none}
.card__img{width:100%;height:100%}
.card__content{position:relative;    
    -webkit-flex:1;
    flex:1;
    min-width:0}
.card__desc,.van-card__title{word-wrap:break-word}
.card__title{font-weight:700;
    padding-top:10px;
    font-size:20px;
    text-align:center;
    line-height:16px;
    line-height:var(--card-title-line-height,16px)}
.card__desc{line-height:40px;
    line-height:var(--card-desc-line-height,40px);
    font-size:14px;
    text-align:center;
    color:#8f8b8b;
    color:var(--card-desc-color,#8f8b8b)}
.card__desc2{line-height:4px;
    line-height:var(--card-desc-line-height,4px);
    font-size:14px;
    text-align:center;
    color:#8f8b8b;
    color:var(--card-desc-color,#8f8b8b)}
.card__desc3{line-height:40px;
    line-height:var(--card-desc-line-height,40px);
    font-size:12px;
    text-align:center;
    color:#8f8b8b;
    color:var(--card-desc-color,#8f8b8b)}
.card__thumb2{position:relative;
    -webkit-flex:none;
    flex:none;width:20px;
    width:var(--card-thumb-size,20px);
    height:20px;
    height:var(--card-thumb-size,20px);
    margin-right:8px;
    margin-right:var(--padding-xs,8px)}
.card__thumb2:empty{display:none}
.card__img2{width:100%;height:100%}
.card__thumb3{position:relative;
    width:20px;
/*    padding-top:134px; */
    width:var(--card-thumb-size,20px);
    height:20px;
    height:var(--card-thumb-size,20px);
    margin-right:3px;
    margin-right:var(--padding-xs,3px)}
.card__thumb3:empty{display:none}
.card__participants{
    position:relative;
    display:flex;
    flex-flow:row;
    margin-left:0px;
    margin-left:var(--padding-xs,0px)
}
.card__img3{width:100%;height:100%}
.card__thumb4{position:relative;
    width:20px;
    width:var(--card-thumb-size,20px);
    height:20px;
    height:var(--card-thumb-size,20px);
    margin-right:10px;
    margin-right:var(--padding-xs,10px)}
.card__thumb4:empty{display:none}
.card__img4{width:100%;height:100%}
.card__button4{
    position:relative;
    display:flex;
    flex-flow:row;
    margin-right:0px;
    margin-right:var(--padding-xs,0px)
}
.card__desc4{line-height:2px;
    line-height:var(--card-desc-line-height,2px);
    margin-top: 10px;
/*    padding-top:153px;*/
    font-size:10px;
    text-align:left;
    color:#8f8b8b;
    color:var(--card-desc-color,#8f8b8b)}
.card__bottom{line-height:20px}
.card__price{display:inline-block;
    font-weight:700;
    color:#ee0a24;
    color:var(--card-price-color,#ee0a24)}
.card__origin-price{display:inline-block;
    margin-left:5px;
    text-decoration:line-through;
    font-size:10px;font-size:var(--card-origin-price-font-size,10px);
    color:#646566;
    color:var(--card-origin-price-color,#646566)}
.card__num{float:right}
.card__tag{position:absolute;top:2px;left:0}
.card__footer{
    display:flex;
    flex-flow:row;
    width:100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    text-align:right}
</style>
