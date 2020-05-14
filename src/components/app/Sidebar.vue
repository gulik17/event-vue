<template>
  <div>
    <aside class="sidebar">
      <div class="sidebar-container">
        <div class="sidebar-header">
          <div class="brand">
            <div class="logo">
              <img class="i" src="/img/tickets.png" />
            </div>
            <strong>
              <a href="/">
                <span class="text-success">EVENT</span>
                <span class="text-primary">Online</span>
              </a>
            </strong>
          </div>
        </div>
        <Menu />
      </div>
      <SidebarFooter />
    </aside>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
  </div>
</template>

<script>
import Menu from '@/components/app/Menu'
import SidebarFooter from '@/components/app/SidebarFooter'

export default {
  name: 'Sidebar',
  components: {
    Menu, SidebarFooter
  }
}
</script>
