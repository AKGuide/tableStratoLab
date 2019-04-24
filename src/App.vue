<template>
    <div id="app" class="h-full flex items-center justify-center bg-white pb-24 pt-24">
        <!--<alive-check></alive-check>-->
        <filter-of-proxies></filter-of-proxies>
    </div>
</template>

<script>
    import FilterOfProxies from "./neKidaemTest/filterOfProxies";
    import AliveCheck from "./components/neKidaem/setsOfProxies";
    export default {
        components: {AliveCheck, FilterOfProxies}

    }
</script>

<style lang="less">
    @import "./style/app";
</style>