<template>
  <page-layout>
    <page-section size="md-10 lg-8">
      <h2 class="project__title mt-sm mb-xs">{{ project.name }}</h2>
      <h3 class="project__subtitle mb-sm">
        {{ project.date | formatDate("yyyy") }}&thinsp;&ndash;&thinsp;
        {{ project.type | capitalize }}
      </h3>
      <div class="project__image">
        <g-image
          :alt="project.name"
          :src="project.image"
          height="533"
          width="800"
        />
        <a
          :href="project.link"
          class="project__link"
          rel="noreferrer"
          target="_blank"
        >
          <mdi-icon :icon="icons.mdiOpenInNew" class="mr-xs" />
          <span>Visit</span>
        </a>
      </div>
      <div class="project__tags tags mt-sm">
        <span v-for="tag in project.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
      <div v-html="project.content" class="project__html mt-sm" />
    </page-section>
  </page-layout>
</template>

<page-query>
query ($id: ID!) {
  project: project(id: $id) {
    content
    date
    image(width: 800, height: 533, quality: 90)
    link
    name
    tags
    type
  }
}
</page-query>

<script>
import { mdiOpenInNew } from "@mdi/js";

export default {
  name: "Project",
  data() {
    return {
      icons: { mdiOpenInNew },
    };
  },
  computed: {
    project() {
      return this.$page.project;
    },
  },
};
</script>

<style lang="scss" scoped>
.project__subtitle {
  color: $color-grey-dark;
}

.project__image {
  position: relative;
  display: flex;
  box-sizing: border-box;
  border: 4px solid $theme-primary-light;
  border-radius: 8px;

  @include elevate(4);
}

.project__link {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  padding: 8px;
  color: $theme-primary-dark;
  font-weight: 500;
  background-color: transparentize(white, 0.4);
  border-radius: 100px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: transparentize(white, 0.2);
  }
}
</style>

<style lang="scss">
// NOTE: Unscoped SCSS is necessary for v-html
.project__html {
  blockquote {
    margin: 0;
    padding: 4px 4px 4px 16px;
    font-weight: 300;
    border-left: 4px solid $theme-primary-dark;
    border-radius: 4px 0 0 4px;
  }

  dl {
    dt {
      font-weight: 500;

      &:not(:first-child) {
        margin-top: 8px;
      }
    }

    dd {
      margin: 0;
    }
  }

  > h2,
  > h3,
  > h4 {
    margin-top: 24px;
    margin-bottom: 16px;
  }

  > p,
  > blockquote {
    margin-bottom: 16px;
  }
}
</style>
