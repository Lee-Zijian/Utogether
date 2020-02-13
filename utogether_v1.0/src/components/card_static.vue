<template>
  <div class="basic-box">
    <el-card>
      <slot></slot>
    </el-card>
  </div>
</template>
 
<script>
export default {
    name: "basicBox"
};
</script>
 
<style lang="scss" scoped>
.basic-box {
  border-radius: 10px;
  padding: 6px 8px 2px 8px;
  box-sizing: border-box;
  .el-card {
    width: 100%;
  }
}
</style>
