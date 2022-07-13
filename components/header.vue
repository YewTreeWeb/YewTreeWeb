<template>
  <header
    class="site-header"
    :class="{ 'site-header--filled': filled }"
    ref="siteHeader"
  >
    <nuxt-link to="/">
      <site-logo desc="YTW logo with the 'W' being coloured green" />
    </nuxt-link>
    <site-navigation />
    <div>
      <toggle @darkmode="toggleDarkmode" />
      <a href="#contact" class="btn" type="button">Get In Touch</a>
    </div>
  </header>
</template>

<script>
import SiteNavigation from '@/components/navigation.vue'
import SiteLogo from '@/components/icons/logo.vue'
import Toggle from './Toggle.vue'

export default {
  name: 'SiteHeader',
  components: {
    SiteNavigation,
    SiteLogo,
    Toggle,
  },
  data() {
    return {
      filled: false,
    }
  },
  emits: ['toggleDarkmode'],
  methods: {
    toggleDarkmode(payload) {
      this.$emit('toggleDarkmode', payload)
    },
    scollPadding() {
      const navHeight = this.$refs.siteHeader.offsetHeight
      document.documentElement.style.setProperty(
        '--scroll-padding',
        `${navHeight - 1}px`
      )
    },
    headerScroll(param) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= param) {
          this.filled = true
        } else {
          this.filled = false
        }
      })
    },
  },
  mounted() {
    this.scollPadding()
    this.headerScroll(this.$refs.siteHeader.offsetHeight)
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
  background-color: transparent;
  z-index: 10;
  transition: background-color 0.35s ease-in-out;
  &--filled {
    background-color: var(--clr-grey-100);
  }
  > svg {
    width: 10%;
    height: auto;
    max-width: 71px;
  }
  > a {
    width: 71px;
    &::before {
      content: none;
    }
  }
  > div {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    column-gap: 1.5rem;
  }
}
</style>
