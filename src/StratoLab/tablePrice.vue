<template>
    <div class="table">
        <div class="table__edit">
            <input type="text" id="Name" :value="item.name" class="input" placeholder="Name">
            <input type="text" id="Quantity" :value="item.quantity" class="input" placeholder="Quantity">
            <input type="text" id="Price" :value="item.price" class="input" placeholder="Price">
            <div class="table__but" @click="addItem">ADD ITEM</div>
        </div>
        <div class="table__result">
            <div class="title">
                <div class="title__head">Name</div>
                <div class="title__head">Quantity</div>
                <div class="title__head">Price</div>
            </div>
            <div :key="index" v-for="(item, index) in items">
                <div class="row">
                    <div class="row__item">{{item.name}}</div>
                    <div v-if="showEdit.index !== item.index" class="row__item">{{item.quantity}}</div>
                    <input class="input--edit" v-model="item.quantity" v-else>
                    <div v-if="showEdit.index !== item.index" class="row__item">{{`$` + item.price}}</div>
                    <input class="input--edit" v-model="item.price" v-else>
                    <div class="row__edit-item">
                        <div :id="item.index">
                            <img @click="deleteItem" src="@/assets/StratoLab/trash.png">
                        </div>
                        <div  :id="item.index">
                            <img @click="editItem" class="pen" src="@/assets/StratoLab/pen.png">
                        </div>
                    </div>
                    <div v-if="showEdit.index === item.index" class="save-button">
                        <div class="save-button__save" @click="saveItem">save</div>
                        <div class="save-button__cancel" @click="showEdit.index = null">cancel</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table__summ">Summary: {{`$` + summ}}</div>
    </div>
</template>

<script>

export default {
  name: 'tablePrice',
  data() {
    return {
      summ: null,
      showEdit: { index: null },
      item: { name: '', quantity: null, price: null },
      items: [
        {
          index: 0, name: 'Pizza', quantity: 2, price: 20,
        },
        {
          index: 1, name: 'Rol', quantity: 3, price: 15,
        },
        {
          index: 2, name: 'Margarita', quantity: 2, price: 100,
        },
      ],
    };
  },
  created() {
    this.items.forEach((item, i) => {
      this.summ += item.price * item.quantity;
    });
  },
  watch: {
    items: {
      handler(val) {
        this.summ = null;
        val.forEach((item, i, arr) => {
          this.summ += item.price * item.quantity;
          return item.index = i;
        });
      },
      deep: true,
    },

  },
  methods: {
    addItem() {
      const name = document.getElementById('Name');
      const quantity = document.getElementById('Quantity');
      const price = document.getElementById('Price');
      const errors = [];
      errors.push(name, price, quantity);
      const obj = {
        index: this.items.length, name: name.value, quantity: quantity.value, price: price.value,
      };
      for (const er of errors) {
        if (!er.value) {
          console.log(er);
        }
      }
      this.items.push(obj);
    },
    deleteItem(e) {
      const integer = parseInt(e.target.parentElement.id, 10);
      const itemsFilter = this.items.filter(elem => integer !== elem.index);
      this.items = itemsFilter;
    },

    editItem(e) {
      const integer = parseInt(e.target.parentElement.id, 10);
      this.showEdit.index = integer;
    },
    saveItem() {
      this.showEdit.index = null;
    },

  },

};
</script>

<style scoped>
    .table {
        display: flex;
        flex-direction: column;
        width: 40%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        padding-top: 15px;
        padding-left: 12px;
        padding-right: 12px;
        padding-bottom: 20px;
    }

    .table__edit {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
    }

    .input {
        margin-top: 10px;
        width: 744px;
        padding-bottom: 13px;
        border-bottom: 1px solid black;
        outline: none;
    }

    .table__but {
        border-radius: 5px;
        margin-top: 15px;
        padding-bottom: 5px;
        padding-top: 5px;
        padding-left: 41px;
        padding-right: 41px;
        background: cadetblue;
        outline: none;
    }

    .table__result {
        display: flex;
        flex-direction: column;
    }

    .title {
        width: 100%;
        font-weight: bold;
        border-bottom: 1px solid black;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .title__head {
        width: 20%;
        margin-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .row {

        align-items: center;
        width: 100%;
        margin-top: 1rem;
        display: flex;

    }


    .row__item {
        width: 20%;

        align-items: flex-start;
    }

    .row__edit-item {
        margin-right: 10px;
        width: 20%;
        display: flex;

        align-items: flex-start;
    }


    .input--edit {
        width: 20%;
        outline: none;
        color: indianred;
        width: 20%;

    }

    .save-button {
        display: flex;
        flex-direction: row;
        color: white;
        font-size: small;
        border-radius: 5px;
    }

    .save-button__save{
        background: violet;
        padding-left: 14px;
        padding-bottom: 4px;
        margin-right: 0px;
        padding-top: 4px;
        border-radius: 11px;
        padding-right: 14px;
    }
    .save-button__cancel {
        background: indianred;
        padding-left: 10px;
        padding-bottom: 4px;
        padding-top: 4px;
        border-radius: 11px;
        padding-right: 10px;
    }

    .pen {
        margin-left: 10px;
        margin-top: 2px;
        color: red;
    }


    .table__summ {
        margin-top: 1rem;
        font-size: larger;
    }


</style>
