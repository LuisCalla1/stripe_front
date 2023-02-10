<template>
  <div>
    <!-- <AddNewUser/> -->
    <EditUser/>
    <!-- <PaymentIntent/> -->
  </div>
</template>

<script>
// import AddNewUser from "./components/AddNewUser.vue";
import EditUser from "./components/EditUser.vue";
// import PaymentIntent from "./components/CreatePaymentIntent.vue";
export default {
  name: "App",
  components: {
    // AddNewUser,
    EditUser,
    // PaymentIntent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  text-align: center;
}
</style>
