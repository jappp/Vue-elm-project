<style lang="stylus" rel="stylesheet">
  @import "../../common/stylus/mixin.styl";
  .star
    .star-48
      height: 20px
      float: left
      & > li
        float:left
        width: 20px
        height: 20px
        background-size: 20px 20px
        margin-right: 22px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    .star-36
      height: 15px
      float: left
      & > li
        float:left
        width: 15px
        height: 15px
        background-size: 15px 15px
        margin-right: 6px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    .star-24
      height: 10px
      float: left
      & > li
        float:left
        width: 10px
        height: 10px
        background-size: 10px 10px
        margin-right: 3px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>

<template>
  <div class="star">
    <ul :class="sizeClass">
      <!--item 要么是on half off-->
      <li v-for="item in itemClasses" :class="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number
    },
    size: {
      type: Number
    }
  },
  computed: {
    sizeClass() {
      return 'star-' + this.size;
    },
    itemClasses() {
      let CLS_ON = 'on';
      let CLS_OFF = 'off';
      let CLS_HALF = 'half';
      let result = [];
      let score = parseInt(this.score);
      let hasHalf = (this.score - score) < 0.5;
      for (let i = 0; i < score; i++) {
        result.push(CLS_ON);
      }
      if (hasHalf) {
        result.push(CLS_HALF);
      }
      while (result.length < 5) {
        result.push(CLS_OFF);
      }
      return result;
    }
  }
};
</script>
