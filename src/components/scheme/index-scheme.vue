<template>
  <div class="scheme-wrapper" id="appa">
    <Value title="Interface">
      <template v-slot:input>
        <input class="value-count__input" type="number" v-model="num1" />
      </template>
      <template v-slot:img>
        <img
          class="value-count__img"
          src="../../assets/interface/interface.svg"
          alt=""
        />
      </template>
    </Value>
    <Value title="Server">
      <template v-slot:input>
        <input class="value-count__input" type="number" v-model="num2" />
      </template>
      <template v-slot:img>
        <img
          class="value-count__img"
          src="../../assets/server/server.svg"
          alt=""
        />
      </template>
    </Value>
    <Value title="App group">
      <template v-slot:input>
        <input class="value-count__input" type="number" v-model="num3" />
      </template>
      <template v-slot:img>
        <img
          class="value-count__img"
          src="../../assets/application-group/application-group.svg"
          alt=""
        />
      </template>
    </Value>
    <div class="application">
      <div class="application__counter">
        <input class="application__input" type="text"/>
                
      </div>
      <img
        class="application__img"
        src="../../assets/application/application.svg"
        alt=""
      />
      <p class="application__title">Application</p>

    </div>
    <Value title="MTV">
      <template v-slot:input>
        <input class="value-count__input" type="number" v-model="num4" />
      </template>
      <template v-slot:img>
        <img class="value-count__img" src="../../assets/mtv/mtv.svg" alt="" />
      </template>
    </Value>
    <Value title="Functions">
      <template v-slot:input>
        <input class="value-count__input" type="number" v-model="num5" />
      </template>
      <template v-slot:img>
        <img
          class="value-count__img"
          src="../../assets/functions/functions.svg"
          alt=""
        />
      </template>
    </Value>
  </div>
</template>



 

<script>

import Value from "./value-count";

export default {
  
  components: {
    Value,
  },
};

//   new Vue({
    
//   el: "#appa",
//   data: {
//     operation: '0',
//     results: '0',
//     num1: 0,
//     num2: 0,
//     num3: 0,
//     num4: 0,
//     num5: 0,
//   },
  
//   methods: {
//     calculate: function () {
//       switch (this.operation) {
//         case "0":
//           this.results =
//             parseInt(this.num1) +
//             parseInt(this.num2) +
//             parseInt(this.num3) +
//             parseInt(this.num4) +
//             parseInt(this.num5);
//           break;
//       }
//     },
//   },
// });
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.scheme-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.application {
  width: 200px;
  height: 200px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &__input {
    width: 30px;
    padding: 5px 2px 5px 2px;
    background: #e6eaf2;
    border: none;
    border-radius: 5px;
    color: #8a8e99;
    text-align: center;
  }
  &__counter {
    position: absolute;
    top: -15px;
  }
  &__title {
    margin-top: 44px;
    @extend %Roboto-Regular;
    color: $Dark;
  }
}
</style>
