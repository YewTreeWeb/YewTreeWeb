<template>
  <svg
    viewBox="0 0 67 26"
    xmlns="http://www.w3.org/2000/svg"
    :class="classes"
    :role="title ? 'img' : undefined"
    :aria-labelledby="ariaIds()"
    :aria-hidden="!title ? true : false"
  >
    <title :id="titleId">{{ title }}</title>
    <desc v-if="desc" :id="descId">{{ desc }}</desc>
    <g fill="none">
      <path
        d="M9.249 26h1.296v-9.252H9.249V26zm.648-15.948l9.108-8.316L18.14.8 9.897 8.252 1.653.8l-.864.972 9.108 8.28zM21.56 2.096h7.416V26h1.296V2.096h7.416V.8H21.561v1.296z"
        :fill="fill"
      ></path>
      <path
        d="M43.715 14.804V.8H42.42v16.776l11.808-9.72 11.808 9.72V.8H64.74v14.004l-10.512-8.64-10.512 8.64zm10.512 1.44l-10.62 8.784.828.972 9.792-8.028L64.02 26l.828-.972-10.62-8.784z"
        :fill="secondaryFill"
      ></path>
    </g>
  </svg>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'SiteLogo',
  props: {
    classNames: String,
    title: {
      type: String,
      default: 'YTW',
    },
    desc: {
      type: String,
      default: null,
    },
    fill: {
      type: String,
      default: '#F4F4F5',
    },
    secondaryFill: {
      type: String,
      default: '#3ABAB4',
    },
  },
  data() {
    return {
      titleId: null,
      descId: null,
    }
  },
  computed: {
    classes() {
      return {
        classNames: this.classNames || '',
      }
    },
  },
  created() {
    const id = this.title ? uuidv4().split('-') : null
    if (this.title && id !== null) {
      this.titleId = `${id[0]}-${id[1]}-Title`
    }
    if (this.desc && id !== null) {
      this.descId = `${id[0]}-${id[1]}-Desc`
    }
  },
  methods: {
    ariaIds() {
      let labelledby = undefined

      if (this.title && this.desc) {
        labelledby = `${this.titleId}${this.desc ? ' ' + this.descId : ''}`
      } else if (this.title) {
        labelledby = `${this.titleId}`
      }

      return labelledby
    },
  },
}
</script>
