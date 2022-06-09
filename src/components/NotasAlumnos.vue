<template>

  <section class="src-components-notas-alumnos">
    <br>
    <h2>Notas de Alumnos - Formulario</h2>
    <hr>
    <br>

    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="formData.nombre" required name="nombre" autocomplete="off" class="form-control" :minlength="minLength" maximo no-espacios>

        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-danger mt-1" slot="required">Este campo es obligatorio</div>
        </field-messages>
        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-danger mt-1" slot="minlength">El nombre debe tener como mínimo {{minLength}} caracteres</div>
        </field-messages>
        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-danger mt-1" slot="maximo">El nombre no puede tener más de {{maxLength}} caracteres</div>
        </field-messages>
        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-danger mt-1" slot="no-espacios">El nombre no puede tener espacios vacíos</div>
        </field-messages>
      
      </validate>

      <br>

      <validate tag="div">
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" v-model="formData.apellido" required name="apellido" autocomplete="off" class="form-control" :minlength="minLength" maximo no-espacios>

        <field-messages name="apellido" show="$dirty">
          <div class="alert alert-danger mt-1" slot="required">Este campo es obligatorio</div>
        </field-messages>
        <field-messages name="apellido" show="$dirty">
          <div class="alert alert-danger mt-1" slot="minlength">El apellido debe tener como mínimo {{minLength}} caracteres</div>
        </field-messages>
        <field-messages name="apellido" show="$dirty">
          <div class="alert alert-danger mt-1" slot="maximo">El apellido no puede tener más de {{maxLength}} caracteres</div>
        </field-messages>
        <field-messages name="apellido" show="$dirty">
          <div class="alert alert-danger mt-1" slot="no-espacios">El apellido no puede tener espacios vacíos</div>
        </field-messages> 
      
      </validate>

      <br>

      <validate tag="div">
        <label for="nota">Nota</label>
        <input type="number" id="nota" v-model.number="formData.nota" required name="nota" autocomplete="off" class="form-control" :min="minNota" :max="maxNota">

        <field-messages name="nota" show="$dirty">
          <div class="alert alert-danger mt-1" slot="required">Este campo es obligatorio</div>
        </field-messages>
        <field-messages name="nota" show="$dirty">
          <div class="alert alert-danger mt-1" slot="min">La nota no puede ser inferior a {{minNota}}</div>
        </field-messages>
        <field-messages name="nota" show="$dirty">
          <div class="alert alert-danger mt-1" slot="max">La nota no puede ser superior a {{maxNota}}</div>
        </field-messages>
      
      </validate>
      <br>

      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>


    </vue-form>

    <div v-if="alumnos.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Nota</th>
        </tr>
        <tr v-for="(alumno, index) in alumnos" :key="index" :style="getStyleNota(alumno.nota)">
          <th>{{alumno.nombre}}</th>
          <th>{{alumno.apellido}}</th>
          <th>{{alumno.nota}}</th>
        </tr>
        <tr :style="getStyleNota(promedioNotas)">
          <th>PROMEDIO TOTAL</th>
          <th></th>
          <th>{{promedioNotas}}</th>
          
          
          </tr>
      </table>
    </div>

    <div v-else class="alert alert-info">No hay alumnos ingresados</div>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-notas-alumnos',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInitialData(),
        alumnos: [],
        minLength: 3,
        maxLength: 15,
        minNota: 0,
        maxNota: 10,
        totalNotas: 0
      }
    },
    methods: {
      getInitialData() {
        return {
        nombre: null,
        apellido: null,
        nota: null
        }
      },

      enviar() {
        let alumno = {...this.formData}

        this.totalNotas += alumno.nota
        this.alumnos.push(alumno)

        this.formData = this.getInitialData()
        this.formState._reset()
      },
      getStyleNota(nota) {
        if(nota <= 3) {
          return 'color: red'
        }
        else if(nota <= 6) {
          return 'color: yellow'
        }
        return 'color: green'
      }

    },
    computed: {
      promedioNotas() {
        return this.totalNotas / this.alumnos.length
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-notas-alumnos {

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
