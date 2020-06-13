<template>
  <Hero>
    <div class="hero__content">
      <h2 class="hero__title">
        Hi, I'm <span class="is-emphasized">Kendall Roth</span>.
      </h2>
      <h3 class="hero__subtitle">I'm a full-stack web developer.</h3>
      <button class="hero__button" @click="$emit('portfolio-click')">
        View My Portfolio<i class="material-icons ml-xs">work</i>
      </button>
    </div>
  </Hero>
</template>

<script>
// Components
import Hero from "@components/Hero";

export default {
  name: "HeroSection",
  components: {
    Hero,
  },
};
</script>

<style lang="scss" scoped>
.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero__title {
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: normal;

  .is-emphasized {
    font-weight: bold;
    color: #d81b60;
  }

  @include smUp() {
    font-size: 3rem;
  }
}

.hero__subtitle {
  margin-bottom: 36px;
  font-size: 1.5rem;
  font-weight: normal;
  opacity: 0.75;

  @include smUp() {
    font-size: 2.25rem;
  }
}

.hero__button {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: white;
  font-size: 1.1rem;
  background-color: transparent;
  border: 4px double $color-light;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: $theme-primary;
    border-color: $theme-primary;
    border-style: solid;
  }
}
</style>
