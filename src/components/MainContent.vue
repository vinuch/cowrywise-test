<template>
  <div class="parent" v-if="loading">
    <div v-for="items in 8" :key="items" class="card" >
      <ContentLoader  :secondaryColor="secondary"
        :primaryColor="primary" :secondaryOpacity="opacity">
        <rect x="20" y="70" rx="3" ry="3" width="200" height="15" />
        <rect x="20" y="100" rx="3" ry="3" width="80" height="15" />
      </ContentLoader>
    </div>
  </div>
  <div class="parent" v-else>
    <div  v-for="item in homeImages" :key="item.id" class="card" @click="openModal(item)">
      <div class="image" :style="{backgroundImage: `url(${item.urls.full})`}">
        <div class="meta">
          <div>
            <p class="name">{{ item.user.first_name }} {{ item.user.last_name }}</p>
            <p class="location">{{ item.user.location }}</p>
          </div>
        </div>
      </div>
    </div>
    <Modal :showModal="showModal" @hideModal="showModal = false"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ContentLoader } from 'vue-content-loader';
import Modal from './Modal.vue';

export default {
  components: {
    ContentLoader,
    Modal,
  },
  data() {
    return {
      primary: '#f5f5f5',
      secondary: '#e6e6e6',
      opacity: 0.5,
      showModal: false,
    };
  },
  methods: {
    ...mapActions([
      'getLatestAfricanPhotos',
      'searchPhotos',
    ]),
    openModal(image) {
      this.$store.commit('SET_SELECTED_IMAGE', image);
      this.showModal = true;
    },
  },
  computed: {
    ...mapGetters([
      'homeImages',
      'loading',
    ]),
  },
  mounted() {
    if(this.$route.query.search) {
      this.$store.commit('SET_SEARCH_TERM', this.$route.query.search)
      this.searchPhotos(this.$route.query.search)
    }else {
      this.$store.commit('SET_SEARCH_TERM', '')
      this.getLatestAfricanPhotos();
    }
  },
  watch:{
    $route (to, from){
    if(this.$route.query.search) {
      this.searchPhotos(this.$route.query.search)
    }else {
      this.getLatestAfricanPhotos();
    }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: rgb(221, 221, 221);
  width: 100%;
  height: 20rem;
  align-self: center;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    bottom: 2rem;
    left: 0;
    width: 100%
  }
}

.card:nth-child(2) {
  align-self: start;
}

.card:nth-child(2n-7) {
  height: 24rem;
}

.parent {
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr;
  grid-auto-rows: max-content;
  justify-items: stretch;
  grid-column-gap: 2.5rem;
  grid-row-gap: 0.5rem;
  margin: -5rem auto;
  width: 65%;
  margin-bottom: 4rem;
}

@media (max-width: 480px) {
  .parent {
    display: block;
    width: 100%;
    margin-top: 0;
  }

  .card {
    margin: 2rem 0;
    height: 20rem;
    border-radius: 0;

  }

  .image:hover .meta {
    display: flex;
  }
}

.image {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: stretch;
  align-items: flex-end;
}

.meta {
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: flex-end;
  text-align: left;
  background: rgb(40,40,43);
  background: linear-gradient(0deg, rgba(20, 20, 20, 0.897) 35%,
  rgba(223, 231, 232, 0) 100%);
  color: white;
  padding: 0 2rem 1rem;
  transition: all .5s ease-in-out;
}

.card:hover .meta {
  height: 10rem;
}

.meta .name{
  font-weight: 500;
  font-size: 1.3rem;
  margin: .5rem 0;
}

.meta .location{
  font-weight: 300;
  font-size: 1rem;
  margin: .5rem 0;
}
</style>
