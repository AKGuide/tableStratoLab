<template>
    <div id="app" class="h-full flex items-center justify-center">
        <component :is="layout">
            <router-view></router-view>
        </component>
        <notifications position="bottom center" width="80%" ></notifications>
    </div>
</template>

<script>
// export default {
//   computed: {
//     layout() {
//       const availableLayouts = ['auth', 'default', 'homepage', 'zeplin'];
//       const layout = availableLayouts.indexOf(this.$route.meta.layout) !== -1 ? this.$route.meta.layout : 'default';
//
//       return () => import(/* webpackChunkName: "layouts" */ `@/layouts/${layout}-layout.vue`);
//     },
//   },
// };
</script>

<style lang="less">
    @import "./style/app";
</style>
