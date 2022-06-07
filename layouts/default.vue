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
import SiteHeader from '@/components/header.vue'
import SiteFooter from '@/components/footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    SiteHeader,
    SiteFooter,
  },
}
</script>
