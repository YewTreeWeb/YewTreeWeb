<template>
  <section class="projects">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      title: 'From ideas to reality',
      subtitle:
        'These are some of the projects that I have worked in both in my personal time and at a place of employment.',
    }
  },
}
</script>

<style lang="scss">
.projects {
  background-color: var(--clr-grey-900);
  h1 {
    margin-top: 0;
  }
}
</style>
