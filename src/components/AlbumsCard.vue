<template>
  <img
    @click="showModal = true"
    v-for="datas in data"
    :key="datas.name"
    :src="datas.thumbnailUrl"
    class="p-1"
    alt="..."
  />
  <teleport to="#modal-root">
    <Modal
      class="sticky-top"
      :data="name"
      v-show="showModal"
      @close="showModal = false"
    />
  </teleport>
</template>
<script>
import Modal from "./Modal.vue";
export default {
  name: "AlbumsCard",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  props: ["data", "name"],
};
</script>
