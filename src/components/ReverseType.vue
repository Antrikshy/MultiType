<template>
  <h2>⸺ ReverseType ⸺</h2>
  <p v-if="transformed">{{ transformed }}</p>
  <p v-else class="placeholder">Start typing.</p>
  <button :disabled="!transformed" @click="navigator.clipboard.writeText(transformed)">Copy</button>
</template>

<script>
  export default {
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
