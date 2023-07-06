<template>
  <div class="card">
    <div>
      <h1>excel to json</h1>
    </div>
    <input type="file" @change="handleFileChange">
    <button @click="convertir">Convertir</button>
  </div>
</template>


<script>export default {
  data() {
    return {
      archivo: null
    };
  },
  methods: {
    handleFileChange(event) {
      this.archivo = event.target.files[0];
    },
    convertir() {
      const formData = new FormData();
      formData.append('excel', this.archivo);

      fetch('http://localhost:3000/convertir-a-json', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};

</script>