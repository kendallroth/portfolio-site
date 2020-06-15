<template>
  <div class="about-card card">
    <div class="about-card__header">
      <i class="about-card__icon material-icons">{{ icon }}</i>
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
    <hr class="about-card__divider" />
    <div v-if="$slots.default" class="about-card__content">
      <slot name="default" />
    </div>
    <div v-else-if="html" v-html="html" class="about-card__content" />
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: {
    html: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$about-card-padding: 16px;

.about-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: box-shadow 0.2s ease;

  @include elevate(3);

  &:hover {
    @include elevate(4);

    .about-card__icon {
      color: darken($theme-primary-dark, 5%);
    }
  }
}

.about-card__header {
  display: flex;
  align-items: center;
  padding: $about-card-padding;
}

.about-card__icon {
  margin-right: $about-card-padding;
  color: $theme-primary-dark;
  font-size: 48px;
  line-height: 1;
  transition: color 0.2s ease;
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
    color: $theme-primary-dark;
  }
}

.about-card__divider {
  width: auto;
  height: 2px;
  margin: 0 $about-card-padding;
  background-color: $theme-secondary;
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
