<template>
  <div class = "card">
    <div class = "card-body">
        <h5 class = "font-weight-bold mb-4">Tarjeta de crédito</h5>

      <!-- -->
      <div class = "row">

        <div class = "col-md">
            <label for = "cardnameInput">Nombre en la tarjeta</label>
            <input type = "text" class = "form-control mb-2" id = "cardnameInput" />
        </div>

        <div class = "col-md">
            <label for = "cardnumberInput">Número en la tarjeta</label>
            <input type = "text" class = "form-control mb-2" id = "cardnumberInput" placeholder = "0000 0000 0000 0000" />        
        </div>

        <div class = "col-md">
            <label for = "expirydateInput">Expiración</label>
            <input type = "text" class = "form-control mb-2" id = "expirydateInput" placeholder = "MM/YY" />
        </div>

        <div class = "col-md">
            <label for = "cvvcodeInput">CVV</label>
            <input type = "text" class = "form-control mb-2" id = "cvvcodeInput" placeholder = "CVV"/>     
        </div>

      </div>

        <!-- -->
        <div class = "custom-control custom-checkbox mt-2">
            <input type = "checkbox" class = "custom-control-input" id = "checkAceptar" />
            <label class = "custom-control-label" for = "checkAceptar">Al marcar esta casilla, aceptas nuestros términos bancarios.</label>
        </div>

        <!-- -->
        <div class = "row mt-2 mb-1 d-flex justify-content-end">

            <div class = "col d-flex justify-content-end">
                <button type = "button" class = "btn btn-danger px-4 mr-3" disabled>Cancelar</button>
                <button type = "button" class = "btn btn-primary px-4" disabled>Guardar tarjeta</button>
            </div>
        </div>

     </div>
   </div>

</template>