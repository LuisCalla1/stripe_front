<template>
  <div class="card">
    <div>
      <h1>Crear y tokenizar Tarjeta de credito</h1>
    </div>
    <div class="row bg-success justify-content-center vh-100">
      <b-form class="register">
        <b-form-group
          id="input-group-1"
          label="Datos de Tarjeta:"
          label-for="input-1"
        >
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-tarjet"
              v-model="card.number"
              placeholder="Numero de tarjeta"
            ></b-form-input>
          </b-input-group>
          <br />
          <b-form inline>
            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-Mes"
                v-model="card.exp_month"
                placeholder="Mes"
              ></b-form-input>
              <b-form-input
                id="inline-form-input-año"
                v-model="card.exp_year"
                placeholder="año"
              ></b-form-input>
            </b-input-group>

            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-ccv"
                v-model="card.cvc"
                placeholder="ccv"
              ></b-form-input>
            </b-input-group>
          </b-form>
        </b-form-group>
        <button type="button" @click="addcard" class="btn btn-primary px-4">
          Guardar detalles
        </button>
      </b-form>
    </div>
  </div>
</template>
<style>
form.register {
  margin-top: 100px;
}
</style>
<script>
export default {
  data() {
    const stripePayment = window.localStorage.getItem("customers");
    return {
      
      userId: JSON.parse(stripePayment)?.customer,
      card: {
        number: "",
        exp_month: "",
        exp_year: "",
        cvc: "",
      },
    };
  },
  methods: {
    addcard() {
      console.log(this.card);
      fetch(`${process.env.VUE_APP_API}/customer/token/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: this.card.number,
          exp_month: this.card.exp_month,
          exp_year: this.card.exp_year,
          cvc: this.card.cvc,
        }),
      })
        .then((res) => {
          if (res === 200 || res.status < 300) {
            console.log("🚀tarjeta tokenizada con exito");
            return res.json();
          }
          throw res;
        })
        .then((response) => {
          if (response.status) {
            console.log(response.token_id)
            console.log(response.card_id)
            console.log(response.card_brand)
            console.log(response.card_last4)
            fetch(`${process.env.VUE_APP_API}/customers/${this.userId}/source`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: this.userId,
                source: response.token_id,
              }),
            })
            .then((res) => {
          if (res === 200 || res.status < 300) {
            console.log("🚀tarjeta add con exito");
            return res.json();
          }
          throw res;
        }).then((response) => {
          if (response.status) {
            console.log("segunda ruta",response.cardId);
          }
        })
          }
        })
        .catch((err) => {
          console.log("🚀 ~ file: AddNewUser.vue:94 ~ login ~ err", err);
        });
    },
  },
};
</script>