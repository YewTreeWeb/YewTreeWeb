<template>
  <svg
    width="114"
    height="114"
    xmlns="http://www.w3.org/2000/svg"
    :class="classes !== undefined ? classes : ''"
    :role="title ? 'img' : undefined"
    :aria-labelledby="ariaIds()"
    :aria-hidden="!title ? true : false"
  >
    <title v-if="title" :id="titleId">{{ title }}</title>
    <desc v-if="desc" :id="descId">{{ desc }}</desc>
    <g fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25 5h64v64H25V5z"
        :fill="fill"
        filter="url(#filter0_d_0_91)"
      ></path>
      <path d="M47 37h20" :stroke="secondaryfill" stroke-width="2"></path>
      <path
        d="M60 30l7 7-7 7"
        :stroke="secondaryfill"
        stroke-width="2"
        stroke-linecap="square"
      ></path>
      <defs>
        <filter
          id="filter0_d_0_91"
          x="0"
          y="0"
          width="114"
          height="114"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="20"></feOffset>
          <feGaussianBlur stdDeviation="12.5"></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.113725 0 0 0 0 0.113725 0 0 0 0 0.129412 0 0 0 0.16 0"
          ></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_91"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_0_91"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </g>
  </svg>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'ArrowRight',
  props: {
    strokewidth: {
      type: [Number, String],
      default: 1,
    },
    title: {
      type: String,
      default: 'Arrow right',
    },
    desc: {
      type: String,
    },
    classes: {
      type: String,
    },
    fill: {
      type: String,
      default: 'inherit',
    },
    secondaryfill: {
      type: String,
    },
  },
  data() {
    return {
      titleId: null,
      descId: null,
    }
  },
  computed: {
    _secondaryfill: () => this.secondaryfill || this.fill,
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
