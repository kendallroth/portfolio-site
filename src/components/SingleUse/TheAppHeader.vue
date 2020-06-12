<template>
  <header class="app__header elevation-6">
    <nav class="header__left">
      <g-link class="header__link" exact to="/">Home</g-link>
    </nav>
    <g-image
      src="@assets/icons/logo_light_circle.svg"
      class="header__icon"
      width="64"
      @click="scrollToTop"
    />
    <nav class="header__right">
      <g-link class="header__link" to="/about/">About</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheAppHeader",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$header-icon-size: 64px;

.app__header {
  // position: absolute;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: $layout-navbar-height;
  background-color: $color-dark;
  border-bottom: 5px solid $theme-primary-light;
  z-index: 10;
}

.header__left,
.header__right {
  position: absolute;
  text-transform: uppercase;
  font-weight: 500;

  & > *:not(:first-of-type) {
    margin-left: 16px;
  }
}

.header__left {
  transform: translateX(calc(-50% - #{$header-icon-size} / 1.5));
}
.header__right {
  transform: translateX(calc(50% + #{$header-icon-size} / 1.5));
}

.header__icon {
  position: absolute;
  bottom: calc(-#{$header-icon-size} / 2);
  padding: 8px;
  background-color: $theme-primary-light;
  border-radius: 100px;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    background-color: $theme-primary;
  }
}

.header__link {
  padding: 8px;
  color: transparentize(white, 0.25);
  transition: color 0.2s;

  &:hover,
  &.active,
  &.active--exact {
    color: white;
  }
}
</style>
