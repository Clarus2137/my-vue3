<template>
   <div
      class="dialog"
      v-if="show"
      @click="hideDialog"
   >
      <div class="dialog__content" @click.stop>
         <slot></slot>
      </div>
   </div>
</template>



<script>
   import toggleMixin from "@/mixins/toggleMixin"

   export default {
      name: 'my-dialog',

      mixins: [toggleMixin]
   }
</script>



<style scoped>
   .dialog {
      display: flex;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,.5);
   }

   .dialog__content {
      margin: auto;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
   }
</style>