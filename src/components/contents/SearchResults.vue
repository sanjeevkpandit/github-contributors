<template>
  <div>
    <h3>Search results</h3>
    <p v-if="emptyResults">No results found.</p>
    <div v-if="!emptyResults">
      <ul>
        <li v-for="item in resultsData.items" :key="item.id">
          <a :href="getRepoUrl(item)">{{item.full_name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchResults',
    data: function () {
      return {
        emptyResults: false
      }
    },
    props: {
      resultsData: Object
    },
    updated: function () {
      if (!this.resultsData || !this.resultsData.items || !this.resultsData.items.length) {
        this.emptyResults = true;
      }
    },
    methods: {
      getRepoUrl: function (repo) {
        if (repo.owner && repo.owner.login && repo.name) {
          return `?user=${repo.owner.login}&repo=${repo.name}`;
        } else if (repo.html_url) {
          return repo.html_url;
        }

        return `#`;
      }
    }
  };
</script>
