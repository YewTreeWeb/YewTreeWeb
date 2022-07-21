<template>
  <div>
    <site-header />
    <main>
      <Nuxt />
    </main>
    <site-footer />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import SiteHeader from '@/components/layout/header.vue'
import SiteFooter from '@/components/layout/footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    SiteHeader,
    SiteFooter,
  },
  methods: {
    ...mapMutations(['toggleDarkmode']),
  },
  computed: {
    ...mapState({
      darkmode: 'darkmode', // alias for authModalShowwq
    }),
  },
  mounted() {
    const body = document.getElementsByTagName('body')[0]
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      const theme = localStorage.getItem('theme')
      if (Boolean(theme) !== this.darkmode) {
        this.toggleDarkmode()
      } else {
        body.dataset.theme = theme ? 'dark' : 'light'
      }
    } else {
      body.dataset.theme = 'dark'
    }
  },
}
</script>
