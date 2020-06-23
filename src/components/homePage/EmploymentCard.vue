<template>
  <div :class="{ 'is-placeholder': placeholder }" class="employment-card card">
    <div class="employment-card__header" @click="toggleContent">
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
        <i
          v-if="!placeholder"
          :class="{ 'is-active': isShown }"
          class="employment-card__header__toggle-icon material-icons"
        >
          keyboard_arrow_up
        </i>
      </div>
    </div>
    <div
      v-if="!placeholder"
      ref="content"
      :style="contentStyle"
      class="employment-card__content"
    >
      <div v-html="job.content" class="employment-card__html" />
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
  data() {
    return {
      isShown: false,
    };
  },
  computed: {
    contentStyle() {
      const contentEl = this.$refs.content;

      return {
        maxHeight: this.isShown ? contentEl.scrollHeight + "px" : 0,
      };
    },
  },
  methods: {
    /**
     * Toggle the card content
     */
    toggleContent() {
      if (this.placeholder) return;

      this.isShown = !this.isShown;
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
    background-color: rgba(200, 200, 200, 0.5);

    // TODO: Possibly replace?
    .employment-card__header {
      color: white;
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
  cursor: pointer;
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
  transition: color 0.2s ease;

  &:hover {
    color: $theme-primary-light;
  }
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

.employment-card__header__toggle-icon {
  margin-left: 8px;
  padding: 4px;
  font-size: 1.5rem;
  color: $theme-primary;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: transparentize($theme-primary, 0.9);
  }

  &.is-active {
    transform: rotate(180deg);
  }
}
</style>

<style lang="scss">
// NOTE: Unscoped SCSS is necessary for v-html
.employment-card__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease;
}

.employment-card__html {
  padding: 16px;
  color: black;
  font-size: 0.9rem;
  border-top: 1px solid $color-grey-light;

  ul {
    margin: 0;
    padding-left: 16px;
    list-style-type: circle;
  }
}
</style>
