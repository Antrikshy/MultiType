<template>
  <TypeCore header="ReverseType" :transformed="this.transformed"/>
</template>

<script>
  import TypeCore from './TypeCore.vue'

  export default {
    components: {
      TypeCore
    },
    props: {
      input: String
    },
    computed: {
      transformed() {
        return this.input.split("").reverse().join("");
      }
    }
  }
</script>
