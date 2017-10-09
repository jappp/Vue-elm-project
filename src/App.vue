<style lang="stylus" rel="stylesheet">
  @import 'common/stylus/mixin.styl'
  @import 'common/stylus/base.styl'
  .nav
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    text-align: center
    //border-bottom 1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7,17,27,0.1))
    .nav-item
      flex: 1
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)

</style>

<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="nav border-1px">
      <div class="nav-item">
      <router-link to="/goods" >商品</router-link>
      </div>
      <!--<div class="nav-item">-->
        <!--<router-link to="/ratings" class="nav-item">评论</router-link>-->
      <!--</div>-->
      <!--<div class="nav-item">-->
        <!--<router-link to="/seller" class="nav-item">商家</router-link>-->
      <!--</div>-->
    </div>
    <keep-alive>
    <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header';
  const ERROK = 0;
  export default {
    data() {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if (response.errno === ERROK) {
          this.seller = Object.assign({}, this.seller, response.data);
          console.log(this.seller);
        }
      });
    }
  };
</script>

