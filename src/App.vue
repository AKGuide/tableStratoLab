<template>
    <div id="app" class="h-full flex items-center justify-center bg-white pb-24 pt-24">
        <tablePrice></tablePrice>

        <!--<alive-check></alive-check>-->
        <!--<filter-of-proxies></filter-of-proxies>-->
    </div>
</template>

<script>
import TablePrice from './StratoLab/tablePrice.vue';

export default {
  components: { TablePrice },

};
</script>

<style lang="less">
    @import "./style/app";
</style>
