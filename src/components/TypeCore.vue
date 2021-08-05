<template>
    <div class="transformation-container">
    <h2>⸺ {{this.header}} ⸺</h2>
    <small class="transformer-description">
      <slot name="description"></slot>
    </small>
    <p v-if="this.transformed">{{ this.transformed }}</p>
    <p v-else class="placeholder">Start typing.</p>
    <button :disabled="!this.transformed" @click="navigator.clipboard.writeText(this.transformed)">Copy</button>
  </div>
</template>

<script>
  export default {
    props: {
      header: String,
      transformed: String
    }
  }
</script>

<style>
  .transformation-container {
    width: 35vw;
    max-width: 50rem;
    vertical-align: top;
    min-height: 3rem;
    margin: 2rem;
    padding: 1rem;
    display: inline-block;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom: 3px solid #1e2c3a;
    background-color: #fff;
  }
  .transformer-description {
    opacity: 50%;
  }
  .transformation-container p {
    font-weight: 400;
  }
  .placeholder {
    opacity: 50%;
    font-style: italic;
  }
  @media (max-width: 900px) {
    .transformation-container {
      width: 80vw;
      margin: 1rem 0;
    }
  }
</style>
