<template>
  <div id="app">
    <input style="display: inline-block; width: 200px; height: 38px; line-height: 38px; color: #ff8900; font-size: 18px; margin: 20px 0;" type="text" v-model="totalNum" placeholder="测试......">
    <div style="width: 330px;">
      <num-panel :outterWrapperWidth='outterWidth' keyHeight="76" RadiusNum="4" :marginHorizontal="marginHorizontal" @outputNumber="checkout" @clearNum="clear"></num-panel>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      totalNum: '',
      outterWidth: 330,
      marginHorizontal: 15
    }
  },
  methods: {
    checkout(num) {
      this.totalNum = num
    },
    clear() {
      this.totalNum = ''
    }
  }
}
</script>

<style>
 #app {
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
 }
</style>
