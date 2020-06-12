<template>
  <div class="hero-image">
    <g-image :src="image" alt="Hero Image" class="hero-image__image" />
    <div v-if="this.$slots.default" class="hero-image__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroImage",
  props: {
    /**
     * Hero image
     * @type {string}
     */
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
// Hero image styles
.hero-image {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-image__image {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(3px) brightness(0.5);
  // Must oversize to remove edge caused by blur filter
  transform: scale(1.05);
}

// Move content above other hero background
.hero-image__content {
  z-index: 1;
}
</style>
