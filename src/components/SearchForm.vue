<template>
  <form @submit.prevent="handleSubmit" class="flex flex-row text-text gap-4 min-w-sm mx-auto items-center">
    <div class="relative">
        <i class="material-icons search-icon absolute mt-1 ml-1">search</i>
        <input type="text" v-model="data" :placeholder="placeholder" class="p-1 border-[1px] text-base pl-9" />
    </div>
    <button type="submit" class=" bg-accent py-[6px] px-7">Find</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['type'],
  setup() {
    const handleSubmit = () => {
      console.log('sbm')
    }
    const data = ref('')
    return { handleSubmit, data }
  },
  computed: {
    placeholder() {
      return 'Search ' + this.type
    }
  }
}
</script>
