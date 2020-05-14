<template>
  <article class="content cards-page">
    <section class="section">
      <div class="title-block">
        <h3 class="title">Пользователи</h3>
        <p class="title-description">Администрирование пользователей мероприятия</p>
      </div>
      <div class="card">
        <div class="card-block">
          <section class="section">
            <div class="row align-items-center">
              <div class="col-md-3">
                <a class="btn btn-primary user-add my-2" href="#" @click.prevent="" v-b-modal.addmodal>
                  <i class="glyphicon glyphicon-plus"></i> Новый пользователь
                </a>
              </div>
              <div class="offset-md-4 col-md-4 search">
                <input class="form-control" type="text" placeholder="Поиск" />
              </div>
              <div class="col-md-1">
                <button
                  class="btn btn-default"
                  type="button"
                  title="Обновить"
                  @click="getAllUsers()">
                  <i class="fa fa-refresh icon-refresh"></i>
                </button>
              </div>
            </div>
            <div class="table-responsive">
              <table
                id="table-users"
                data-toolbar="#toolbar"
                data-sort-name="login"
                data-sort-order="asc"
                class="table table-sm"
                data-click-to-select="true"
                data-single-select="true"
              >
                <thead>
                  <tr>
                    <th style data-field="login">
                      <div class="th-inner sortable both asc">Логин</div>
                      <div class="fht-cell"></div>
                    </th>
                    <th style data-field="role">
                      <div class="th-inner sortable both">Роль</div>
                      <div class="fht-cell"></div>
                    </th>
                    <th style data-field="name">
                      <div class="th-inner sortable both">Имя</div>
                      <div class="fht-cell"></div>
                    </th>
                    <th style data-field="email">
                      <div class="th-inner sortable both">Email</div>
                      <div class="fht-cell"></div>
                    </th>
                    <th style="width: 90px;" data-field="4">
                      <div class="th-inner">Действия</div>
                      <div class="fht-cell"></div>
                    </th>
                  </tr>
                </thead>
                <tbody v-if="users.length">
                  <tr v-for="(user, idx) in users" :key="idx" :data-index="idx">
                    <td>{{user.login}}</td>
                    <td>{{user.role}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td style="width: 90px; ">
                      <div class="btn-group btn-group-xs">
                        <a
                          class="edit btn btn-primary btn-sm" href="#"
                          title="Изменить"
                          v-b-modal.editmodal
                          @click.prevent="clickedUser=user"
                        >
                          <i class="fa fa-edit"></i>
                        </a>&nbsp;
                        <a
                          class="remove btn btn-sm btn-warning" href="#"
                          title="Удалить"
                          v-b-modal.deletemodal
                          @click.prevent="clickedUser=user"
                        >
                          <i class="fa fa-remove"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="5">
                      <p class="text-center">Пожалуйста, подождите, идет загрузка...</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Pagination
              :offset="offset"
              :limit="limit"
              :total="total"
              @change-pagination="changePagination" />
          </section>
        </div>
      </div>
    </section>

    <!-- add modal -->
    <b-modal id="addmodal" v-model="showAddModal" title="Добавить пользователя">
      <b-row>
        <b-col cols="6" class="form-group">
          <label for="uname" class="small">Имя пользователя</label>
          <b-form-input id="uname" class="boxed" v-model="newUser.username"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="login" class="small">Логин</label>
          <b-form-input id="login" class="boxed" v-model="newUser.login"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="email" class="small">Email</label>
          <b-form-input id="email" class="boxed" v-model="newUser.email"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="mobile" class="small">Телефон</label>
          <b-form-input id="mobile" class="boxed" v-model="newUser.mobile"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="role" class="small">Роль</label>
          <b-form-input id="role" class="boxed" v-model="newUser.role"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="password" class="small">Пароль</label>
          <b-form-input id="role" class="boxed" v-model="newUser.password"></b-form-input>
        </b-col>
      </b-row>
      <template v-slot:modal-footer>
       <b-button class="btn btn-success" @click="addUser();">Сохранить</b-button>
       <b-button class="btn btn-secondary" @click="showAddModal=false">Отмена</b-button>
      </template>
    </b-modal>

    <!-- edit modal -->
    <b-modal id="editmodal" v-model="showEditModal" title="Редактировать пользователя">
      <b-row>
        <b-col cols="6" class="form-group">
          <label for="uname" class="small">Имя пользователя</label>
          <b-form-input id="uname" class="boxed" v-model="clickedUser.username"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="login" class="small">Логин</label>
          <b-form-input id="login" class="boxed" v-model="clickedUser.login"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="email" class="small">Email</label>
          <b-form-input id="email" class="boxed" v-model="clickedUser.email"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="mobile" class="small">Телефон</label>
          <b-form-input id="mobile" class="boxed" v-model="clickedUser.mobile"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="role" class="small">Роль</label>
          <b-form-input id="role" class="boxed" v-model="clickedUser.role"></b-form-input>
        </b-col>
        <b-col cols="6" class="form-group">
          <label for="password" class="small">Пароль</label>
          <b-form-input id="role" class="boxed" v-model="clickedUser.password"></b-form-input>
        </b-col>
      </b-row>
      <template v-slot:modal-footer>
       <b-button class="btn btn-success" @click="updateUser();">Сохранить</b-button>
       <b-button class="btn btn-secondary" @click="showEditModal=false">Отмена</b-button>
      </template>
    </b-modal>

    <!-- delete data -->
    <b-modal id="deletemodal" v-model="showDeleteModal" title="Удалить пользователя?">
      <p class="my-4">Вы уверены, что хотите удалить?<br>
        <b>{{ clickedUser.login }}</b></p>
      <template v-slot:modal-footer>
       <b-button class="btn btn-danger" @click="deleteUser();">Да</b-button>
       <b-button class="btn btn-secondary" @click="showDeleteModal=false">Нет</b-button>
      </template>
    </b-modal>
  </article>
</template>

<script>
import axios from 'axios'
import Pagination from '@/components/app/Pagination'

export default {
  name: 'Users',
  data: () => ({
    showAddModal: false,
    showEditModal: false,
    showDeleteModal: false,
    users: [],
    newUser: { login: '', role: '', username: '', email: '', mobile: '', password: '' },
    clickedUser: {},
    sort: 'id',
    order: 'asc',
    offset: 0,
    limit: 5,
    total: 0
  }),
  mounted () {
    this.getAllUsers()
  },
  components: {
    Pagination
  },
  methods: {
    async getAllUsers () {
      this.users = []
      const token = await this.$store.dispatch('getToken')
      axios
        .get('https://eventreligion.com/api/v1/users.php?action=read&sort=' + this.sort + '&order=' + this.order + '&offset=' + this.offset + '&limit=' + this.limit + '&token=' + token)
        .then(response => {
          if (response.data.error) {
            this.$error(response.data.message)
          } else {
            this.users = response.data.users
            this.total = response.data.total
          }
        })
    },
    async addUser () {
      var formData = this.toFormData(this.newUser)
      const token = await this.$store.dispatch('getToken')
      axios
        .post('https://eventreligion.com/api/v1/users.php?action=create&token=' + token, formData)
        .then(response => {
          this.newUser = { login: '', role: '', username: '', email: '', mobile: '' }
          if (response.data.error) {
            this.$error(response.data.message)
          } else {
            this.$message(response.data.message)
            this.getAllUsers()
          }
          this.showAddModal = false
        })
    },
    async updateUser () {
      var formData = this.toFormData(this.clickedUser)
      const token = await this.$store.dispatch('getToken')
      axios
        .post('https://eventreligion.com/api/v1/users.php?action=update&token=' + token, formData)
        .then(response => {
          this.clickedUser = {}
          if (response.data.error) {
            this.$error(response.data.message)
          } else {
            this.$message(response.data.message)
            this.getAllUsers()
          }
          this.showEditModal = false
        })
    },
    async deleteUser () {
      var formData = this.toFormData(this.clickedUser)
      const token = await this.$store.dispatch('getToken')
      axios
        .post('https://eventreligion.com/api/v1/users.php?action=delete&token=' + token, formData)
        .then(response => {
          this.clickedUser = {}
          if (response.data.error) {
            this.$error(response.data.message)
          } else {
            this.$message(response.data.message)
            this.getAllUsers()
          }
          this.showDeleteModal = false
        })
    },
    changePagination (params) {
      this.offset = params.offset
      this.limit = params.limit
      this.getAllUsers()
    }
  }
}
</script>
