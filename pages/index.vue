<template>
  <div>
    <hero />
    <projects />
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
}
</script>
