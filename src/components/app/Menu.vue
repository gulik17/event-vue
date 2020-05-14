<template>
  <nav class="menu">
    <ul class="nav metismenu" id="sidebar-menu">
      <router-link
        v-for="(link, idx) in links"
        :key="idx"
        tag="li"
        active-class="active"
        :to="link.url"
      >
        <br v-if="link.title == 'divider'" />
        <a v-else-if="link.childs.length" href="#" @click.prevent="" v-b-toggle.open>
          <i class="fa" :class="link.icon"></i>
          {{ link.title }}
          <i class="fa arrow"></i>
        </a>
        <a href="#" v-else>
          <i class="fa" :class="link.icon"></i>
          {{ link.title }}
        </a>
        <b-collapse tag="ul" v-if="link.childs.length" :id="link.url.replace('/','')">
          <router-link
            v-for="(child, idx) in link.childs"
            :key="idx"
            tag="li"
            active-class="active"
            :to="child.url"
          >
            <a href="#">{{ child.title }}</a>
          </router-link>
        </b-collapse>
      </router-link>
    </ul>
  </nav>
</template>

<script>
const child = [
  { title: 'Быстый старт', url: '/docs/intro' },
  { title: 'Авторизация', url: '/docs/auth' },
  { title: 'Поиск билетов', url: '/docs/search' },
  { title: 'Выбор билета', url: '/docs/get' },
  { title: 'Проверка и отметка', url: '/docs/pass-attempt' },
  { title: 'Установка признака печати бейджа', url: '/docs/set-printed' },
  { title: 'Сохранение билета', url: '/docs/ticket-save' },
  { title: 'Удаление билета', url: '/docs/ticket-delete' },
  { title: 'Список мастерклассов', url: '/docs/masterclasses' },
  { title: 'Сохранение мастеркласса', url: '/docs/masterclass-save' },
  { title: 'Удаление мастеркласса', url: '/docs/masterclass-delete' },
  { title: 'Список волонтеров', url: '/docs/volunteers' },
  { title: 'Список шаблонов бейджа', url: '/docs/templates' },
  { title: 'Список билетов для рассылки', url: '/docs/ticket-dispatch' },
  { title: 'Виджет регистрации билета', url: '/docs/reg-widget' },
  { title: 'Статистика', url: '/docs/stat' }
]
export default {
  data: () => ({
    links: [
      { title: 'Информация', url: '/dashboard', icon: 'fa-dashboard', childs: [] },
      { title: 'Мероприятие', url: '/event', icon: 'fa-edit', childs: [] },
      { title: 'Билеты', url: '/tickets', icon: 'fa-ticket', childs: [] },
      { title: 'divider', url: '', icon: '', childs: [] },
      { title: 'Мастерклассы', url: '/masterclasses', icon: 'fa-tags', childs: [] },
      { title: 'Шаблоны бейджа', url: '/badge-tpl', icon: 'fa-file-text-o', childs: [] },
      { title: 'Шаблон билета', url: '/ticket-tpl', icon: 'fa-file-text-o', childs: [] },
      { title: 'divider', url: '', icon: '', childs: [] },
      { title: 'Настройка Email', url: '/mailsettings', icon: 'fa-gears', childs: [] },
      { title: 'divider', url: '', icon: '', childs: [] },
      { title: 'Пользователи', url: '/users', icon: 'fa-users', childs: [] },
      { title: 'Файл загрузки', url: '/docs/loadtickets', icon: 'fa-file', childs: [] },
      { title: 'API', url: '/open', icon: 'fa-key', childs: child }
    ]
  })
}
</script>
