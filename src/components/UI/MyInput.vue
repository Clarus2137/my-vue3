<template>
   <input
      type="text"
      class="form__input"
      @input="updateInput"
      v-model="modelValue"
   >
</template>



<script>
   export default {
      name: 'my-input',

      props: {
         modelValue: [String, Number]
      },

      methods: {
         updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
         }
      }
   }
</script>



<style scoped>
   .form__input {
      min-width: 200px;
      height: 40px;
      margin-bottom: 15px;
      padding: 0 10px;
      border: 2px solid #000;
      color: #000;
      background: none;
   }
</style>