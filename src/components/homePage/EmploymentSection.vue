<template>
  <PageSection class="employment-section" size="sm-10 md-8 lg-6">
    <h2 class="section-title mb-md">Where I've Worked</h2>
    <section class="employment-section__cards">
      <div
        v-for="job in jobs"
        :key="job.id"
        class="employment-card card elevation-2"
      >
        <div class="employment-card__logo">
          <g-image :alt="`${job.title} Logo`" :src="job.logo" />
        </div>
        <div class="employment-card__collapse">
          <div class="employment-card__titles">
            <div class="employment-card__title">{{ job.title }}</div>
            <div class="employment-card__subtitle">{{ job.position }}</div>
          </div>
          <div class="employment-card__dates">
            {{ job.dates.start }} &ndash; {{ job.dates.end || "Present" }}
          </div>
        </div>
      </div>
    </section>
  </PageSection>
</template>

<script>
export default {
  name: "EmploymentSection",
  props: {
    jobs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$section-background: #26a69a;

.employment-section {
  position: relative;
  padding-top: 48px;
  padding-bottom: 48px;
  color: white;
  background-color: $section-background;

  &:before {
    display: block;
    content: "";
    height: 50%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    transform: skewY(-3deg);
    transform-origin: 0 0;
    opacity: 70%;
    background: inherit;

    @include smUp() {
      transform: skewY(-1deg);
    }
  }
}

.employment-section__cards {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  > .employment-card:not(:first-child) {
    margin-top: 24px;
  }
}

.employment-card {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: black;

  .employment-card__logo {
    max-width: 50px;
    max-height: 50px;
    margin-right: 16px;
    flex-shrink: 0;
  }

  // Collapse titles and dates on smaller screens
  .employment-card__collapse {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;

    @include smUp() {
      flex-direction: row;
      align-items: center;
    }
  }

  .employment-card__titles {
    margin-right: auto;
  }

  .employment-card__title {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .employment-card__subtitle {
    font-size: 0.9rem;
    font-weight: 300;
    color: $color-dark;
  }

  .employment-card__dates {
    font-size: 0.9rem;
    font-weight: 300;
    font-style: italic;
    color: $color-grey-dark;
  }
}
</style>
