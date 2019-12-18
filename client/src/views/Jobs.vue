<template>
  <div class="job container-fluid">
    <header class="row">
      <div class="col">
        <h1>Job M<img alt="Vue logo" src="../assets/logo.png" />rket</h1>
      </div>
    </header>
    <main class="row newJob">
      <div class="col-12">
        <form @submit.prevent="createJob">
          <input
            required
            type="text"
            v-model="newJob.company"
            placeholder="Company"
          />
          <input
            required
            type="text"
            v-model="newJob.position"
            placeholder="Position"
          />
          <input
            required
            type="text"
            v-model="newJob.pay"
            placeholder="Pay"
          />
          <input
            required
            type="text"
            v-model="newJob.description"
            placeholder="Job Description"
          />
          <button class="btn btn-success" type="submit">Add Job</button>
        </form>
      </div>
      <div class="col-12">
        <div class="row jobs">
          <div class="col-4" v-for="job in jobs" :key="job.id">
            <JobComponent :jobData="job" />
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import JobComponent from "@/components/Job";
export default {
  name: "jobs",
  mounted() {
    this.$store.dispatch("getJobs")
  },
  data(){
    return {
      newJob: {
        company: "",
        position: "",
        pay: "",
        description: ""
      }
    }
  },
  methods: {
    createJob(){
      let job = { ...this.newJob };
      this.$store.dispatch("createJob", job);
      this.newJob = {
        company: "",
        position: "",
        pay: "",
        description: ""
      }
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    },

  },
  components: {
    JobComponent
  }
};
</script>

<style>
</style>
