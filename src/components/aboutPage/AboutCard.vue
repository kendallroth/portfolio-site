<template>
  <div :class="{ 'is-primary': primary }" class="about-card card">
    <div class="about-card__header elevation-2">
      <mdi-icon :icon="icons[icon]" class="about-card__icon" />
      <div class="about-card__titles">
        <h2 class="about-card__title">
          {{ title }}
        </h2>
        <div class="about-card__subtitle">
          <span class="about-card__subtitle__prefix">
            I am passionate about&hellip;
          </span>
          <span class="about-card__subtitle__caption">{{ caption }}.</span>
        </div>
      </div>
    </div>
    <div v-if="$slots.default" class="about-card__content">
      <slot name="default" />
    </div>
    <div v-else-if="html" v-html="html" class="about-card__content" />
  </div>
</template>

<script>
import {
  mdiAirplaneTakeoff,
  mdiBook,
  mdiSeat,
  mdiFace,
  mdiMusicNote,
  mdiSchool,
} from "@mdi/js";

export default {
  name: "AboutCard",
  props: {
    caption: {
      type: String,
      required: true,
    },
    html: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        airport: mdiAirplaneTakeoff,
        book: mdiBook,
        seat: mdiSeat,
        face: mdiFace,
        music: mdiMusicNote,
        school: mdiSchool,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
$about-card-padding: 16px;

.about-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  transition: box-shadow 0.2s ease;

  &.is-primary {
    margin: 0;
  }

  @include elevate(3);

  &:hover {
    @include elevate(4);
  }

  @include smUp() {
    width: auto;
    margin: 0 16px;
  }
}

.about-card__header {
  display: flex;
  align-items: center;
  padding: $about-card-padding;
  color: white;
  background-color: $theme-primary-dark;
}

.about-card__icon {
  margin-right: $about-card-padding;
  width: 48px;
  height: 48px;
}

.about-card__title {
  margin-bottom: 4px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
}

.about-card__subtitle {
  font-size: 0.9rem;

  .about-card__subtitle__prefix {
    font-weight: 500;
  }
}

.about-card__content {
  padding: $about-card-padding;

  p {
    margin-bottom: 8px;
    background-color: red;
  }
}
</style>

<style lang="scss">
// NOTE: Several styles require non-scoped rules (for v-html)
.about-card__content {
  font-size: 0.9rem;

  p {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  a {
    color: $theme-primary-dark;
    font-weight: 500;
    transition: text-decoration 0.2s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    @include lgUp() {
      column-count: 2;
    }
  }
}
</style>
