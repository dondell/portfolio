
<script setup>
import { ref } from 'vue'
import FancyButton from './components/FancyButton.vue'
import AwesomeIcon from './components/AwesomeIcon.vue'

const runtimeConfig = runtimeConfig()
const appConfig = useAppConfig()
const msg = ref('Hello World!')
</script>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ],
      counter: 0,
      message: ''
    };
  }
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <p style="white-space: pre-line;">Message is: {{ message }}</p>
  <textarea v-model="message"></textarea>

  <div>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">{{ item.name }}</li>
    </ul>
  </div>

  <button @click="counter++">Add 1</button>
	<p>The button above has been clicked {{ counter }} times.</p>
</template>