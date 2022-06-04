<template>
  <div>
    <site-header />
    <main>
      <Nuxt />
    </main>
    <site-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteHeader from '@/components/header.vue'
import SiteFooter from '@/components/footer.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    SiteHeader,
    SiteFooter,
  },
})
</script>
