<template>
  <h1>⸻ MultiType ⸻</h1>
  <input autofocus=true autocomplete=false autocorrect=false placeholder="Type here" v-model="input"/>
  <br/>
  <SarcasticType :input="input"/>
  <UpsideDownType :input="input"/>
  <CringeType :input="input"/>
  <JumbledReadableType :input="input"/>
  <ReverseType :input="input"/>
  <footer>A thing by <a href="https://antrikshy.com">Antriksh Yadav</a>. Spiritual successor to <a href="https://antrikshy.com/CringeType">CringeType</a>. Source <a href="https://github.com/Antrikshy/MultiType">on GitHub</a>.</footer>
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
  background-color: #faeee7;
}
@media (max-width: 900px) {
  html {
    margin: 0.5rem;
  }
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
  border-bottom: 3px solid #fff;
  border-radius: 5px;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  transition: 100ms;
}
input:focus {
  outline: none;
  border-bottom: 3px solid #1e2c3a;
}
@media (max-width: 900px) {
  input {
    width: 85vw;
    margin-bottom: 1rem;
  }
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
  background-color: #F25151;
  border: 1px solid #F25151;
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

footer {
  margin: 3rem 0;
}
</style>
