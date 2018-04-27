<template>
  <div>
    一蓑烟雨任平生
    <!-- <el-container>
      <el-main>
        <router-view class="view"></router-view>
      </el-main>
    </el-container> -->
 
<el-container>
      <el-header class='header'>
      <el-row>
        <el-col :span='23'>
          <el-menu mode='horizontal' class='nav_box' background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
              <div v-for='(item,index) in newrouter[0].children' :key="item.path">
                  <router-link :to='item.path'>
                    <el-menu-item :index="item.path" >
                      {{ item.name }}
                    </el-menu-item>
                  </router-link>
              </div>
          </el-menu>
        </el-col>
        <el-col :span='1'>
          <div class='logout_box' @click='logout()'>
            退 出
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view class="view"></router-view>
   </el-main>   
</el-container>
  </div>
</template>
<script>
    import { mapGetters } from 'vuex'; 
    export default{
        name:'index',
        data(){
          return {

          }
        },
        computed:{
          ...mapGetters([
              'newrouter'
          ])
        },
        methods:{
          logout(){
            this.$store.dispatch('logout').then(()=>{
              this.$router.push({path:'/login'})
            }).catch(err=>this.$message.error(err))
          }
        },
        mounted(){
         // console.log(newrouter)
        }
    }
</script>

<style scoped>
.header{
	padding: 0px;
}
.nav_box{
	border-bottom: 0px;
}
.nav_box a{
  float: left;
}
.logout_box{
	background-color: #545c64;
	line-height: 60px;
    width: 100%;
    color:#fff;
    cursor: pointer;
}
</style>