<template>
  <div>
    <h1>Hello</h1>
    <p>{{ $config.baseURL }}</p>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
