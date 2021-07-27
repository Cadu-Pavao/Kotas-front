<template>
  <carousel :nav="false" :autoWidth="true" :dots="false">
      <div class="carousel-card">
        <img src="../assets/deezer.png" class="img-40" alt="Deezer Logo" />
        <h2>Deezer family</h2>

        <p><b>2</b> Vagas</p>
        <p><b>R$ 15,90</b> por mês</p>

        <button class="grey-button">Última vaga</button>
      </div>

      <div class="carousel-card">
        <img src="../assets/avast.png" class="img-40" alt="Deezer Logo" />
        <h2>Avast Ultimate</h2>

        <p><b>2</b> Vagas</p>
        <p><b>R$ 15,90</b> por mês</p>

        <button class="grey-button">Última vaga</button>
      </div>

      <div class="carousel-card">
        <img src="../assets/avast.png" class="img-40" alt="Deezer Logo" />
        <h2>Avast Ultimate</h2>

        <p><b>2</b> Vagas</p>
        <p><b>R$ 15,90</b> por mês</p>

        <button class="grey-button">Última vaga</button>
      </div>

      <div class="carousel-card">
        <img src="../assets/avast.png" class="img-40" alt="Deezer Logo" />
        <h2>Avast Ultimate</h2>

        <p><b>2</b> Vagas</p>
        <p><b>R$ 15,90</b> por mês</p>

        <button class="grey-button">Última vaga</button>
      </div>

      <div class="carousel-card">
        <img src="../assets/avast.png" class="img-40" alt="Deezer Logo" />
        <h2>Avast Ultimate</h2>

        <p><b>2</b> Vagas</p>
        <p><b>R$ 15,90</b> por mês</p>

        <button class="grey-button">Última vaga</button>
      </div>
  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel2'

export default {
  components: { carousel },
};
</script>