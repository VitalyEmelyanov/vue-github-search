<template>
  <input v-model="query" @input="debouncedSearch" placeholder="Enter username" />
</template>

<script>
import {mapActions, mapState} from 'vuex';
import debounce from 'lodash/debounce';

export default {
  name: 'search',
  computed: {
    ...mapState(['searchQuery']),
    query: {
      get() {
        return this.searchQuery;
      },
      set(val) {
        return this.setSearchQuery(val);
      }
    }
  },
  methods: {
    ...mapActions(['setSearchQuery', 'search']),
    debouncedSearch: debounce(function () {
      this.search();
    }, 500)
  }
};
</script>

<style lang="stylus" scoped>
input
  width 100%
  font-size 16px
  text-align center
</style>
