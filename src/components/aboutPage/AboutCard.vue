<template>
  <div class="about-card card">
    <div class="about-card__header">
      <i class="about-card__icon material-icons">{{ icon }}</i>
      <div class="about-card__titles">
        <div class="about-card__title">
          {{ title }}
        </div>
        <div class="about-card__subtitle">
          <span class="about-card__subtitle__prefix">
            I am passionate about&hellip;
          </span>
          <span class="about-card__subtitle__caption">
            {{ caption }}
          </span>
        </div>
      </div>
    </div>
    <hr class="about-card__divider" />
    <div class="about-card__content">
      <slot name="default" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: {
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
  font-weight: bold;
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
}
</style>
