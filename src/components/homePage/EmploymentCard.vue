<template>
  <div :class="{ 'is-placeholder': placeholder }" class="employment-card card">
    <div class="employment-card__logo ratio-1by1">
      <g-image v-if="job.logo" :alt="`${job.title} Logo`" :src="job.logo" />
      <div v-else class="employment-card__logo-placeholder" />
    </div>
    <div class="employment-card__collapse">
      <div class="employment-card__titles">
        <div class="employment-card__name">{{ job.name }}</div>
        <div class="employment-card__position">{{ job.position }}</div>
      </div>
      <div class="employment-card__dates">
        {{ job.dates.start }} &ndash; {{ job.dates.end || "Present" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmploymentCard",
  props: {
    /**
     * Whether the card is a placeholder
     */
    placeholder: {
      type: Boolean,
      default: false,
    },
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
$logo-size: 50px;

.employment-card {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: black;
  transition: box-shadow 0.2s ease;
  @include elevate(3);

  &:not(.is-placeholder):hover {
    @include elevate(5);
  }

  &.is-placeholder {
    color: white;
    background-color: rgba(200, 200, 200, 0.5);
    cursor: not-allowed;

    * {
      color: white !important;
    }
  }

  .employment-card__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: $logo-size;
    height: $logo-size;
    margin-right: 16px;
    flex-shrink: 0;

    .employment-card__logo-placeholder {
      width: 100%;
      height: 100%;
      border: 2px dashed white;
      border-radius: 4px;
    }
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

  .employment-card__name {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .employment-card__position {
    font-size: 0.9rem;
    font-weight: 300;
    color: $color-dark;
  }

  .employment-card__dates {
    font-size: 0.9rem;
    font-weight: 300;
    color: $color-grey-dark;
  }
}
</style>
