<template>
  <form v-on:submit.prevent="handleSubmit">
    <div class="row col">
      <input id="search-keyword" class="float-left" type="text" placeholder="Search repos">
      <button class="button-primary float-right">Search</button>
    </div>
    <div class="row">
      <p>for e.g. react, atom, facebook/react etc.</p>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'SearchForm',
    props: {
      submitSearch: Function,
      toggleResultsView: Function
    },
    methods: {
      handleSubmit: function () {
        let keyword = document.getElementById('search-keyword').value;

        if (!keyword.length) {
          return;
        }

        this.submitSearch(keyword);
      }
    },
    created: function () {
      /* eslint-disable */
      console.log(this.submitSearch)
    }
  }
</script>
