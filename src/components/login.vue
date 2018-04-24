<template>
  <div class="login_box">
    <el-form label-position="right" label-width="60px" :model="loginfrom">
      <el-form-item label="用户名">
        <el-input v-model="loginfrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" v-model="loginfrom.pew" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submituUserInfo(loginfrom)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
    export default{
        data(){
          return {
            loginfrom:{
              username:'adan',
              pew:'123456'
            }
          }
        },
        methods:{
          submituUserInfo(data){
          // this.$store.state.login.hello = '借款人'
              this.$store.dispatch('LoginsTom',data).then(res=>{
                
              }).catch(()=>{

              })
          }
        },
        computed:{
          god:function(){
            return parseFloat(this.loginfrom.pew)
          }
        }
    }
</script>
<style scoped>
.login_box{
    width: 280px;
    position: relative;
    left: 39%;
    top: 200px;
    border: 1px solid skyblue;
    border-radius: 15px;
    padding: 38px 60px 5px 25px;
    text-align: center;
}
</style>