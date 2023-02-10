<template>
  <div class="card">
    <div class="card-body">
      <h5 class="font-weight-bold mb-4">Detalles de facturación</h5>

      <!-- -->
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="cuentaProfesional"
          name="tipoCuenta"
          class="custom-control-input"
          @click="tipoCuenta(true)"
          checked
        />
        <label class="custom-control-label" for="cuentaProfesional">
          <i class="fas fa-building mr-2"></i>Profesional</label
        >
      </div>

      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="cuentaPersonal"
          name="tipoCuenta"
          class="custom-control-input"
          @click="tipoCuenta(false)"
        />
        <label class="custom-control-label" for="cuentaPersonal">
          <i class="fas fa-user mr-2"></i>Personal</label
        >
      </div>

      <!-- -->
      <div class="row mt-4">
        <div v-if="cuentaProfesional" class="col-md">
          <label for="nombreEmpresa">Nombre de la empresa</label>
          <input type="text" class="form-control mb-2" id="nombreEmpresa" />
        </div>
        <div class="col-md">
          <label for="direccionUsuario">email</label>
          <input
            v-model="customer.email"
            type="text"
            class="form-control mb-2"
            id="direccionUsuario"
          />
        </div>
        <div v-if="!cuentaProfesional" class="col-md">
          <label for="nombreUsuario">Nombre</label>
          <input
            v-model="customer.name"
            type="text"
            class="form-control mb-2"
            id="nombreUsuario"
          />
        </div>

        <div v-if="!cuentaProfesional" class="col-md">
          <label for="apellidoUsuario">Apellido</label>
          <input type="text" class="form-control mb-2" id="apellidoUsuario" />
        </div>
      </div>

      <!-- -->
      <div class="row mt-1">
        <div class="col-md">
          <label for="paisUsuario">País</label>
          <select id="paisUsuario" class="form-control mb-2">
            <option selected>Selecciona un país</option>
          </select>
        </div>

        <div class="col-md">
          <label for="ciudadUsuario">Ciudad</label>
          <input type="text" class="form-control mb-2" id="ciudadUsuario" />
        </div>

        <div class="col-md">
          <label for="cpUsuario">Código Postal</label>
          <input type="text" class="form-control mb-2" id="cpUsuario" />
        </div>

        <div v-if="cuentaProfesional" class="col-md">
          <label for="ivaUsuario">IVA</label>
          <input type="text" class="form-control mb-2" id="ivaUsuario" />
        </div>

        <div v-if="!cuentaProfesional" class="col-md">
          <label for="cifUsuario">C.I.F.</label>
          <input type="text" class="form-control mb-2" id="cifUsuario" />
        </div>
      </div>

      <!-- -->
      <div class="row mt-3 mb-1 d-flex justify-content-end">
        <div class="col d-flex justify-content-end">
          <button type="button" class="btn btn-danger px-4 mr-3" disabled>
            Cancelar
          </button>
          <button
            @click="handleSaveCustomer"
            type="button"
            class="btn btn-primary px-4"
          >
            Guardar detalles
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customerMS from "../services/customerMS.js";
export default {
  data() {
    return {
      cuentaProfesional: true,
      customer: {
        email: "",
        name: "",
        description: "",
        phone: "",
      },
    };
  },
  methods: {
    tipoCuenta(cuenta) {
      this.cuentaProfesional = cuenta;
    },
    async handleSaveCustomer() {
      const data = this.customer;
      console.log(this.customer);

      try {
        await customerMS.create({
          headers: {
            "Content-Type": "application/json",
          },
          data,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: DetallesFacturacion.vue:128 ~ handleSaveCustomer ~ error",
          error
        );
      }
    },
  },
};
</script>
<style>

</style>