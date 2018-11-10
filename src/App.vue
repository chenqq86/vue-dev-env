<template>

    <section class="main">
         <img src="./assets/images/login.png">
        <p>我来了{{name}}</p>
        <div class="imgBg"></div>
        <a-button type="primary">Button</a-button>
    </section>
</template>

<script>
export default {
    data () {
        return {
            name: "vue2 + webpack4 for test"
        }
    }
}
</script>

<style lang="scss">
@import '~@/assets/style/common.scss';

$fontColor: blue;
.main{
  p{
    font-size: 16px;
    color: $fontColor;
  }
  .imgBg{
    display:inline-block;
    height: 100px;
    width: 200px;
    background-color:red;
  }
}
</style>
