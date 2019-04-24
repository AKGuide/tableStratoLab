<template>
    <div class="w-1/2 rounded-lg pl-3 p-3 flex shadow-lg">
        <div class="border-blue mt-4 border-solid border-r-2">
            <alive-check :proxy-store="proxyFiltered" @matchedProxy="teste" class="w-48 pr-3">
            </alive-check>
        </div>
        <div class="flex w-full flex-col items-center p-4 bg-white m-2">
            <div v-if="showError" class="w-3/4 flex flex-col items-center justify-center  h-full bg-grey-say pt-16 pl-5 pr-5 pb-6">

                    <div class="text-center">Данный тип Proxy не существует.<p>Измените введенные Вами значения</p> </div>
                    <button @click="repeat" class="border-2 border-solid mt-10 border-gray-say bg-white w-1/3 rounded-full hover:bg-blue" >повторить</button>

            </div>
            <div :key="key" v-for="(items, key ) in test">
                <div class="border-2 p-3  rounded-lg border-solid mt-2">{{items}}</div>
            </div>
        </div>
    </div>
    <!--</div>-->

</template>

<script>
    import json from '../assets/items/proxies.json';
    import AliveCheck from "../components/neKidaem/setsOfProxies";

    export default {
        name: "filterOfProxies",
        components: {AliveCheck},
        data: function () {
            return {
                test: [],
                showCountry: false,
                showError: false,
                proxyFiltered: {
                    alive: false,
                    proxyType: [{type: 'Transparent', checked: false, index: 0},
                        {type: 'Anonymous', checked: false, index: 1},
                        {type: 'Elite', checked: false, index: 2},],
                    country: '',
                    match: {},
                    findedCountry: {},
                    selectedCountry: 'Russia',
                    checkedProxy: {},
                    countries: [['Russia', 'RU'], ['Great Britain', 'GB'],
                        ['Irland', 'ID'], ['Belarus', 'BR'],
                        ['Phelipin', 'PE']],
                },
                proxies: json,
            }
        },
        watch: {
          proxyFiltered: {
              handler: function(val) {
                  // console.log(val.match);
              },
              deep: true,
          }
        },
        created() {
          this.test = JSON.parse(JSON.stringify(this.proxies));
        },
        methods: {
            repeat() {
                this.test = this.proxies;
                this.showError = false;
            },
            check(alive) {
                this.isAlive = alive;
            },
            teste(match) {

                let array = JSON.parse(JSON.stringify(this.proxies));
                let newJSON = [];
                let string = match.value;
                for (let elem of this.test) {
                //         // console.log("json: ",elem[string]);
                //         // console.log("match: ",match.check);
                //         // if (elem.country === value.findedCountry[1] || elem.alive === value.alive || elem.proxy_type === value.checkedProxy.index) {
                        if (elem[string] === match.check) {
                //             // console.log(match.check, elem[string]);
                            newJSON.push(elem);
                //             // console.log('country: ', elem.country, 'alive: ', elem.alive, 'proxy_type: ', elem.proxy_type);
                        }
                    }
                if (newJSON.length === 0) {
                    this.showError = true;

                }
                this.test = newJSON;
                // this.test = newJSON;
                // console.log(array);
                // this.test = newJSON;
                // console.log('newJSON : ', newJSON);
                // this.test = newJSON;
                // this.proxyFiltered = value;
                // let obj = Object.assign({}, newJSON);
                // console.log(obj);
                // this.proxyFiltered = obj;
            }
        }
    }
</script>

<style scoped>

</style>