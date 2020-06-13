<template>
  <div class="about-card card">
    <CircuitBoard :color="details.color" class="about-card__icon">
      <g-image
        :alt="details.title"
        :src="require(`@assets/icons/logo_${details.icon}.svg`)"
        class="about-card__icon__image"
      />
    </CircuitBoard>
    <div class="about-card__title">{{ details.title }}</div>
    <div class="about-card__text">{{ details.text }}</div>
  </div>
</template>

<script>
// Components
import CircuitBoard from "./CircuitBoard";
export default {
  name: "WhatIDoSection",
  components: {
    CircuitBoard,
  },
  props: {
    /**
     * About Me section details
     */
    details: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.about-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  padding: 16px;
  transition: box-shadow 0.2s ease;
  @include elevate(3);

  &:hover {
    @include elevate(4);
  }

  .about-card__icon {
    margin-bottom: 16px;
  }

  .about-card__title {
    margin-bottom: 8px;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .about-card__text {
    font-size: 0.9rem;
  }
}
</style>
