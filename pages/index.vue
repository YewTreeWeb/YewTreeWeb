<template>
  <div>
    <hero />
    <projects />
    <section class="open-source section section--bg-dark">
      <h2 class="section__title">{{ openSource.title }}</h2>
      <p class="section__intro">{{ openSource.intro }}</p>
      <Button text="test" />
    </section>
  </div>
</template>

<script>
import Hero from '@/components/hero.vue'
import Projects from '@/components/projects.vue'
import Button from '~/components/Button.vue'
export default {
  name: 'IndexPage',
  components: {
    Hero,
    Projects,
    Button,
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

<style lang="scss" scope>
.open-source {
  border-top: 1px solid var(--clr-grey-80);
  text-align: center;
}
.section {
  &__intro {
    font-size: 1.25rem;
    line-height: 1.875rem;
    letter-spacing: -0.016rem;
    max-width: 768px;
    margin: 0 auto 7.25rem;
  }
}
</style>
