<template>
  <footer class="sidebar-footer">
    <ul class="nav metismenu" id="customize-menu">
      <li>
        <b-collapse tag="ul" id="settings">
          <li class="customize">
            <div class="customize-item">
              <div class="row customize-header">
                <div class="offset-4 col-4">
                  <label class="title">фикс</label>
                </div>
                <div class="col-4">
                  <label class="title">пост</label>
                </div>
              </div>
              <div class="row d-none d-md-flex">
                <div class="col-4">
                  <label class="title">Панель:</label>
                </div>
                <div class="col-4">
                  <label>
                    <input class="radio" type="radio" name="sidebarPosition" value="sidebar-fixed" />
                    <span></span>
                  </label>
                </div>
                <div class="col-4">
                  <label>
                    <input class="radio" type="radio" name="sidebarPosition" value />
                    <span></span>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <label class="title">Заголовок:</label>
                </div>
                <div class="col-4">
                  <label>
                    <input class="radio" type="radio" name="headerPosition" value="header-fixed" />
                    <span></span>
                  </label>
                </div>
                <div class="col-4">
                  <label>
                    <input class="radio" type="radio" name="headerPosition" value />
                    <span></span>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <label class="title">Подвал:</label>
                </div>
                <div class="col-4">
                  <label>
                    <input class="radio" type="radio" name="footerPosition" value="footer-fixed" />
                    <span></span>
                  </label>
                </div>
                <div class="col-4">
                  <label>
                    <input class="radio" type="radio" name="footerPosition" value />
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="customize-item">
              <ul class="customize-colors">
                <li>
                  <span class="color-item color-red" data-theme="red"></span>
                </li>
                <li>
                  <span class="color-item color-orange" data-theme="orange"></span>
                </li>
                <li>
                  <span class="color-item color-green" data-theme="green"></span>
                </li>
                <li>
                  <span class="color-item color-seagreen" data-theme="seagreen"></span>
                </li>
                <li>
                  <span class="color-item color-blue active" data-theme></span>
                </li>
                <li>
                  <span class="color-item color-purple" data-theme="purple"></span>
                </li>
              </ul>
            </div>
          </li>
        </b-collapse>
        <a href="#" @click.prevent="" v-b-toggle.settings>
          <i class="fa fa-cog"></i> Настройка
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'SidebarFooter'
}
</script>
