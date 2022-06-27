<template>
  <div class="toggle" :style="{ width: width, height: height }">
    <input class="toggle__checkbox" type="checkbox" />
    <div
      class="toggle__circle"
      :style="{ width: circle.width, height: circle.height }"
    ></div>
    <div class="toggle__layer"></div>
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
  },
  data() {
    return {
      circle: {
        width: null,
        height: null,
      },
    }
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
        var(--clr-grey-700) 0%,
        var(--clr-grey-800) 100%
      );
      box-shadow: 0px 1px 2px rgba(29, 29, 32, 0.16);
      border-radius: 50%;
      transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    }
  }
  &__layer {
    position: absolute;
    inset: 0;
    width: 100%;
    background-color: var(--clr-teal-500);
    border-radius: 6.25rem;
    transition: 0.3s ease all;
    z-index: 1;
  }
}
</style>
