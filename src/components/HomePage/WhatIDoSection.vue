<template>
  <PageSection class="about-section">
    <h2 class="section-title mb-sm">What I Do</h2>
    <blockquote class="about-section__quote">
      I‘m passionate about web design and development, focusing on clean and
      simple design/functionality. I strive to be a dedicated team player while
      adapting to different environments and tasks.
    </blockquote>
    <div class="about-section__cards">
      <div
        v-for="card in aboutSectionCards"
        :key="card.title"
        class="about-section__about-card card elevation-3"
      >
        <CircuitBoard :color="card.color" class="about-card__icon">
          <g-image
            :alt="card.title"
            :src="require(`@assets/icons/logo_${card.icon}.svg`)"
            class="about-card__icon__image"
          />
        </CircuitBoard>
        <div class="about-card__title">{{ card.title }}</div>
        <div class="about-card__text">{{ card.text }}</div>
      </div>
    </div>
  </PageSection>
</template>

<script>
// Components
import CircuitBoard from "@components/HomePage/CircuitBoard";

// Utilities
import whatIDoData from "@/data/whatIDoData.json";

export default {
  name: "WhatIDoSection",
  components: {
    CircuitBoard,
  },
  data() {
    return {
      aboutSectionCards: whatIDoData,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-section {
  padding-top: 48px;
  padding-bottom: 48px;
}

.about-section__quote {
  max-width: 875px;
  padding: 12px 16px;
  color: $color-grey;
  font-size: 1.1rem;
  border-left: 3px solid $color-grey-light;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.about-section__cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 48px;

  @include mdUp() {
    flex-direction: row;
    align-items: stretch;
  }

  > .about-section__about-card:not(:first-child) {
    margin-top: 16px;

    @include mdUp() {
      margin-top: 0;
      margin-left: 16px;
    }
  }
}

.about-section__about-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  padding: 16px;

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
