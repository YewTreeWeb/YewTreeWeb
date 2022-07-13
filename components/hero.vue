<template>
  <section class="hero">
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
  position: relative;
  padding: 5.688rem 10.5rem;
  background: linear-gradient(
    180deg,
    rgba(46, 46, 51, 0.0001) 0%,
    var(--clr-grey-90) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  &::before {
    content: '';
    width: 100%;
    height: auto;
    position: absolute;
    inset: 0;
    background-image: url('/img/headshot.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center right;
    z-index: -1;
    opacity: 0.5;
  }
  &::after {
    content: '';
    background-image: url('/img/hero-bg-shapes.svg');
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;
    width: 100%;
    height: 70vh;
    position: absolute;
    top: -86px;
    right: 0;
    z-index: 0;
  }
  &__inner {
    max-width: 41.563rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    .btn {
      margin-top: 2.688rem;
    }
    ul {
      margin-top: 2rem;
      list-style-image: url('/img/tick.svg');
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
