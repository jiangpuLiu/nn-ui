<template>
  <div :class="['nn-input', {'nn-input--suffix': showSuffix}]">
    <input
      :class="['nn-input__inner', {'is-disabled': disabled}]"
      :type="showPassword ? (pwdVisible ? 'text' : 'password') : type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
    <span class="nn-input__suffix" v-if="showSuffix">
      <i class="nn-input__icon nn-icon-close" v-if="clearable && value" @click="clear"></i>
      <i class="nn-input__icon nn-icon-settings" v-if="showPassword" @click="handlePassword"></i>
    </span>
  </div>

</template>

<script>

export default {
  name: 'NnInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },

    type: {
      type: String,
      default: 'text'
    },

    name: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    },

    value: {
      type: String,
      default: ''
    },

    clearable: {
      type: Boolean,
      default: false
    },

    showPassword: {
      type: Boolean,
      default: false
    }

  },

  data () {
    return {
      pwdVisible: false
    }
  },

  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },

  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    },

    clear () {
      this.$emit('input', '')
    },

    handlePassword () {
      this.pwdVisible = !this.pwdVisible
    }
  }
}
</script>

<style scoped lang="scss" src="./style/input.scss">

</style>
