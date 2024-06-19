<template>
  <header class="Header">
    <div class="Header-content">
      <h1>Vivero La Huerta</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem
        ut ex eos voluptate culpa ipsa sunt, porro autem non!
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
    max-width: 700px
    padding: .7rem .5rem
    gap: .7rem
    h1,
    p
      color: $bg-color
      text-align: center
.Footer
  @include flex-center-center()
  background-color: $bg-color-3
  padding: .5rem
  color: $bg-color
</style>
