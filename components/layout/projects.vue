<template>
  <section class="projects section section--bg-dark">
    <h2 class="projects__title">{{ title }}</h2>
    <p class="projects__subtitle">{{ subtitle }}</p>
    <SliderVue :slides="slider.slides" />
  </section>
</template>

<script>
import SliderVue from '@/components/slider.vue'
export default {
  name: 'ProjectsSection',
  data() {
    return {
      title: 'From ideas to reality',
      subtitle:
        'These are some of the projects that I have worked in both in my personal time and at a place of employment.',
      slider: {
        slides: [
          {
            image: '/img/space1.jpeg',
          },
          {
            image: '/img/planet.jpeg',
          },
          {
            image: '/img/galaxy.jpeg',
          },
        ],
      },
    }
  },
  components: { SliderVue },
}
</script>

<style lang="scss">
.projects {
  text-align: center;
  h1 {
    margin-top: 0;
  }
  &__subtitle {
    font-size: 1.25rem;
    line-height: 1.875rem;
    letter-spacing: -0.016rem;
    color: var(--clr-grey-40);
    max-width: 768px;
    margin: 0 auto 6rem;
  }
  img {
    width: 100%;
  }
}
</style>
