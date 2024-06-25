$(document).ready(function () {
   $("header button").click(function () {
      $("form").slideDown(); // Função slideDown()
   });

   $("#btn_cancelar").click(function () {
      $("form").slideUp(); // Função slideUp()
   });

   $("form").on("submit", function (ev) {
      ev.preventDefault();
      const addressNewImage = $("#endereco_imagem_nova").val(); // Função val()
      const newItem = $("<li style='display: none'></li>");

      $(`<img src="${addressNewImage}" />`).appendTo(newItem); // Função appendTo()

      $(`
         <div class="overlay-imagem-link">
            <a href="${addressNewImage}" title="Veja imagem em tamanho real" target="_blank" >
               Veja imagem em tamanho real
            </a>
         <div/>
      `).appendTo(newItem);

      $(newItem).appendTo("ul");
      $(newItem).fadeIn(1000); // Função fadeIn()

      $("#endereco_imagem_nova").val("");
   });
});
