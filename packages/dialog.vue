<template>
  <transition name="dialog-fade">
    <!--  遮罩层，click.self:点击自己才触发-->
    <div class="nn-dialog__wrapper" v-show="visible" @click.self="close">
      <div class="nn-dialog" :style="{width, marginTop: top}">
        <div class="nn-dialog__header">
          <slot name="title">
            <span class="nn-dialog__title">{{title}}</span>
          </slot>
          <button class="nn-dialog__headerbtn" @click="close">
            <i class="nn-icon-close"></i>
          </button>
        </div>
        <div class="nn-dialog__body">
          <slot></slot>
        </div>
        <div class="nn-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NnDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: '提示'
    },

    width: {
      type: String,
      default: '50%'
    },

    top: {
      type: String,
      default: '15vh'
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped lang="scss" src="./style/dialog.scss" />
