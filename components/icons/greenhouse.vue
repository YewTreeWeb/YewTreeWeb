<template>
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    :class="classes"
    :role="title ? 'img' : undefined"
    :aria-labelledby="ariaIds()"
    :aria-hidden="!title ? true : false"
  >
    <defs>
      <path d="M50 48.954h6.483v18.639H50z" id="e" />
      <path
        d="M4.579 65.291a2.3 2.3 0 0 1 2.3-2.3c.366.002.726.093 1.049.264a3.045 3.045 0 0 1 4.043-1.524 4.583 4.583 0 0 1 8.7 1.87 2.3 2.3 0 1 1 1.551 3.993H6.881a2.2 2.2 0 0 1-2.302-2.303z"
        id="h"
      />
      <path
        d="M78.175 21.4h-56.35a1 1 0 0 0-1 1v2.242h58.35V22.4a1 1 0 0 0-1-1z"
        id="f"
      />
      <path
        d="M48.988 37l-8.713 8.712v21.881h19.45V45.712L51.012 37a1.431 1.431 0 0 0-2.024 0z"
        id="c"
      />
      <path
        d="M31.92 53.333c0 4.12-1.477 7.675-3.116 7.675s-3.116-3.555-3.116-7.675c0-4.12 3.112-14.914 3.112-14.914s3.12 10.795 3.12 14.914z"
        id="b"
      />
      <path
        d="M74.312 53.333c0 4.12-1.476 7.675-3.116 7.675-1.64 0-3.116-3.555-3.116-7.675 0-4.12 3.12-14.914 3.12-14.914s3.112 10.795 3.112 14.914z"
        id="a"
      />
      <path
        d="M95.421 65.291a2.3 2.3 0 0 0-2.3-2.3 2.278 2.278 0 0 0-1.049.264 3.045 3.045 0 0 0-4.043-1.524 4.583 4.583 0 0 0-8.7 1.87 2.3 2.3 0 1 0-1.551 3.993h15.341a2.2 2.2 0 0 0 2.302-2.303z"
        id="g"
      />
      <path d="M43.517 48.954H50v18.639h-6.483z" id="d" />
    </defs>
    <g fill="#CCF7AD">
      <path
        d="M50 90a39.948 39.948 0 0 0 34.608-20H15.392A39.948 39.948 0 0 0 50 90z"
      />
      <path
        d="M13.564 66.5c.546 1.2 1.17 2.363 1.828 3.5h69.216a40.488 40.488 0 0 0 1.828-3.5z"
      />
    </g>
    <path
      fill="#C7F0FF"
      d="M90 50v-.005c0-22.091-17.909-40-40-40s-40 17.909-40 40a40 40 0 0 0 3.566 16.51h72.87A39.844 39.844 0 0 0 90 50z"
    />
    <g
      stroke-linecap="round"
      stroke="#45413C"
      fill="none"
      stroke-linejoin="round"
    >
      <path d="M11 66.5h78m-82.5 0H9m82 0h2.5" />
    </g>
    <path
      fill="#00B8F0"
      d="M79.174 24.642H20.825l-4.862 21.07v14.587h68.074V45.712l-4.863-21.07z"
    />
    <use xlink:href="#a" fill="#6DD627" />
    <use fill="none" stroke="#45413C" stroke-linejoin="round" xlink:href="#a" />
    <use xlink:href="#b" fill="#6DD627" />
    <use fill="none" stroke="#45413C" stroke-linejoin="round" xlink:href="#b" />
    <path
      d="M15.963 45.712h68.074v14.587H15.963z"
      stroke-linecap="round"
      stroke="#45413C"
      fill="none"
      stroke-linejoin="round"
    />
    <path
      fill="#4ACFFF"
      d="M51.621 24.642L30.55 45.712h23.502l21.07-21.07H51.621z"
    />
    <g
      stroke-linecap="round"
      stroke="#45413C"
      fill="none"
      stroke-linejoin="round"
    >
      <path d="M79.175 24.642h-58.35l-4.862 21.07h68.074l-4.862-21.07z" />
      <path
        fill="#DEA47A"
        d="M84.69 60.3H15.31a1.012 1.012 0 0 0-1.01 1.012v6.281h71.4v-6.281c0-.558-.452-1.01-1.01-1.012z"
      />
      <path
        d="M22.45 45.71V60.3m6.48-14.59V60.3m6.48-14.59V60.3m-12.96-8.92h12.96m29.18-5.67V60.3m6.48-14.59V60.3m6.48-14.59V60.3m-12.96-8.92h12.96M17.83 37.61h64.34M19.7 29.5h60.6M22.45 45.71l4.86-21.07m8.1 21.07l4.87-21.07M30.8 37.61l1.87-8.11m44.88 16.21l-4.86-21.07m-8.1 21.07l-4.87-21.07m9.48 12.97l-1.87-8.11"
      />
      <path
        fill="#00DBA8"
        d="M53.242 39.229h-6.484l.811-14.587h4.862l.811 14.587z"
      />
    </g>
    <use fill="#B8ECFF" xlink:href="#c" />
    <path d="M40.275 48.954h19.45v2.947h-19.45z" fill="#80DDFF" />
    <use
      fill="none"
      stroke="#45413C"
      stroke-linecap="round"
      stroke-linejoin="round"
      xlink:href="#c"
    />
    <path
      d="M39.465 60.3h21.07v7.294h-21.07z"
      stroke-linecap="round"
      stroke="#45413C"
      fill="#F0C2A1"
      stroke-linejoin="round"
    />
    <use fill="#00DBA8" xlink:href="#d" />
    <path d="M43.517 48.954H50v2.947h-6.483z" fill="#00AD85" />
    <use
      fill="none"
      stroke="#45413C"
      stroke-linecap="round"
      stroke-linejoin="round"
      xlink:href="#d"
    />
    <use xlink:href="#e" fill="#00DBA8" />
    <path fill="#00AD85" d="M50 48.954h6.483v2.947H50z" />
    <use
      xlink:href="#e"
      stroke-linecap="round"
      stroke="#45413C"
      fill="none"
      stroke-linejoin="round"
    />
    <use fill="#00DBA8" xlink:href="#f" />
    <path
      d="M77.928 21.4H22.072a1.246 1.246 0 0 0-1.246 1.247v1.621a1.246 1.246 0 0 1 1.246-1.247h55.856c.689 0 1.247.558 1.247 1.247v-1.621c0-.689-.558-1.247-1.247-1.247z"
      fill="#00F5BC"
    />
    <use
      fill="none"
      stroke="#45413C"
      stroke-linecap="round"
      stroke-linejoin="round"
      xlink:href="#f"
    />
    <g
      stroke-linecap="round"
      stroke="#45413C"
      fill="#00DBA8"
      stroke-linejoin="round"
    >
      <path
        d="M40.275 45.712h19.45v3.242h-19.45zm0 0h4.052l4.661-4.66a1.431 1.431 0 0 1 2.024 0l4.661 4.66h4.052L51.012 37a1.431 1.431 0 0 0-2.024 0z"
      />
      <path
        fill="none"
        d="M46.76 52.19v5.68m6.48-5.68v5.68m-33.23 9.72v-4.05m4.87 4.05v-4.05m4.86 4.05v-4.05m4.86 4.05v-4.05m30.8 4.05v-4.05m4.86 4.05v-4.05m4.86 4.05v-4.05m4.87 4.05v-4.05"
      />
    </g>
    <use fill="#6DD627" xlink:href="#g" />
    <path
      d="M77.774 65.757c.575 0 1.13.219 1.551.61a4.583 4.583 0 0 1 8.7-1.87c.394-.18.822-.274 1.256-.275a3.063 3.063 0 0 1 2.787 1.8 2.266 2.266 0 0 1 2.9.685c.294-.413.45-.907.448-1.414a2.286 2.286 0 0 0-3.351-2.038 3.046 3.046 0 0 0-4.043-1.523 4.583 4.583 0 0 0-8.7 1.87 2.293 2.293 0 0 0-3.38 3.075 2.291 2.291 0 0 1 1.832-.92z"
      fill="#9CEB60"
    />
    <use
      fill="none"
      stroke="#45413C"
      stroke-linecap="round"
      stroke-linejoin="round"
      xlink:href="#g"
    />
    <use xlink:href="#h" fill="#6DD627" />
    <path
      fill="#9CEB60"
      d="M6.881 65.757c.366.002.726.092 1.049.263a3.063 3.063 0 0 1 2.787-1.8c.434 0 .862.095 1.256.275a4.583 4.583 0 0 1 8.7 1.87 2.279 2.279 0 0 1 3.38.308 2.293 2.293 0 0 0-3.38-3.075 4.583 4.583 0 0 0-8.7-1.87 3.046 3.046 0 0 0-4.043 1.525 2.286 2.286 0 0 0-3.351 2.038 2.414 2.414 0 0 0 .448 1.414 2.292 2.292 0 0 1 1.854-.948z"
    />
    <use
      xlink:href="#h"
      stroke-linecap="round"
      stroke="#45413C"
      fill="none"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'GreenhouseIcon',
  props: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    classNames: {
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
