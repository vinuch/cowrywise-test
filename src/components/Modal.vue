<template>
  <div class="modal-container" @click.self="close" :class="!showModal ? 'hidden' : null">
    <transition name="fade">
      <div v-if="showModal"
      class="modal" :style="{backgroundImage: `url(${selectedImage.urls.full})`}">
        <!-- {{selectedImage}} -->
        <div class="modalImage">
          <div class="modalMeta">
            <p class="name">
              {{ selectedImage.user.first_name }}
              {{ selectedImage.user.last_name }}
            </p>
            <p class="location">{{ selectedImage.user.location }}</p>
          </div>
      </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['showModal'],
  methods: {
    close() {
      this.$emit('hideModal');
      // e.target.classList.add('hidden');
    },
  },
  computed: {
    ...mapGetters([
      'selectedImage',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.modal {
  width: 80%;
  height: 85vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.modal-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(128, 128, 128, 0.685);
  transition: all .5s ease-in-out;

  // opacity: .5;
}

.modalMeta {
  background-color: #fff;
  width: 100%;
  text-align: left;
  padding: 1rem 2rem;
}

.modalImage {
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: flex-end;
}

.modalMeta .name{
  font-weight: 500;
  font-size: 1.3rem;
  margin: .5rem 0;
}

.modalMeta .location{
  font-weight: 300;
  font-size: 1rem;
  margin: .5rem 0;
}

.hidden {
  display: none;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in-out;
  // transform: scale(1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: scale(0);
    opacity: 0;
}

@media (max-width: 480px) {
  .modal {
    width: 94%
  }
}
</style>
