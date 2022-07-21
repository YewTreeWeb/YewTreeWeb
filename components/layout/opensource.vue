<template>
  <section class="open-source section section--bg-dark">
    <h2 class="open-source__title">{{ openSource.title }}</h2>
    <p class="open-source__intro">{{ openSource.intro }}</p>
    <div class="open-source__projects">
      <div class="open-source__project">
        <nuxt-img
          src="/img/docuhyde.svg"
          width="154"
          fit="cover"
          lazyload="lazy"
          quality="80"
          placeholder
        />
        <h3>Docuhyde</h3>
        <ul>
          <li>Website template built in Jekyll</li>
          <li>Powered with Markdown</li>
          <li>Website optimisation focused</li>
          <li>Fully customisable</li>
          <li>Built-in support for Netlify, Firebase & Github</li>
        </ul>
      </div>
      <div class="open-source__project">
        <nuxt-img
          src="/img/greenhouse.svg"
          width="154"
          fit="cover"
          lazyload="lazy"
          quality="80"
          placeholder
        />
        <h3>Greenhouse</h3>
        <ul>
          <li>macOS setup tool</li>
          <li>Campatable with Bash & ZSH</li>
          <li>Update, backup and restore system dependencies</li>
          <li>Installs apps & coding languages</li>
          <li>Setups dev enironment</li>
        </ul>
      </div>
      <div class="open-source__project">
        <nuxt-img
          src="/img/shopstart.svg"
          width="154"
          fit="cover"
          lazyload="lazy"
          quality="80"
          placeholder
        />
        <h3>Shop Start</h3>
        <ul>
          <li>Shopify theme builder</li>
          <li>Supports SCSS & Liquid in SCSS</li>
          <li>Built using latest JavaScript</li>
          <li>Choice of Next.js or Nuxt.js installation</li>
          <li>Publish straight from terminal to Shopify Store</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OpenSource',
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
  &__intro {
    font-size: 1.25rem;
    line-height: 1.875rem;
    letter-spacing: -0.016rem;
    max-width: 768px;
    margin: 0 auto 7.25rem;
  }
  &__projects {
    margin-bottom: 7.25rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    column-gap: 4.313rem;
  }
  &__project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    img {
      margin: 0 auto 0.813rem;
    }
    ul {
      margin-top: 2.5rem;
      text-align: left;
    }
  }
}
</style>
