<template>
  <div class="project-card card">
    <div class="project-card__image ratio-3by2">
      <g-image :alt="project.name" :src="project.image.src" />
    </div>
    <div class="project-card__description">
      <span class="project-card__name">{{ project.name }}</span>
      <span class="mx-xxs">&ndash;</span>
      <span class="project-card__date">{{ project.year }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  padding: 4px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  @include elevate(3);

  &:hover {
    transform: scale(1.025);
    @include elevate(5);
  }
}

.project-card__image {
  display: flex;
  overflow: hidden;

  img {
    object-fit: cover;
  }
}

.project-card__description {
  display: flex;
  padding: 12px 8px 8px;
  line-height: 1;
}

.project-card__name {
  font-weight: bold;
}

.project-card__date {
  color: $color-grey;
  font-weight: 300;
  font-style: italic;
}
</style>
