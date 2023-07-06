<template>
  <div>
    <div class="title">
      <h1>Crear un PaymentIntent para {{ user }}</h1>
    </div>
    <div
      class="
        body
        row
        bg-success
        justify-content-center
        align-items-center
        vh-100
      "
    >
      <b-card
        title="Envio de Paquete"
        img-src="https://www.zitelia.com/wp-content/uploads/2017/11/envio-de-paquete.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text type="amount"> {{payment.amount}} </b-card-text>
        <b-button @click="paymentIntent" variant="primary">Pagar</b-button>
      </b-card>
      <b-card
        title="Envio de Paquete"
        img-src="https://www.zitelia.com/wp-content/uploads/2017/11/envio-de-paquete.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text> 7 </b-card-text>

        <b-button href="#" variant="primary">Pagar</b-button>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const stripePayment = window.localStorage.getItem("customers");
    const customerId = JSON.parse(stripePayment)?.customer;
    return {
      payment: {
        amount: 10,
        // currency: "USD",
        description: "adsfa",
        customer_id: customerId,
      },
    };
  },
  computed: {
    user() {
      const stripePayment = window.localStorage.getItem("customers");
      return JSON.parse(stripePayment)?.customer;
    },
  },
  methods: {
    paymentIntent() {
      console.log(this.payment);
      fetch(`${process.env.VUE_APP_API}/payment_intents/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: this.payment.amount,
        //currency: this.paymentInt.currency,
          description: this.payment.description,
          customer_id: this.payment.customer_id,
        }),
      })
        .then((res) => {
          if (res === 200 || res.status < 300) {
            console.log(
              "🚀Payment intent created successfully"
            );
            return res.json();
          }
          throw res;
        })
        .then((response) => {
          if (response.status) {
            console.log(response.id);
            console.log(response.customer);
          }
        })
        .catch((err) => {
          console.log(
            "🚀 ~ file: CreatePaymentIntent.vue:93 ~ paymentIntent ~ err",
            err
          );
        });
    },
  },
};
</script>
<style>
.body {
  display: flex;
  justify-content: center;
}
.card-body {
  flex-direction: column;
}
</style>
