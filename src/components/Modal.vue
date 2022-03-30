<template>
  <div class="modal-overlay sticky-top" @click="$emit('close')">
    <div class="modal-content">
      <h1>Album Id: {{ data }}'s Comments</h1>
      <div v-for="comment in comments" :key="comment" class="">
        <div v-if="comment.postId == data" class="border borderd mb-2">
          <p class="fs-4 font-weight-bold">Name : {{ comment.name }}</p>
          <p class="fs-6 font-weight-bold">Commnet : {{ comment.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Modal",
  emits: ["close"],
  props: ["data"],
  computed: {
    ...mapState(["comments"]),
  },
  created() {
    this.$store.dispatch("loadComments");
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-content {
  padding: 20px;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  min-height: 350px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
}
</style>
@click="$emit('close')"
