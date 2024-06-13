<template>
  <div id="app">
    <div class="button-container">
     <!--      基础按钮-->
      <div class="row">
        <nn-button>测试</nn-button>
        <nn-button type="primary">测试</nn-button>
        <nn-button type="success">测试</nn-button>
        <nn-button type="warning">测试</nn-button>
        <nn-button type="danger">测试</nn-button>
        <nn-button type="info">测试</nn-button>
      </div>

      <!--      朴素按钮-->
      <div class="row">
        <nn-button plain>测试</nn-button>
        <nn-button type="primary" plain>测试</nn-button>
        <nn-button type="success" plain>测试</nn-button>
        <nn-button type="warning" plain>测试</nn-button>
        <nn-button type="danger" plain>测试</nn-button>
        <nn-button type="info" plain>测试</nn-button>
      </div>

      <!--      图标按钮-->
      <div class="row">
        <nn-button plain round icon="nn-icon-delete">测试</nn-button>
        <nn-button type="primary" plain round icon="nn-icon-delete">测试</nn-button>
        <nn-button type="success" plain round icon="nn-icon-delete">测试</nn-button>
        <nn-button type="warning" plain round icon="nn-icon-delete">测试</nn-button>
        <nn-button type="danger" plain round icon="nn-icon-delete">测试</nn-button>
        <nn-button type="info" plain round icon="nn-icon-delete">测试</nn-button>
      </div>

      <!--      图标按钮-->
      <div class="row">
        <nn-button plain circle icon="nn-icon-delete"></nn-button>
        <nn-button type="primary" circle  icon="nn-icon-delete"></nn-button>
        <nn-button type="success" circle  icon="nn-icon-delete"></nn-button>
        <nn-button type="warning" circle  icon="nn-icon-delete"></nn-button>
        <nn-button type="danger" circle  icon="nn-icon-delete"></nn-button>
        <nn-button type="info" circle  icon="nn-icon-delete"></nn-button>
      </div>

    </div>
    <div class="dialog-container">
      <NnButton @click="visible = true">打开弹窗</NnButton>
      <nn-dialog
        :visible.sync="visible"
        width="60%"
        top="100px"
      >
        <template v-slot:title>
          <h3>title插槽</h3>
        </template>
        <template v-slot:footer>
          <NnButton @click="visible = false">取消</NnButton>
          <NnButton type="primary" @click="visible = false">确定</NnButton>
        </template>
      </nn-dialog>
    </div>
    <div class="input-container">
      <nn-input
        placeholder="请输入用户名"
        type="text"
        v-model="userName"
        clearable
      ></nn-input>

      <nn-input
        placeholder="请输入密码"
        type="password"
        v-model="passWord"
        show-password
      ></nn-input>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      visible: false,
      userName: '',
      passWord: ''
    }
  }

}
</script>

<style lang="scss" scoped>
.row{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .nn-button{
    margin-right: 10px;
  }
}
.input-container{
  width: 200px;
}
</style>
