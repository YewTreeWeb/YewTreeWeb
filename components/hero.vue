<template>
  <section class="hero">
    <div class="hero__bg" title="Mathew Teague"></div>
    <div class="hero__inner">
      <p class="hero__subtitle">
        Hi, I'm <span>{{ $config.author }}</span> and this is
      </p>
      <h1 class="hero__title">{{ title }}</h1>
      <p class="hero__content">{{ content }}</p>
      <a href="#contact" class="btn">Get In Touch</a>
      <ul>
        <li v-for="(skill, i) in skills" :key="i">{{ skill }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroItem',
  data() {
    return {
      title: 'YewTree Web',
      content:
        "I'm a Front-end Developer based in Birmingham, UK primarily specialising as a JavaScript Developer to build (and also design) fantastic websites, applications and software for the web.",
      skills: [
        'Ecommerce sites with WordPress, WooCommerce & Shopify',
        'Static sites from Jekyll, Nuxt and Next.js',
        'Web apps with React & Vue',
        'Designing with Figma & Sketch',
        'And much more',
      ],
    }
  },
}
</script>

<style lang="scss">
.hero {
  padding: 5.688rem 10.5rem;
  background: linear-gradient(
    180deg,
    rgba(46, 46, 51, 0.0001) 0%,
    var(--clr-grey-900) 100%
  );
  &__inner {
    max-width: 41.563rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    .btn {
      margin-top: 2.688rem;
    }
    ul {
      margin-top: 2rem;
    }
  }
  &__subtitle {
    letter-spacing: -0.016rem;
    font-size: var(--fs-xl);
    line-height: var(--leading-8);
    > span {
      color: var(--clr-white);
    }
  }
  &__title {
    letter-spacing: -0.031rem;
    font-weight: 900;
    line-height: 6.125rem;
    margin: 1rem 0;
    font-size: 5.5rem;
  }
  &__content {
    letter-spacing: -0.016rem;
    font-size: var(--fs-xl);
    line-height: var(--leading-8);
  }
}
</style>
