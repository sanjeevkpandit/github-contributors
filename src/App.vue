<template>
  <div id="app">
    <NavBar/>
    <Content
      v-bind:results-data="resultsData"
      v-bind:result-error="resultError"
      v-bind:show-results="showResults"
      v-bind:show-results-loading="showResultsLoading"
      v-bind:submit-search="submitSearch"
      v-bind:toggle-results-view="toggleResultsView"
    />
  </div>
</template>

<script>
  import axios from 'axios';
  import 'mustard-ui/dist/css/mustard-ui.min.css';

  import NavBar from './components/NavBar';
  import Content from './components/contents/Content';

  export default {
    name: 'app',
    components: { NavBar, Content },
    data: function () {
      return {
        resultsData: {},
        resultError: false,
        showResults: false,
        showResultsLoading: false
      };
    },
    methods: {
      toggleResultsView: function (show) {
        this.showResults = show;
      },

      submitSearch: function (keyword) {
        if (!keyword.length) {
          return;
        }

        this.resultsData = {};
        this.resultError = false;
        this.toggleResultsView(false);
        this.showResultsLoading = true;

        axios
          .get(`https://api.github.com/search/repositories?q=${keyword}+in:name`)
          .then(response => {
            this.resultsData = response.data;
            this.toggleResultsView(true);
          })
          .catch(() => {
            this.resultError = true;
          })
          .then(() => {
            this.showResultsLoading = false;
          });
      }
    }
  }
</script>
