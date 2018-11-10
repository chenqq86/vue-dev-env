<template>
    <section class="main">
        <p>我来了{{name}}</p>
    </section>
</template>

<script>
export default {
    data () {
        return {
            name:"vue2 + webpack4 for"
        }
    }
}
</script>

<style lang="scss">
@import '~@/assets/style/common.scss';
$fontColor: blue;
.main{
  p{
    color: $fontColor;
  }
}
</style>
