<template>
  <div class="toggle" :style="{ width: width, height: height }">
    <input
      class="toggle__checkbox"
      type="checkbox"
      v-model="active"
      @click.prevent="handleClick()"
    />
    <div
      class="toggle__circle"
      :class="{ 'toggle__circle--active': active }"
      :style="{ width: circle.width, height: circle.height }"
    ></div>
    <div
      class="toggle__layer"
      :class="{ 'toggle__layer--active': active }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    width: {
      type: String,
      default: '44px',
    },
    height: {
      type: String,
      default: '22px',
    },
    clickValue: [Function, String, Boolean],
  },
  emits: ['clickResult'],
  data() {
    return {
      active: false,
      toggleValue: this.clickValue,
      circle: {
        width: null,
        height: null,
      },
    }
  },
  methods: {
    handleClick() {
      this.active = !this.active
      this.toggleValue = !this.toggleValue
      this.$emit('clickResult', this.toggleValue)
      console.log(this.toggleValue)
    },
  },
  mounted() {
    const w = this.width.replace('px', '')
    const h = this.height.replace('px', '')
    this.circle.height = `${Math.round(Number(h) - 2)}px`
    this.circle.width = `${Math.round(Number(w) - 24)}px`
  },
}
</script>

<style lang="scss" scoped>
.toggle {
  position: relative;
  overflow: hidden;
  user-select: none;
  isolation: isolate;
  &__checkbox {
    appearance: none;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }
  &__circle {
    max-width: 40px;
    max-height: 40px;
    position: absolute;
    inset: 0;
    z-index: 2;
    &::before {
      content: '';
      position: absolute;
      top: 1px;
      left: 2px;
      width: 100%;
      height: 100%;
      line-height: 1;
      padding: 0.563em 0.25em;
      background: linear-gradient(
        180deg,
        var(--clr-grey-70) 0%,
        var(--clr-grey-80) 100%
      );
      box-shadow: 0px 1px 2px rgba(29, 29, 32, 0.16);
      border-radius: 50%;
      transition: all 0.3s ease, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    }
    &--active {
      &::before {
        left: 22px;
        background: linear-gradient(
          0deg,
          var(--clr-grey-10) 2.67%,
          var(--clr-white) 100%
        );
        box-shadow: 0px 1px 2px rgba(29, 29, 32, 0.16);
      }
    }
  }
  &__layer {
    position: absolute;
    inset: 0;
    width: 100%;
    background-color: var(--clr-teal-50);
    border-radius: 6.25rem;
    transition: 0.3s ease all;
    z-index: 1;
    &--active {
      background-color: var(--clr-teal-70);
    }
  }
}
</style>
