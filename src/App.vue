<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/newuser">Nuevo Usuario</b-navbar-brand>
      <b-navbar-brand to="/edituser">Editar Usuario</b-navbar-brand>
      <b-navbar-brand to="/paymentintent">NuevoPaymentIntent</b-navbar-brand>
      <b-navbar-brand to="/datostarjeta">Crear y tokenizar Tarjetas</b-navbar-brand>
      <b-navbar-brand to="/subirarchivo">subir archivo</b-navbar-brand>
    </b-navbar>

    <router-view />
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42a7b9;
}
</style>
