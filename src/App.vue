<template>
  <div class="container">
    <Headers />
    <div
      v-for="photo in photos"
      :key="photo.name"
      class="border text-center border-4 rounded my-3 p-3"
    >
      <div class="d-flex bd-highlight">
        <h1 class="p-2 w-100 bd-highlight">Album ID : {{ photo.name }}</h1>
      </div>
      <AlbumsCard :name="photo.name" :data="photo.value" />
    </div>
    <Foother class="fixed-bottom" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AlbumsCard from "./components/AlbumsCard.vue";
import Headers from "./components/Headers.vue";
import Foother from "./components/Foother.vue";

export default {
  name: "App",
  components: { AlbumsCard, Headers, Foother },

  computed: {
    ...mapState(["photos"]),
  },
  created() {
    this.$store.dispatch("loadPhotos");
  },
};
</script>
