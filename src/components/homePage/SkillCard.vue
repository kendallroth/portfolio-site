<template>
  <div class="skill-card card">
    <div class="skill-card__logo">
      <g-image :alt="skill.name" :src="imageUrl" />
    </div>
    <div class="skill-card__content">
      <div class="skill-card__name">
        {{ skill.name }}
      </div>
      <div class="skill-card__stars">
        <i v-for="n in 5" :key="n" class="material-icons">
          {{ n <= skill.use ? "star" : "star_outline" }}
        </i>
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
  transition: box-shadow 0.2s ease;

  @include elevate(2);

  &:hover {
    @include elevate(4);
  }
}

.skill-card__logo {
  margin-right: 12px;
}

.skill-card__name {
  font-weight: bold;
}

.skill-card__stars {
  font-size: 0.9rem;
  color: $theme-secondary;
}

.skill-card__rating {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: transparentize($theme-primary, 0.75);
}

.skill-card__rating__progress {
  height: 100%;
  background-color: $theme-primary;
}
</style>
