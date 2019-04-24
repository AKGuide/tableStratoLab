<template>
    <div class="mx-auto flex relative bg-white overflow-hidden"
         :style="{'width': `${1920*zoom}px`, 'height': `${1080*zoom}px`}"
    >
        <div class="w-full h-full relative">
            <div class="absolute flex items-end"
                 :style="{'width': `${1715*zoom}px`,'height': `${76*zoom}px`, 'bottom': `${272*zoom}px`, 'left': `${205*zoom}px`}"
            >
                <img src="../../assets/Auth/Login/long-bottom.png"
                     :style="{'width': `${1410*zoom}px`,'height': `${76*zoom}px`}"
                >
                <div style="background: #dfe7f5"
                     :style="{'height': `${5*zoom}px`, width: `${305*zoom}px`}"
                ></div>
            </div>

            <div class="absolute w-full" style="background: #F7F7F7"
                 :style="{'height': `${28*zoom}px`, 'bottom': `${67*zoom}px`}"
            ></div>
            <img class="absolute"
                 style="transform-origin: bottom center;"
                 :style="{'width': `${526*zoom}px`, 'top': `${350*zoom}px`, 'left': `${0*zoom}px`}"
                 src="../../assets/Auth/Login/lines.png">
            <img class="absolute"
                 style="transform-origin: bottom center;"
                 :style="{'width': `${526*zoom}px`, 'top': `${100*zoom}px`, 'right': `${0*zoom}px`}"
                 src="../../assets/Auth/Login/lines.png">

            <!--<img class="absolute atm"-->
                 <!--style="transform-origin: bottom center;"-->
                 <!--:style="{'width': `${254*zoom}px`, 'bottom': `${64*zoom}px`, 'right': `${80*zoom}px`}"-->
                 <!--src="../../assets/Auth/Login/atm.png"-->
            <!--&gt;-->
            <!--<img class="absolute table"-->
                 <!--style="left: 50%; transform-origin: bottom center; transform: translateX(-50%)"-->
                 <!--:style="{'width': `${318*zoom}px`, 'bottom': `${64*zoom}px`}"-->
                 <!--src="../../assets/Auth/Login/pc.png">-->
            <!--<img class="absolute server" style="transform-origin: bottom left;"-->
                 <!--:style="{'width': `${154*zoom}px`, 'left': `${80*zoom}px`, 'top': `${64*zoom}px` }"-->
                 <!--src="../../assets/Auth/Login/server.png"-->
            <!--&gt;-->
            <!--<img class="absolute" style="transform-origin: bottom left;"-->
                 <!--:style="{'width': `${289*zoom}px`, 'bottom': `${64*zoom}px`, 'left': `${80*zoom}px`}"-->
                 <!--src="../../assets/Auth/Login/data.png">-->

            <!--<img class="absolute chart"-->
                 <!--:style="{'width': `${284*zoom}px`, 'top': `${350*zoom}px`, 'right': `${80*zoom}px`}"-->
                 <!--style="transform-origin: bottom center; transform: translateY(-50%)"-->
                 <!--src="../../assets/Auth/Login/chart.png">-->

            <div class="absolute w-full" style="bottom: 0; background: #e8f0ff"
                 :style="{'height': `${67*zoom}px`}"
            ></div>
        </div>

        <div class="absolute h-32 border" style="border-color: #846db4"
             :style="{'width': `${1037*zoom}px`, 'border-radius': `${20*zoom}px`,'height': `${630*zoom}px`, 'left': `${358*zoom}px`, 'top': `${80*zoom}px`, 'border-width': `${11*zoom}px`}"
        >
            <form class="w-full mt-8" @submit.prevent="auth" :style="{'transform': `scale(${Math.max(0.8, zoom)})`}">
                <h1 class="text-center font-medium text-purple-lighter">Вход</h1>

                <div class="w-3/4 mx-auto">
                    <float-label-input v-model="form.email" placeholder="Email" type="email"
                                       icon="fas-user" :error="form.errors.first('email')"></float-label-input>

                    <float-label-input v-model="form.password" placeholder="Пароль" type="password"
                                       icon="fas-lock-alt"  :error="form.errors.first('password')"></float-label-input>

                    <custom-checkbox class="my-6 text-purple-light" v-model="form.remember">
                        Запомнить меня
                    </custom-checkbox>

                    <button
                        class="py-4 px-6 mt-6 rounded-lg text-xl bg-purple font-medium text-white hover:bg-purple-darker"
                        :class="{'bg-purple-light hover:bg-purple-light' : form.processing}"
                    >
                        <span v-if="form.processing">
                            <font-awesome-icon :icon="['far', 'spinner-third']" spin></font-awesome-icon>
                            Проверка реквизитов
                        </span>
                        <span v-else>Войти</span>

                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import zoomable from './zoomable';
import Form from 'form-backend-validation';
import FloatLabelInput from './controls/FloatLabelInput';
import CustomCheckbox from './controls/CustomCheckbox';

export default {
  components: { CustomCheckbox, FloatLabelInput },
  mixins: [zoomable],
  name: 'FormAuth',

  data() {
    return {
      form: new Form({ email: '', password: '', remember_me: false }),
    };
  },

  methods: {
    auth() {
      this.form.post('/login').then(() => {
        this.location.href = '/';
      });
    },
  },
};
</script>

<style>
    body {
        background: #e8f0ff;
    }
</style>

<style lang="less" scoped>
    .server {
        animation: server-animation 0.5s 1 0s ease-in-out;
    }

    .atm {
        animation: atm-animation 1.5s 1 0s ease-in-out;
    }

    .chart {
        animation: chart-animation 1s 1 0s ease-in-out;
    }

    .table {
        animation: table-animation 0.8s 1 0s ease-in-out;
    }

    @keyframes server-animation {
        0% {
            transform: translateX(-200%);
        }
        100% {
        }
    }

    @keyframes table-animation {
        0% {
            transform: translateX(-500%);
        }
        0% {
            transform: translateX(-500%);
        }
        100% {
        }
    }

    @keyframes chart-animation {
        0% {
            transform: translateY(-50%) scale(0);
        }
        50% {
            transform: translateY(-50%) scale(0);
        }
        100% {
            transform: translateY(-50%) scale(1);

        }
    }

    @keyframes atm-animation {
        0% {
            transform: translateX(900%);
        }
        100% {
            transform: translateX(0);
        }
    }

</style>
