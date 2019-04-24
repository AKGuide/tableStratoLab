<template>
    <div>

        <div class="field">
            <small class="mt-1 text-red" v-if="error" v-text="error">Ошибка заполнения</small>
            <input :id="id" ref="input" class="w-full py-2" :type="type" :placeholder="placeholder" :value="value"
                   @input="(e) => $emit('input', e.target.value)">
            <label :for="id" v-text="placeholder"></label>
            <span v-if="faIcon" @click="$refs.input.focus()">
                <font-awesome-icon :icon="faIcon"></font-awesome-icon>
            </span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .field {
        display: flex;
        flex-flow: column-reverse;
        margin-bottom: 1em;
    }

    label, input, span {
        transition: all 0.2s;
        touch-action: manipulation;
        cursor: text;
        @apply text-purple-light;
    }

    input {
        line-height: 1;
        -webkit-appearance: none;
        border-radius: 0;
        padding-left: 1.5em;
        cursor: text;
        font-size: 1.3em;
        @apply font-normal font-sans border-b-2 border-purple-lighter text-purple-light;

    }

    input:focus {
        outline: 0;
        @apply font-normal font-sans border-b-2 border-purple;

    }

    label {
        padding-left: 1.5em;
        @apply text-sm;
    }

    input:placeholder-shown + label {
        cursor: text;
        max-width: 66.66%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: left bottom;
        transform: translate(0, 2.125rem) scale(1.5);
    }

    input ~ span {
        transform: translate(0, 3rem);
    }

    ::-webkit-input-placeholder {
        opacity: 0;
        transition: inherit;
    }

    input:focus::-webkit-input-placeholder {
        opacity: 1;
    }

    input:not(:placeholder-shown) + label,
    input:focus + label {
        padding-left: 2em;
        transform: translate(0, 0) scale(1);
        cursor: pointer;
    }
</style>

<script>
import uuid from 'uuid/v4';

export default {
  name: 'FloatLabelInput',

  props: {
    type: String,
    placeholder: String,
    value: String,
    icon: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },

  created() {
    this.id = uuid();
  },

  computed: {
    faIcon() {
      const items = this.icon.split('-');
      if (items.length < 2) {
        return null;
      }

      if (items[0] !== 'fas' && items[0] !== 'far' && items[0] !== 'fal') {
        return null;
      }

      return [items.shift(), items.join('-')];
    },
  },

  data() {
    return {
      id: null,
    };
  },
};
</script>
