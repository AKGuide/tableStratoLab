<template>
    <label class="container">
        <input type="checkbox" :checked="value" @input="sendValue">
        <span class="checkmark"></span>
        <span class="label"><slot></slot></span>
    </label>

</template>

<style lang="less" scoped>
    .container .label {
        font-size: 0.727272727273em;
    }

    .container {
        display: flex;
        position: relative;
        padding-left: 2em;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size: 1.375em;
        line-height: 1.2em;
    }

    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 1.15em;
        width: 1.15em;
        border-width: 0.0909090909091em;
        @apply border-purple-light ;
    }

    .container:hover input ~ .checkmark {
        background-color: #fefefe;
        @apply border-purple;

    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .container input:checked ~ .checkmark:after {
        display: block;
    }

    .container .checkmark:after {
        left: 0.41em;
        top: 0.227272727273em;
        width: 0.227272727273em;
        height: 0.454545454545em;
        border-style: solid;
        @apply border-purple;
        border-width: 0 0.136363636364em 0.136363636364em 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
</style>

<script>
import uuid from 'uuid/v4';

export default {
  name: 'CustomCheckbox',
    props: {
      match: String,
      value: Boolean,
    },

  created() {
    this.id = uuid();
  },

  data() {
    return {
      id: null,
    };
  },
    methods: {
      sendValue() {
          let sendedValue = {type: this.match, checked: this.value};
          this.$emit('input', sendedValue);
      }
    }
};
</script>
