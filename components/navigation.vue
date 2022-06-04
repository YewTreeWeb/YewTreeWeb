<template>
  <nav>
    <ul class="links">
      <li v-for="(page, i) in pages" :key="i">
        <nuxt-link :to="pageLink(page)">{{ page }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SiteNavigation',
  data() {
    return {
      pages: ['Home', 'About', 'Portfolio', 'Blog', 'Testimonials', 'Contact'],
    }
  },
  methods: {
    pageLink(page: string) {
      return `/${page.toLowerCase()}`
    },
  },
})
</script>
