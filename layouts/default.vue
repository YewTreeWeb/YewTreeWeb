<template>
  <div>
    <site-header @toggleDarkmode="toggleDarkmode" />
    <main>
      <Nuxt />
    </main>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '@/components/header.vue'
import SiteFooter from '@/components/footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    SiteHeader,
    SiteFooter,
  },
  data() {
    return {
      darkmode: true,
    }
  },
  methods: {
    toggleDarkmode(payload) {
      this.darkmode = payload
      document.getElementsByTagName('body')[0].dataset.theme = this.darkmode
        ? 'dark'
        : 'light'
    },
  },
  mounted() {
    if (this.darkmode) {
      document.getElementsByTagName('body')[0].dataset.theme = 'dark'
    }
  },
}
</script>
