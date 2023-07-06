<template>
  <div>
    <div><h1>Registrar Nuevo Usuario</h1></div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h3>add a new website</h3>
            </div>
            <div class="card-body"></div>
          </div>
        </div>
         <div class="col-sm-8 text-center">
        <div class="card">
          <div class="card-header">
            <h3>lista de usuarios</h3>
          </div>
          <div class="card-body">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>stripeId</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
     
    </div>

    <div
      class="row bg-success justify-content-center align-items-center vh-100"
    >
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
  methods: {
    login() {
      console.log(this.data);
      fetch(`${process.env.VUE_APP_API}/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          name: this.name,
          description: this.description,
          phone: this.phone,
        }),
      })
        .then((res) => {
          if (res === 200 || res.status < 300) {
            console.log("🚀Usuario creado con exito");
            return res.json();
          }
          throw res;
        })
        .then((response) => {
          if (response.status) {
            console.log(response.id);
            console.log(response.email);
            window.localStorage.setItem(
              "customers",
              JSON.stringify({
                customer: response.id,
              })
            );
          }
        })
        .catch((err) => {
          console.log("🚀 ~ file: AddNewUser.vue:94 ~ login ~ err", err);
        });
    },
  },
};
</script>
<style >
h1 {
  margin: 0px;
  background-color: green;
  color: blue;
}
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