<template>
  <input style="border: 1px solid #000;" :value="value" @input="inputHandle"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "article",
  props: {
    value: {
      type: String,
    },
    _scope: {
      type: Object
    }
  },
  emits: ['input'],
  setup(props) {
    const inputHandle = (evt) => {
      props._scope?.triggerEvent('input', evt.detail)
    }
    
    return {
      inputHandle
    }
  }
})
</script>
