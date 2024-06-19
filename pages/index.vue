<template>
  <header class="Header">
    <div class="Header-content">
      <h1>Vivero La Huerta</h1>
      <p>
        Producción y comercialización de hortalizas orgánicas, aplicando buenas
        prácticas agrícolas.
      </p>
    </div>
    <div class="Header-credits">
      <p>
        Créditos:
        <a href="https://www.facebook.com/vivero.lahuerta.31">
          Vivero La Huerta
        </a>
      </p>
    </div>
  </header>
  <footer class="Footer">
    <p>&copy; 2024. Todos los derechos reservados.</p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scope lang="sass">
.Header
  @include flex-center-center()
  position: relative
  background-color: $bg-color
  background-image: url('/background.jpeg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  width: 100%
  height: 100vh
  .Header-content
    @include flex-center-center()
    flex-direction: column
    background-color: $bg-color-2
    border-radius: 20px
    width: calc( 100% - 2rem )
    max-width: 550px
    padding: .7rem .5rem
    h1,
    p
      color: $bg-color
      text-align: center
    h1
      margin-bottom: .7rem
  .Header-credits
    position: absolute
    background-color: $bg-color-2
    padding: .3rem
    border-radius: 20px
    bottom: 10px
    right: 10px
    p,
    a
      color: $bg-color
      font-size: .7rem
.Footer
  @include flex-center-center()
  background-color: $bg-color-3
  padding: .5rem
  color: $bg-color
</style>
