<template>
  <h1>⸻ MultiType ⸻</h1>
  <input autofocus=true autocomplete=false autocorrect=false placeholder="Type here" v-model="input"/>
  <br/>
  <div class="transformation-container"><SarcasticType :input="input"/></div>
  <div class="transformation-container"><UpsideDownType :input="input"/></div>
  <div class="transformation-container"><CringeType :input="input"/></div>
  <div class="transformation-container"><JumbledReadableType :input="input"/></div>
  <div class="transformation-container"><ReverseType :input="input"/></div>
  <footer>A thing by <a href="https://antrikshy.com">Antriksh Yadav</a>. Source <a href="">on GitHub</a>.</footer>
</template>

<script>
  import CringeType from './components/CringeType.vue'
  import ReverseType from './components/ReverseType.vue'
  import SarcasticType from './components/SarcasticType.vue'
  import UpsideDownType from './components/UpsideDownType.vue'
  import JumbledReadableType from './components/JumbledReadableType.vue'

  export default {
    components: {
      CringeType,
      ReverseType,
      SarcasticType,
      UpsideDownType,
      JumbledReadableType
    },
    data() {
      return { input: "" }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,600;1,400&display=swap');

html {
  font-size: 16px;
  font-family: Rubik, Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 2rem;
  color: #1e2c3a;
  background-color: #f5edde;
}

a {
  color: #1e2c3a;
  text-decoration: underline;
  text-decoration-style: dashed;
}
a:hover {
  text-decoration-style: solid;
}
input {
  height: 3rem;
  width: 50rem;
  padding: 0 0.5rem;
  margin-bottom: 3rem;
  border: 0;
  border-bottom: 2px solid #fff;
  font-size: 2rem;
  font-weight: 400;
  transition: 100ms;
}
input:focus {
  outline: none;
  border-bottom: 2px solid #1e2c3a;
}
h1 {
  cursor: default;
}
h2 {
  margin: 0;
}
button {
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
  background-color: #1e2c3a;
  border: 1px solid #1e2c3a;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 100ms;
}
button:hover:enabled {
  color: #1e2c3a;
  background-color: #fff;
  border: 1px dashed #1e2c3a;
}
button:active:enabled {
  border-style: solid;
}
button:disabled {
  opacity: 25%;
  cursor: not-allowed;
}

.transformation-container {
  width: 35vw;
  max-width: 50rem;
  vertical-align: top;
  min-height: 3rem;
  margin: 2rem;
  padding: 1rem;
  display: inline-block;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 3px 12px rgb(200, 200, 200);
  background-color: #fff;
}
.transformation-container p {
  font-weight: 400;
}
.placeholder {
  opacity: 50%;
  font-style: italic;
}

footer {
  margin: 3rem 0;
}
</style>
