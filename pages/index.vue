<template>
  <div>
    <hero />
    <projects />
    <opensource />
    <WorkedSection />
  </div>
</template>

<script>
import Hero from '@/components/layout/hero.vue'
import Projects from '@/components/layout/projects.vue'
import Opensource from '@/components/layout/opensource.vue'
import WorkedSection from '@/components/layout/worked.vue'
export default {
  name: 'IndexPage',
  components: {
    Hero,
    Projects,
    Opensource,
    WorkedSection,
  },
}
</script>
