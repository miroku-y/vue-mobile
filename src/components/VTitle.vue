<template>
  <div class="componentTitle">
    <div class="text">{{title}}</div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        title: 'title'
      }
    },
    props: ['pTitle'],
    created: function() {
      this.title = this.pTitle;
    }
  }
</script>

<style lang="less">
  .componentTitle {
    margin: 0.4rem 0;
    .text {
      font-size: 1.2rem;
      color: #2fa9f7;
      display: flex;
      align-items: center;
    }
    .text::before {
      content: '';
      display: block;
      width: 0.8rem;
      height: 1.3rem;
      background-color: #2fa9f7;
      margin-right: 1.3rem;
      margin-left: 1rem;
    }
  }
</style>

