<template>
  <div id="app">
    <chat/>
  </div>
</template>

<script>
import Chat from "./components/chat"

export default {
  name: 'App',
  components: {Chat}
}
</script>

<style>
 body {
   margin: 0;
   height: 100vh;
   overflow: hidden;
   min-width: 342px;
   font-family:Arial;
 }

 #app {
   width: 100%;
   height: 100%;
 }

 * {
   box-sizing: border-box;
 }
</style>
