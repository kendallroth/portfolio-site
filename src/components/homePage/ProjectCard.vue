<template>
  <div class="project-card card">
    <Hover v-slot="{ hover }">
      <div class="project-card__image ratio-3by2" @click="toggleOverlay">
        <g-image :alt="project.name" :src="project.image.src" />
        <div
          :class="{ 'is-hover': hover, 'is-shown': isShown }"
          class="project-card__overlay"
        >
          <g-link
            :to="`/project/${project.slug}/`"
            class="project-card__overlay__action"
          >
            <mdi-icon :icon="icons.mdiFileDocument" />
            <span>Details</span>
          </g-link>
          <a
            v-if="project.link"
            :href="project.link"
            class="project-card__overlay__action"
            rel="noreferrer"
            target="_blank"
          >
            <mdi-icon :icon="icons.mdiLink" />
            <span>Visit</span>
          </a>
        </div>
      </div>
    </Hover>
    <div class="project-card__summary">
      <div class="is-left">
        <span class="project-card__name">{{ project.name }}</span>
        <span class="mx-xxs">&ndash;</span>
        <span class="project-card__date">
          {{ project.date | formatDate("yyyy") }}
        </span>
      </div>
      <div class="is-right">
        <mdi-icon
          v-if="project.pinned"
          :icon="icons.mdiPin"
          class="project-card__pin"
        />
        <span class="project-card__type tag">
          {{ project.type | lowercase }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiFileDocument, mdiLink, mdiPin } from "@mdi/js";

export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      icons: { mdiFileDocument, mdiLink, mdiPin },
      isShown: false,
    };
  },
  methods: {
    /**
     * Toggle the overlay (only for non-mobile devices)
     */
    toggleOverlay() {
      if (!this.$breakpoint.smDown) return;

      this.isShown = !this.isShown;
    },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 4px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  @include elevate(3);

  &:hover {
    transform: scale(1.01);
    @include elevate(5);
  }
}

.project-card__image {
  position: relative;
  display: flex;
  overflow: hidden;

  img {
    object-fit: cover;
  }
}

// Project card overlay is a child of the image
.project-card__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}

.project-card__overlay {
  display: flex;
  visibility: hidden;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  font-weight: 500;
  user-select: none;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease,
    background-color 0.2s ease, font-size 0.2s ease;

  &.is-shown,
  &.is-hover {
    visibility: visible;
    background-color: transparentize($theme-secondary-dark, 0.5);
    opacity: 1;
  }

  svg {
    margin-bottom: 4px;
    width: 3rem;
    height: 3rem;
  }

  > *:not(:first-child) {
    margin-left: 16px;
  }
}

.project-card__overlay__action {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: darken(white, 15%);
  }
}

.project-card__summary {
  display: flex;
  padding: 12px 8px 8px;
  line-height: 1;

  .is-left {
    display: flex;
    align-items: center;
  }

  .is-right {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
}

.project-card__name {
  font-weight: bold;
}

.project-card__date {
  color: $color-grey;
  font-weight: 300;
  font-style: italic;
}

.project-card__pin {
  height: 1rem;
  margin-right: 4px;
  color: $color-grey;
}

.project-card__type {
  margin-left: auto;
  font-size: 0.9rem;
}
</style>
