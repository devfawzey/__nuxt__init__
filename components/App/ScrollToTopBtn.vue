<script setup>
const { scrollToTopBtn, scrollTo } = useGsap()
onMounted(() => {
  scrollToTopBtn.___TOGGLE___();
  window.addEventListener("scroll", scrollToTopBtn.___TOGGLE___)
})
</script>


<template>
  <UButton id="scroll-to-top-btn" icon="i-heroicons-chevron-up"
    class=" fixed right-4 bottom-4 aspect-square rounded-full" color="black" square size="xl" @click="scrollTo" />
</template>