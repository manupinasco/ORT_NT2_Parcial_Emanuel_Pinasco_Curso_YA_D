<template>

  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">

      <router-link to="/">
        <a href="#" class="navbar-brand">Inicio</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/notas">
            <a href="#" class="nav-link">Notas Alumnos</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/respuestas">
            <a href="#" class="nav-link">Resultados del Multiple Choice</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
</style>
