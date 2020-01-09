<template>
  <div>
    <h1>My Event</h1>
    <p>Capacity: {{ capacity }}</p>
    <button id="ba" @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script lang="ts">
import { createComponent, ref} from '@vue/composition-api'
import { Observable, fromEvent, of } from 'rxjs';
import { take } from 'rxjs/operators';


export default createComponent({
  setup() {
      const capacity = ref(3);
     
      let click$ = fromEvent(document,'click')
      let of$ = of('hola')

      let source$ = click$.subscribe( {
        next: x => console.log('ua'),
        error:err => null,
        complete: () => console.log('se completo')
      })

      of$.subscribe( subscriber => {
        console.log('hey'),
        null,
        console.log('se termino wey')
      })


      function increaseCapacity() { 
        capacity.value++;
      }
      return { capacity, increaseCapacity };
    }
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
