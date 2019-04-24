<template>
    <div class="viewedoptions">
        <div class="texthead">ПОДКЛЮЧАЕМЫЕ ОПЦИИ ПЛЕЕРА |</div>
        <div class="checkbox">Селектор</div>
        <select-player></select-player>
    </div>
</template>

<script>
    import SelectPlayer from "../Muvis/select-player";
    export default {
        name: 'Zeplin',
        components: {SelectPlayer},
    }
</script>

<style lang="scss">
    $color: red;
    @import "fons.scss";
    @font-face {
        font-family: "Roboto";
        src: url("https://rec.muvis.media/muvis/assets/fonts/RobotoRegular.eot");
        src: url("https://rec.muvis.media/muvis/assets/fonts/RobotoRegular.eot?#iefix")format("embedded-opentype"),
        url("https://rec.muvis.media/muvis/assets/fonts/RobotoRegular.woff") format("woff"),
        url("https://rec.muvis.media/muvis/assets/fonts/RobotoRegular.ttf") format("truetype");
        font-style: normal;
        font-weight: normal;
    }
    .viewedoptions {
        padding-left: 92px;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        width: 1337px;
        height: 780px;
        background: rgb(230, 230, 230);
        .texthead {
            font-weight: bold;
            font-size: 20px;
        }
        .checkbox {
            padding-bottom: 30px;
            padding-top: 15px;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 425px){
        .viewedoptions {
            background: red;
            width: 30%;
        }
    }

</style>