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
              id="inline-form-input-username"
              placeholder="Numero de tarjeta"
            ></b-form-input>
          </b-input-group>
          <br />
          <b-form inline>
            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-Mes"
                placeholder="Mes"
              ></b-form-input>
              <b-form-input 
                id="inline-form-input-año"
                placeholder="año"
              ></b-form-input>
            </b-input-group>

            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-ccv"
                placeholder="ccv"
              ></b-form-input>
            </b-input-group>
          </b-form>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Direcciones de Facturacion:"
          label-for="input-1"
        >
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-pais"
              placeholder="pais"
            ></b-form-input>
          </b-input-group>
          <br />
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-ciudad"
              placeholder="ciudad"
            ></b-form-input>
          </b-input-group>
          <br />
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-direccion"
              placeholder="direccion"
            ></b-form-input>
          </b-input-group>
          <br />
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-postal"
              placeholder="codigo postal"
            ></b-form-input>
          </b-input-group>
        </b-form-group>

        <button type="button" class="btn btn-primary px-4">
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