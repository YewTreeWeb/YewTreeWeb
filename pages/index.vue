<template>
  <div>
    <hero />
    <projects />
    <section class="section section--bg-dark">
      <h1 class="section__title">{{ openSource.title }}</h1>
      <p class="section__intro">{{ openSource.intro }}</p>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/hero.vue'
import Projects from '@/components/projects.vue'
export default {
  name: 'IndexPage',
  components: {
    Hero,
    Projects,
  },
  data() {
    return {
      openSource: {
        title: 'Open Source',
        intro:
          'Now and then I like to create projects and release them as open source to the community, with hope that they help other developers as these projects have helped me with my development. Below are my current releases.',
      },
    }
  },
}
</script>

<style lang="scss"></style>
