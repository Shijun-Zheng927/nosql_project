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
          <el-table class="table"
                :data="tablelist"
                stripe
                style="width: 90%">
                <el-table-column
                    prop="name"
                    label="查询内容"
                    width="500">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="80">
                    <template slot-scope="scope">
                    <el-button type="primary"  @click="query(scope.row.id)" >查询</el-button>
                    </template>
                </el-table-column>
            </el-table>
          
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'e2',
  data () {
    return {
      tablelist: [{
            id: 1,
            name: '找出年龄小于20岁的所有学生',
          },
          {
            id: 2,
            name: '找出年龄小于20岁且是软件学院的学生',
          },
          {
            id: 3,
            name: '找出学生关系中的所有学生',
          },
          {
            id: 4,
            name: '求所有学生的姓名、年龄',
          },
          {
            id: 5,
            name: '找出年龄小于20岁的学生的姓名、性别',
          },
          {
            id: 6,
            name: '检索所有课程情况',
          },
          {
            id: 7,
            name: '检索先行课号为“300001”的课程名',
          },
          {
            id: 8,
            name: '找出年龄大于50岁的老师',
          },
          {
            id: 9,
            name: '找出所有的男老师',
          },
          {
            id: 10,
            name: '找出所有在CS学院的老师',
          }
          ]
    }
  },
  methods: {
      query: function(data) {
          var v = '/e2_' + data
          console.log(v)
          this.$router.replace({path: v})
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
