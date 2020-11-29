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
          <h1 style="margin-right: 30%;">找出年龄小于20岁的所有学生</h1>
          <el-table class="table"
                :data="tablelist"
                stripe
                style="width: 90%">
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="130">
                </el-table-column>
                <el-table-column
                    prop="age"
                    label="年龄"
                    width="110">
                </el-table-column>
                <el-table-column
                    prop="birthday"
                    label="出生日期"
                    width="130">
                </el-table-column>
                <el-table-column
                    prop="sex"
                    label="性别"
                    width="110">
                </el-table-column>
                <el-table-column
                    prop="dname"
                    label="院系名称"
                    width="130">
                </el-table-column>
                <el-table-column
                    prop="classname"
                    label="班级"
                    width="130">
                </el-table-column>
                
            </el-table>
          
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'e2_1',
  data () {
    return {
      tablelist: []
    }
  },
  created: function() {
    this.$axios.post('/e2_1')
    .then(successResponse => {
    console.log(successResponse.data)
    this.getdata(successResponse.data)
    // list = successResponse.data
    // console.log('list' + list)
    })
  },
  methods: {
      getdata(data) {
        this.tablelist = data
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
