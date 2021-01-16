<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="clickBackdrop">
      <div
        :style="{ width: `${width}px` }"
        aria-labelledby="modal__title"
        aria-describedby="modal__content"
        class="modal elevation-10"
        role="dialog"
        @click.stop
      >
        <div id="modal__title" class="modal__header">
          <slot name="header">
            <h3>{{ title }}</h3>
          </slot>
        </div>
        <slot v-if="closable" name="close">
          <button
            class="modal__close button is-icon"
            type="button"
            @click="close"
          >
            <MdiIcon :icon="icons.close" />
          </button>
        </slot>
        <div id="modal__content" class="modal__body">
          <slot name="default"> </slot>
        </div>
        <div class="modal__footer">
          <slot name="footer">
            <button class="button is-primary" type="button" @click="close">
              {{ closeText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mdiClose } from "@mdi/js";

export default {
  name: "modal",
  props: {
    /**
     * Whether modal has close icon
     */
    closable: {
      type: Boolean,
      default: true,
    },
    /**
     * Close button text
     */
    closeText: {
      type: String,
      default: "Close",
    },
    /**
     * Whether clicking outside can dismiss the modal
     */
    persistent: {
      type: Boolean,
      default: true,
    },
    /**
     * Modal title
     */
    title: {
      type: String,
      default: null,
    },
    /**
     * Modal width
     */
    width: {
      type: [Number, String],
      default: 500,
    },
  },
  data() {
    return {
      icons: { mdiClose },
    };
  },
  methods: {
    /**
     * Handle a backdrop click
     */
    clickBackdrop() {
      // Only non-persistent modals can be closed by clicking on the backdrop
      if (this.persistent) return;

      this.close();
    },
    /**
     * Close the modal
     */
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
$transition-time: 0.2s;

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
}

.modal {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 16px;
  background: white;
  overflow-x: auto;
  border-radius: 4px;

  @include mdUp {
    margin: 32px;
  }
}

.modal__header {
  display: flex;
  justify-content: flex-start;
  padding: 16px;
  color: $theme-primary-dark;
  border-bottom: 1px solid $color-light;
}

.modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px;
  border: none;
}

.modal__body {
  padding: 16px;
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid $color-light;
}

// Modal fade transition
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity #{$transition-time} ease;
}
</style>
