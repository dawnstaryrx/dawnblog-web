<template>
  <content-field>
    <v-md-preview :text="text"></v-md-preview>
  </content-field>
</template>

<script>
import ContentField from '@/components/ContentField.vue'
export default {
    components: { ContentField },
    data() {
      return {
        text:'```print("hello world!")```'
      }
    },
}
</script>

<style>

</style>

