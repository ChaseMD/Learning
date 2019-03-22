<template>
  <div id="new-employee">
    <h3>New Employee</h3>
    <div class="row">
      <form @submit.prevent="saveEmployee" class="col s12">
        <div class="row">
          <div class="input field col s12">
            <label>Employee ID#:</label>
            <input type="text" v-model="employee_id" required>
          </div>
        </div>
        <div class="row">
          <div class="input field col s12">
            <label>Name:</label>
            <input type="text" v-model="name" required>
          </div>
        </div>
        <div class="row">
          <div class="input field col s12">
            <label>Department:</label>
            <input type="text" v-model="dept" required>
          </div>
        </div>
        <div class="row">
          <div class="input field col s12">
            <label>Position:</label>
            <input type="text" v-model="position" required>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: "new-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null
    };
  },
  methods: {
    saveEmployee () {
      db.collection('employees').add({
        employee_id: this.employee_id,
        name: this.name,
        dept: this.dept,
        position: this.position
      })
      .then(docRef => this.$router.push('/'))
      .catch(error => console.log(error))
    }
  }
};
</script>

<style>
</style> 
