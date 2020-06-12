<script>
import Vue from "vue";

/**
 * Hover component that provides hover state through a scoped slot.
 *   https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VHover/VHover.ts
 */
export default Vue.extend({
  name: "Hover",
  props: {
    /**
     * Whether the hover is disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Hover close delay
     */
    openDelay: {
      type: [Number, String],
      default: 0,
    },
    /**
     * Hover close delay
     */
    closeDelay: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      isActive: false,
      openTimeout: null,
      closeTimeout: null,
    };
  },
  methods: {
    /**
     * Start the hover effect (with delay)
     */
    onMouseEnter() {
      this.runDelay("open");
    },
    /**
     * End the hover effect (with delay)
     */
    onMouseLeave() {
      this.runDelay("close");
    },
    /**
     * Run a delay when opening or closing the hover effect
     */
    runDelay(type) {
      clearTimeout(this.openTimeout);
      clearTimeout(this.closeTimeout);

      const delay = parseInt(this[`${type}Delay`], 10);

      this[`${type}Timeout`] = setTimeout(() => {
        this.isActive = type === "open" ? true : false;
      }, delay);
    },
  },
  render() {
    if (!this.$scopedSlots.default) {
      console.warn("No scoped slot was provided to the Hover component");
      return null;
    }

    let element = null;

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({ hover: this.isActive });
    }

    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }

    if (!element || Array.isArray(element) || !element.tag) {
      return element;
    }

    // NOTE: I have no idea what this does or how it attaches the events...
    if (!this.disabled) {
      element.data = element.data || {};
      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave,
      });
    }

    return element;
  },
});
</script>
