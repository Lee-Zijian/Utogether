<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index,item.name)"
    >
      <span :class="currIndex == index ? active:''">{{tabbars.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? tabbars.active : tabbars.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
    name: "bottom_tabbar",
    data() {
        return {
            currIndex: 0,
            active: 0,
            tabbars: [
                {
                    name: "集市",
                    title: "market",
                    normal: '/static/icons/market1.png',
                    active: '/static/icons/market2.png'
                },
                {
                    name: "to_do",
                    title: "待办",
                    normal: '/static/icons/to_do1.png',
                    active: '/static/icons/to_do2.png'
                },
                {
                    name: "message",
                    title: "消息",
                    normal: '/static/icons/message1.png',
                    active: '/static/icons/message2.png'
                },
                {
                    name: "collection",
                    title: "收藏",
                    normal: '/static/icons/collection1.png',
                    active: '/static/icons/collection2.png'
                },
            ]
        };
    },
    methods: {
        tab(index, val) {
            this.currIndex = index;
            this.$router.push(val);
        }
    }
};
</script>

<style lang="scss" scoped>
.active_tab img {
  width: 260px;
  height: 260px;
}

.van-tabbar-item--active {
  color: #e10f02;
}
</style>