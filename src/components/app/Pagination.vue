<template>
  <div class="fixed-table-pagination" style="display: block;">
    <div class="pull-left pagination-detail">
      <span class="pagination-info">Записи с {{ offset+1 }} по {{ offset + limit }} из {{ total }}</span>
      <span class="page-list">
        <span class="btn-group dropup">
          <b-dropdown id="dropdown-1" :text="limit.toString()" class="m-md-2">
            <b-dropdown-item :class="{'active': limit == 5}" @click.prevent="setLimit(5)">5</b-dropdown-item>
            <b-dropdown-item :class="{'active': limit == 10}" @click.prevent="setLimit(10)">10</b-dropdown-item>
            <b-dropdown-item :class="{'active': limit == 20}" @click.prevent="setLimit(20)">20</b-dropdown-item>
          </b-dropdown>
        </span>
        записей на страницу
      </span>
    </div>
    <div class="pull-right pagination" v-if="total > limit">
      <ul class="pagination">
        <li
          v-for="i in Math.round(total/limit + 1)"
          :key="i"
          class="page-item page-number"
          :class="{'active': offset == (i-1) * limit}"
        >
          <a href="#" @click.prevent="setOffset((i-1) * limit)" class="page-link">{{ i }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: ['offset', 'limit', 'total'],
  methods: {
    setLimit (limit) {
      this.$emit('change-pagination', { offset: this.offset, limit: limit })
    },
    setOffset (offset) {
      this.$emit('change-pagination', { offset: offset, limit: this.limit })
    }
  }
}
</script>
