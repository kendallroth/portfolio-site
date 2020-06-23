<template>
  <div :class="{ 'is-placeholder': placeholder }" class="employment-card">
    <div class="employment-card__header card">
      <div class="employment-card__header__logo ratio-1by1">
        <g-image v-if="job.logo" :alt="`${job.title} Logo`" :src="job.logo" />
        <div v-else class="employment-card__header__logo-placeholder" />
      </div>
      <div class="employment-card__header__collapse">
        <div class="employment-card__header__titles">
          <div class="employment-card__header__name">
            {{ job.name }}
            <a
              v-if="job.website"
              :href="job.website"
              class="employment-card__header__link"
              rel="noreferrer"
              target="_blank"
            >
              <i class="material-icons">link</i>
            </a>
          </div>
          <div class="employment-card__header__position">
            {{ job.position }}
          </div>
        </div>
        <div class="employment-card__header__additional">
          <div class="employment-card__header__dates">
            {{ job.dates.start }} &ndash; {{ job.dates.end || "Present" }}
          </div>
          <div class="employment-card__header__location">
            {{ job.location }}
          </div>
        </div>
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
  transition: box-shadow 0.2s ease;
  @include elevate(3);

  &:not(.is-placeholder):hover {
    @include elevate(5);
  }

  &.is-placeholder {
    // TODO: Possibly replace?
    .employment-card__header {
      color: white;
      background-color: rgba(200, 200, 200, 0.5);
      cursor: not-allowed;

      * {
        color: white !important;
      }
    }
  }
}

// Employment card header
.employment-card__header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: black;
}

.employment-card__header__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $logo-size;
  height: $logo-size;
  margin-right: 16px;
  flex-shrink: 0;

  .employment-card__header__logo-placeholder {
    width: 100%;
    height: 100%;
    border: 2px dashed white;
    border-radius: 4px;
  }
}

// Collapse titles and dates on smaller screens
.employment-card__header__collapse {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;

  @include smUp() {
    flex-direction: row;
    align-items: center;
  }
}

.employment-card__header__titles {
  margin-right: auto;
}

.employment-card__header__name {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
}

.employment-card__header__link {
  display: flex;
  margin-left: 4px;
  color: $theme-primary-dark;
}

.employment-card__header__position {
  font-size: 0.9rem;
  font-weight: 300;
  color: $color-dark;
}

.employment-card__header__additional {
  font-size: 0.9rem;

  @include smUp() {
    text-align: right;
  }
}

.employment-card__header__location {
  color: $color-grey-dark;
  font-weight: 300;
}
</style>
