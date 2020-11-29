<template>
  <el-container style="margin-left: 120px; margin-right: 120px;">
      <el-aside width="400px" >
        <el-row class="tac">
          <el-col :span="18">
            <el-menu
              :default-active="$route.path"
              router
              class="el-menu-vertical-demo">
              <el-submenu index="1">
                <template slot="title">
                  <span class="bigtext">MongoDB实验</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/e2">实验二</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <div style="width: 80%; line-height: 120px; font-size: 23px;">
            <h1>Hello ! ! !</h1>
            <h1>Bonjour ! ! !</h1>
            <h1>Hola ! ! !</h1>
            <h1>您好 ! ! !</h1>
          </div>
          
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
  /* background-color: #B3C0D1; */
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #D3DCE6; */
  text-align: center;
  /* line-height: 200px; */
  height: 100%;
}

.el-main {
  /* background-color: #E9EEF3; */
  text-align: center;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.bigtext {
  font-size: 17px;
  font-weight: 600;
}

.top {
  float: right;
  margin-right: 30px;
}
</style>
