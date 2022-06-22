<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide" v-for="(slide, i) in slides" :key="i">
          <nuxt-img
            :src="slide.image"
            :width="slide.width || imageWidth"
            :height="slide.height || imageHeight"
            :fit="slide.fit || fit"
            :loading="slide.loading || loading"
            preset="img"
          />
        </li>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        prev
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        next
      </button>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  name: 'SliderItem',
  props: {
    type: String,
    slides: {
      type: Array,
      required: true,
      validator(value) {
        return ['image'].includes(value)
      },
    },
    autoplay: Boolean,
    perView: Number,
    peek: Number,
  },
  data() {
    return {
      imageWidth: 800,
      imageHeight: 500,
      fit: 'cover',
      loading: 'lazy',
    }
  },
  mounted() {
    new Glide('.glide', {
      type: this.type || 'carousel',
      autoplay: this.autoplay || false,
      startAt: 0,
      perView: this.perView || 1,
      peek: this.peek || 300,
      breakpoints: {
        800: {
          peek: 0,
        },
        400: {
          perView: 1,
        },
      },
    }).mount()
  },
}
</script>

<style lang="scss">
.glide {
  &__slide {
    border: 1px solid black;
    line-height: 100px;
    margin: 0;
    text-align: center;
    color: white;
    font-size: 30px;
  }
  &__arrows {
    margin-top: 3.938rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__arrow {
    background-color: var(--clr-grey-800);
    color: var(--clr-grey-400);
    cursor: pointer;
    &::before {
      background-color: var(--clr-grey-600);
    }
  }
}
</style>
