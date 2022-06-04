<template>
  <div>
    <h2>{{ post.title }}</h2>
    <nuxt-content />
  </div>
</template>

<script>
export default {
  name: 'BlogPosts',
}
</script>
