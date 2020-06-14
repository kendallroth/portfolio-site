<template>
  <div class="skill-card card">
    <div class="skill-card__logo">
      <g-image :alt="skill.name" :src="imageUrl" />
    </div>
    <div class="skill-card__content">
      <div class="skill-card__name">
        {{ skill.name }}
      </div>
      <div class="skill-card__tags">
        <span v-for="tag in skill.tags" :key="tag" class="skill-card__tag">
          {{ tag }}
        </span>
      </div>
      <div class="skill-card__rating">
        <div
          :style="{ width: `${skill.rating}%` }"
          class="skill-card__rating__progress"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    /**
     * Skill details
     */
    skill: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      return require(`!!assets-loader?height=48&width=48!@content/skills/images/${this.skill.image}.png`);
    },
  },
};
</script>

<style lang="scss" scoped>
.skill-card {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s ease;

  @include elevate(2);

  &:hover {
    @include elevate(4);
  }
}

.skill-card__logo {
  margin-right: 12px;

  img {
    filter: brightness(0) saturate(100%) invert(59%) sepia(74%) saturate(782%) hue-rotate(176deg) brightness(91%) contrast(87%);
    //filter: brightness(0) saturate(100%) invert(33%) sepia(95%) saturate(624%) hue-rotate(167deg) brightness(87%) contrast(85%);
  }
}

.skill-card__name {
  font-weight: bold;
  margin-bottom: 4px;
}

.skill-card__tags {
  font-size: 0.8rem;
}

.skill-card__tag {
  padding: 3px 6px;
  border-radius: 4px;
  border: 1px solid transparentize($theme-secondary, 0.8);
  background-color: transparentize($theme-secondary, 0.95);
}

.skill-card__rating {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: transparentize($theme-secondary-light, 0.75);
}

.skill-card__rating__progress {
  height: 100%;
  background-color: $theme-secondary-light;
}
</style>
