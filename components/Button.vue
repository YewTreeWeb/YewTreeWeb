<template>
  <button
    :class="btnClasses"
    :type="type"
    :aria-label="defaultAriaLabel"
    :disabled="disabled"
  >
    <span v-if="iconPosition === 'left'"><slot name="icon"></slot></span>
    {{ text.trim() }}
    <span v-if="iconPosition === 'right'"><slot name="icon"></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: {
      type: String,
      required: true,
    },
    ariaLabel: String,
    type: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'submit', 'reset'].includes(value)
      },
    },
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        return ['sm', 'md'].includes(value)
      },
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClasses() {
      return {
        btn: true,
        'btn--md': this.size === 'md',
        'btn--sm': this.size === 'sm',
      }
    },
    defaultAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : this.$attrs['aria-label']
    },
  },
  mounted() {
    console.log('attr', this.$attrs)
  },
}
</script>
