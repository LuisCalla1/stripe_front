<template>
  <div>
    <div><h1>Actualizar Datos de un Usuario {{ user }}</h1></div>
    <div class="row  bg-success justify-content-center align-items-center vh-100">
      <b-form class="register">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Names:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="name"
            placeholder="Enter name"
            required
          ></b-form-input>
          <b-form-group
            id="input-group-3"
            label="Description:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="description"
              placeholder="Enter description"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Cell Phone:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="phone"
              type="tel"
              placeholder="Enter your cell phone"
              required
            ></b-form-input>
          </b-form-group>
        </b-form-group>
        <button @click="login" type="button" class="btn btn-primary px-4">
          Guardar detalles
        </button>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      description: "",
      phone: "",
    };
  },
  computed: {
    user() {
      const stripePayment = window.localStorage.getItem("customers");
      return JSON.parse(stripePayment)?.customer;
    },
  },
  methods: {
    login() {
      const stripePayment = window.localStorage.getItem("customers");
      console.log(this.data);
      fetch(`${process.env.VUE_APP_API}/updatecustomer2`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId:JSON.parse(stripePayment)?.customer,
          email: this.email,
          name: this.name,
          description: this.description,
          phone: this.phone,
        }),
      })
        .then((res) => {
          
          if (res === 200 || res.status < 300) {
            console.log("🚀 ~ file: EditUser.vue:82 ~ .then ~ res", res)
            return res.json();
          }
          throw res;
        })
        .then((response) => {
          if (response.status) {
            console.log(response.data);
            window.localStorage.setItem(
              "customers",
              JSON.stringify({
                customer: response.data.id,
              })
            );
          }
        })
        .catch((err) => {
          console.log("🚀 ~ file: EditUser.vue:100 ~ login ~ err", err)
        });
    },
  },
};
</script>
<style >
.register {
  border: 2px solid black;
  text-align: center;
  width: 480px;
  height: 480px; 
  padding: 48px 48px; 
  font-size: 22px;
  color: blue; 
}
</style>