<template>
  <button
    :class="['nn-button',`nn-button-${type}`, {
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }]"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没传入文本插槽，则不显示span内容 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'NnButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },

    plain: {
      type: Boolean,
      default: false
    },

    round: {
      type: Boolean,
      default: false
    },

    circle: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss" src="./style/button.scss" />
