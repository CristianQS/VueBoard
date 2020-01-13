
<template>
    <div>
        <div>{{hello}}</div>
        <Board/>
    </div>
</template>

<script lang="ts">
import { createComponent, ref} from "@vue/composition-api";
import { Component, Vue } from 'vue-property-decorator';
import BoardVue from "./Board.vue";


export default  createComponent({
    components: {
        Board: BoardVue
    },
    setup() {
        const hello = ref("Hello")
        return { hello }
    }

})
</script>

<style>

</style>