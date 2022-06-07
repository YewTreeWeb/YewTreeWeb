<template>
  <header class="site-header">
    <site-logo desc="YTW logo with the 'W' being coloured green" />
    <site-navigation />
  </header>
</template>

<script>
import SiteNavigation from '@/components/navigation.vue'
import SiteLogo from '@/components/icons/logo.vue'

export default {
  name: 'SiteHeader',
  components: {
    SiteNavigation,
    SiteLogo,
  },
}
</script>

<style lang="scss">
.site-header {
  > svg {
    width: 100%;
    height: auto;
  }
}
</style>
