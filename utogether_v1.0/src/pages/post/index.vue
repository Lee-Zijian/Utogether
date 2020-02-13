<template>
    <div class="total">
        <!-- 活动标题 -->
        <div class="glo">
            <img class="icon" src="/static/images/publish/biaoqian.png">
                <picker mode=selector @change="picker" class="input" :value="index"  :range="types">
                    <view>请选择：{{types[index]}}</view>
                </picker>
        </div>

        <!-- 活动标题 -->
        <div class="glo">
            <input class="input" v-model=act_title placeholder="请输入活动标题(不超过10字)"/>
            <img class="icon" src="/static/images/publish/biaoti.png">
        </div>

        <!-- 活动时间 -->
        <div class="glo">
            <input class="input" v-model=start_time placeholder="2019年10月12日">
        <!-- <input class="input" v-model=end_time placeholder="2019年10月14日"> -->
            <img class="icon" src="/static/images/publish/shijian.png">
        </div>

        <div class="glo">
        <!-- 活动地点 -->
            <input class="input" v-model=act_place placeholder="请输入活动地点"/>
            <img class="icon" src="/static/images/publish/didian.png">
        </div>

        <!-- 参与人数 -->
        <div class="glo">
            <input class="input" v-model=act_numop placeholder="请输入参与人数"/>
            <img class="icon" src="/static/images/publish/quntitezheng.png">
        </div>

        <!-- 联系方式 -->
        <div class="glo">
            <input class="input" v-model=act_contact placeholder="请输入你的联系方式"/>
            <img class="icon" src="/static/images/publish/weixin.png">
        </div>

        <!-- 活动详情 -->
        <div class="glo">
            <td><textarea class="input" v-model=act_detail placeholder="请输入活动详情"/></td>
            <td><img class="icon" src="/static/images/publish/xiangqing.png"></td>
        </div>
        <navigator url="/pages/index/main">
            <button class="button_pub" @click="_publish" >确认上传</button>
        </navigator>
        <!--<van-button type="default">hahahaha</van-button>-->
    </div>
</template>


<script>
export default{
    data () {
        return {
            index: 0,
            act_type:'',
            act_title: '',
            start_time: '',
            end_time:'',
            act_place: '',
            act_numop: '',
            act_contact: '',
            act_detail: '',
            types:["运动","旅行","学习"]
        };
    },
    methods: {
        picker(e){
            console.log('radio发生change事件，携带value值为：',e.mp.detail.value);
            this.index = e.mp.detail.value;
            this.act_type = this.types[this.index];
            console.log('radio发生change事件，携带value值为：',this.types[this.index]);
        },
        upload_data(){
            wx.uploadFile({
                url: 'https://String',
                filePath:'filePath',
                name:'name',
                // header: {}, // 设置请求的 header
                // formData: {}, // HTTP 请求中其他额外的 form data
                success: function(){
                    console.log('上传成功');
                },
                fail: function() {
                    // fail
                },
                complete: function() {
                    // complete
                }
            });
        }
    }
};
</script>

<style>
.total{
    padding-top:100rpx;
}

.icon{
    height:60rpx;
    width:60rpx;
    margin-left:100rpx;
}
.input{
    border-color:gray;
    border-style:solid;
    border-width:thin;
    float:right;
    font-size:15px;
    margin-right:100rpx;
    width:450rpx;
    border-radius:5px;
}
.glo{
    padding-bottom:30rpx;
}

.button_pub{
    color:white;
    text-align: left;
    font-size:13px;
    background-color:red;
    width:170rpx;
    height:70rpx;
    margin-left:42%;
    margin-top:300rpx;
}
</style>