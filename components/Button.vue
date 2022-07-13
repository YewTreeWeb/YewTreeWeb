<template>
  <button
    :class="btnClasses"
    :type="type"
    :aria-label="defaultAriaLabel"
    :disabled="disabled"
  >
    {{ text }}
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
    label: String,
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
      return this.label ? this.label : this.$attrs['aria-label']
    },
  },
  mounted() {
    console.log('attr', this.$attrs)
  },
}
</script>
