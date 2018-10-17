<template>
  <div class="container">
    <SearchForm
      v-bind:submit-search="submitSearch"
      v-bind:toggle-results-view="toggleResultsView"
    />
    <SearchResults
      v-if="showResults"
      v-bind:results-data="resultsData"
    />
    <p v-if="showResultsLoading">Loading results....</p>
  </div>
</template>

<script>
  import SearchForm from './SearchForm';
  import SearchResults from './SearchResults';

  export default {
    name: 'Content',
    props: {
      resultsData: Object,
      resultError: Boolean,
      showResults: Boolean,
      submitSearch: Function,
      toggleResultsView: Function,
      showResultsLoading: Boolean
    },
    components: { SearchResults, SearchForm },
    created: function () {
      /* eslint-disable */
      // console.log(this.toggleResultsView)
    }
  }
</script>
