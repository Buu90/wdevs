<template>
  <div class="value-count">
    <div class="value-count__counter">
        <slot name="input"></slot>
      
    </div>
    <slot name="img"></slot>
    <p class="value-count__title">{{ title }}</p>
  </div>
</template>

<script>
export default {
props: {
    title: String,
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.value-count {
  width: 120px;
  height: 120px;
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
    margin-top: 14px;
    @extend %Roboto-Regular;
    color: $Dark;
  }
}
</style>
