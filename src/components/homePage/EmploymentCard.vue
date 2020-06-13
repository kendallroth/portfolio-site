<template>
  <Hover v-slot="{ hover }">
    <div
      :class="{ 'elevation-5': hover }"
      class="employment-card card elevation-3"
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
  </Hover>
</template>

<script>
export default {
  name: "EmploymentCard",
  props: {
    /**
     * Job details
     */
    job: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.employment-card {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: black;
  transition: box-shadow 0.2s ease;

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
