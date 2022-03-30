import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: { albums: [], photos: [], users: [], comments: [] },
  mutations: {
    SET_ALBUMS(state, albums) {
      state.albums = albums;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_PHOTOS(state, photos) {
      state.photos = photos;
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
  },
  actions: {
    loadAlbums({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/albums").then((data) => {
        const albums = data.data;
        commit("SET_ALBUMS", albums);

        const filtUsers = groupBy(data.data, (e) => e.userId);
        let users = Array.from(filtUsers, ([name, value]) => ({ name, value }));
        commit("SET_USERS", users);
      });
    },
    loadPhotos({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/photos").then((data) => {
        const filtPhotos = groupBy(data.data, (e) => e.albumId);
        let photos = Array.from(filtPhotos, ([name, value]) => ({
          name,
          value,
        }));
        commit("SET_PHOTOS", photos);
      });
    },
    loadComments({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((data) => {
          let comments = data.data;
          commit("SET_COMMENTS", comments);
        });
    },
  },
  modules: {},
});

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
