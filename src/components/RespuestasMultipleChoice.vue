<template>

  <section class="src-components-respuestas-multiple-choice">
    <div class="jumbotron">
      <h2>Respuestas</h2>

      <br>
      <div class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Número de Pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr v-for="(respuesta, index) in respuestas" :key="index">
            <th>{{respuesta.numero}}</th>
            <th>{{respuesta.respuestas}}</th>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-respuestas-multiple-choice',
    props: [],
    mounted () {
      console.log(this.respuestas)
    },
    data () {
      return {
        respuestas: [{numero: 1, respuestas: ['c']}, {numero: 2, respuestas: ['c']}, {numero: 3, respuestas: ['a', 'b']}]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas-multiple-choice {

  }
  h2 {
    color: black;
  }
  hr {
    background-color: rgba(248, 225, 225, 0.719)
  }
  label {
    font-weight: bold;
  }
</style>
