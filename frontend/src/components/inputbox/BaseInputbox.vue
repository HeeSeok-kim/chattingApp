<template>
  <input :type="propsType" :placeholder="propsPlaceholder" :value="propsValue" >
</template>

<script>
export default {
  props: {
    propsType: {
      type: String,
      default: '',
    },
    propsPlaceholder: {
      type: String,
      default: '',
    },
    propsValue: {
      type: [String, Number],
      default: '',
    }
  }
}
</script>

<style scoped>

</style>