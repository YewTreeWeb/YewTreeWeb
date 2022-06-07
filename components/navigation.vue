<template>
  <nav class="site-navigation">
    <ul class="links">
      <li v-for="(page, i) in pages" :key="i">
        <nuxt-link :to="pageLink(page)">{{ page }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavigation',
  data() {
    return {
      pages: ['About', 'Portfolio', 'Blog', 'Testimonials', 'Contact'],
    }
  },
  methods: {
    pageLink(page) {
      return `/${page.toLowerCase()}`
    },
  },
}
</script>

<style lang="scss">
.site-navigation {
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
    padding-left: 0;
    list-style: none;
    column-gap: 2.5rem;
  }
  .nuxt-link-active {
    color: var(--clr-teal-500);
  }
}
</style>
