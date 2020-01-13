<template>
  <div>
    <div class="flex flex-wrap">
      <BoardsContainer class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500" />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BoardsContainerVue from '../components/BoardsContainer.vue';
import { ref, createComponent, Ref } from '@vue/composition-api';

export default createComponent({
  components: {
    BoardsContainer: BoardsContainerVue
  },
  setup() {

  }
})
</script>
