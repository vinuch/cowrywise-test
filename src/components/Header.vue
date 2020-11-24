<template>
  <div class="header">
    <button v-if="searching || showingResult" class="back-btn"><a href="/"><img src="../assets/back.svg" alt=""></a> </button>
    <h1 v-if="searching">Searching for <span>"{{ searchQueryString }}"</span></h1>
    <h1 v-else-if="showingResult">Search Results for <span>{{ searchQueryString }}</span></h1>
    <div v-else class="input-container">
      <img class="search-icon" src="../assets/search.svg" alt="">
      <form action="/search"  @submit.prevent="search(searchTerm)" v>
          <input v-model="searchTerm" class="search-bar" type="text" name="search" id="search"
          placeholder="Search for a photo">
      </form>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      searchTerm: '',
      searchQueryString: this.$route.query.search
    }
  },
  watch:{
    $route (to, from){
      this.searchQueryString = this.$route.query.search;
    }
  },
  computed: {
    ...mapGetters([
      'searching',
      'showingResult',
    ])
  },
  methods: {
    search(searchTerm) {
      console.log(this.$route.query)

      this.searchPhotos(searchTerm)
      this.$router.push({ path: `/?search=${searchTerm}` })
      this.searchTerm = ''
    },
    ...mapActions([
      'searchPhotos'
    ])
  }
};
</script>

<style lang="scss" scoped>
.search-icon {
  width: 1.3rem;
  position: absolute;
  left: 11.5%;
  top: 1.3rem;
}
.header {
  height: 23rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .back-btn {
    background-color: #2c3e50;
    border-radius: .3rem;
    display: flex;
    align-items: center;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    position: absolute;
    top: 3rem;
    left: 5rem;

    img {
      width: 2rem;
      margin: 0 .9rem;
    }
  }

  h1 {
  text-align: left;
  width: 70%;

  span {
    color: #94a7b6
  }
}

    .input-container {
    width: 100%;
    position: relative;

    .search-bar {
      padding: 1.2rem 0 1.2rem 3rem;
      width: 75%;
      font-size: 20px;
      border-radius: 0.5rem;
      border: none;
    }
  }
}



@media (max-width: 480px) {
  .header {
    h1 {
      text-align: left;
      width: 100%;
      padding: 0 2rem;
    }

    .back-btn {
      left: 1rem;
    }
  }
}

</style>
