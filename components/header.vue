<template>
  <header>
    <site-logo desc="YTW logo with the 'W' being coloured green" />
    <site-navigation />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteNavigation from '@/components/navigation.vue'
import SiteLogo from '@/components/icons/logo.vue'

export default Vue.extend({
  name: 'SiteHeader',
  components: {
    SiteNavigation,
    SiteLogo,
  },
})
</script>
