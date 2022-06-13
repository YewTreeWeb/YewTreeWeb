<template>
  <header class="site-header" ref="siteHeader">
    <nuxt-link to="/">
      <site-logo desc="YTW logo with the 'W' being coloured green" />
    </nuxt-link>
    <site-navigation />
    <div>
      <a href="#contact" class="btn" type="button">Get In Touch</a>
    </div>
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
  methods: {
    scollPadding() {
      const navHeight = this.$refs.siteHeader.offsetHeight
      document.documentElement.style.setProperty(
        '--scroll-padding',
        `${navHeight - 1}px`
      )
    },
  },
  mounted() {
    this.scollPadding()
  },
}
</script>

<style lang="scss">
.site-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
  column-gap: 2.5rem;
  padding: 1.188rem 8.125rem;
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 1;
  > svg {
    width: 100%;
    height: auto;
    max-width: 71px;
  }
  > a {
    width: 71px;
    &::before {
      content: none;
    }
  }
  div {
    margin-left: auto;
  }
}
</style>
