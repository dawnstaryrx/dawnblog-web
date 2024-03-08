<template>
  <table class="table" style="text-align: center;">
          <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">用户ID</th>
                <th scope="col">用户名</th>
                <th scope="col">邮箱</th>
                <th scope="col">权限</th>
                <th scope="col">硬币数</th>
                <th scope="col">创建时间</th>
                <th scope="col">关注数</th>
                <th scope="col">粉丝数</th>
                <th scope="col">操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in userList" :key="item.id">
                  <th>{{ index+1 }}</th>
                  <td scope="row">{{ item.id }}</td>
                  <td >{{ item.username }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{  item.role }}</td>
                  <td>{{  item.coin }}</td>
                  <td>{{  item.createTime }}</td>
                  <td>{{  item.followNum }}</td>
                  <td>{{  item.fanNum }}</td>
                  <td>
                    <button  type="button" class="btn btn-danger" data-bs-toggle="modal" :data-bs-target=gernerateDBTd(item.id)>
                      更改权限
                      </button>
                      <!-- Modal -->
                      <div class="modal fade" :id=gernerateIdd(item.id) data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                              <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                      注意
                                  </h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                修改权限为：
                                <select v-model="role" class="form-select" aria-label="Default select example">
                                  <option value="0" selected>拉黑</option>
                                  <option value="1">普通用户</option>
                                  <option value="2">管理员</option>
                                </select>
                                  要更改用户 {{ item.username }}的权限为
                                  <span v-if="role == 0" style="color: red; font-size: larger;">拉黑</span>
                                  <span v-else-if="role == 1" style=" font-size: larger;">普通用户</span>
                                  <span v-else style="color: blue; font-size: larger;">管理员</span>
                                  吗？
                              </div>
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                                  <button @click="changeRole(item.id, role)" data-bs-dismiss="modal"  type="button" class="btn btn-danger">确认</button>
                              </div>
                              </div>
                          </div>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
</template>

<script>
import commonUtil from '@/utils/alertUtil';
import {userListGetService, userRoleChangeService} from "@/api/user.js"

export default {
  created() {
      let res = userListGetService();
      this.userList = res.data
      console.log(this.userList)
    },
  data() {
      return {
          userList:[],
          role:0,
      }
  },
  methods: {
    gernerateDBTd(id){
          return "#userRole" + id + "change"
    },
    gernerateIdd(id){
        return "userRole" + id + "change"
    },
    changeRole(id, role){
      let res = userRoleChangeService(id, role);
      if (res.code === 1) {
        commonUtil.message(res.message, "danger");
      }
      if (res.code === 0) {
        commonUtil.message(res.message, "success");
        let result = userListGetService();
        this.userList = result.data
      }
    },
  },
  
}
</script>

<style>

</style>