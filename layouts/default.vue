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
      let mode = this.darkmode ? 'dark' : 'light'
      document.getElementsByTagName('body')[0].dataset.theme = mode
      localStorage.setItem('theme', mode)
    },
  },
  mounted() {
    const body = document.getElementsByTagName('body')[0]
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      const theme = localStorage.getItem('theme')
      body.dataset.theme = theme
      if (theme === 'light') {
        this.darkmode = false
      }
    } else {
      body.dataset.theme = 'dark'
    }
  },
}
</script>
