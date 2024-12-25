<template>
  <div>{{ count }}</div>
  <button @click="addBut">加+1</button>
</template>
<script setup lang="ts">
import { ref,computed } from 'vue';
import {testStore} from '@/store/test/index'

//const count = ref(0)
//获取store
const store = testStore();
//从store里面获取count
const count = computed(() => {
  return store.getCount //获取值
})
//改变store里面的值
const addBut = () => {
  //store.count++
  store.setCount(++store.count )
}
</script>

<style scoped></style>