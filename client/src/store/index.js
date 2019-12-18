import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "//localhost:3000/api"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    jobs: [],
    activeJob: {}
  },
  mutations: {
    setAllCars(state, data) {
      state.cars = data;
    },
    setAllJobs(state, data) {
      state.jobs = data;
    },
    addCar(state, car) {
      state.cars.push(car);
    },
    addJob(state, job) {
      state.jobs.push(job);
    },
    setActiveCar(state, car) {
      state.activeCar = car;
    }
  },
  actions: {
    async getCars({ commit, dispatch }) {
      let res = await _api.get("cars");
      commit("setAllCars", res.data);
    },
    async getJobs({ commit, dispatch }) {
      let res = await _api.get("jobs");
      commit("setAllJobs", res.data);
    },
    async getCarById({ commit, dispatch }, id) {
      let res = await _api.get("cars/" + id);
      commit("setActiveCar", res.data);
    },
    async createCar({ commit, dispatch }, car) {
      let res = await _api.post("cars", car);
      // dispatch("getAllCars"); //works but is a second call to the server
      commit("addCar", res.data);
    },
    async createJob({ commit, dispatch }, job) {
      let res = await _api.post("jobs", job);
      // dispatch("getAllCars"); //works but is a second call to the server
      commit("addJob", res.data);
    },

    async sold({ commit, dispatch }, id) {
      await _api.delete("cars/" + id);
      dispatch("getCars");
    }
  }
});
