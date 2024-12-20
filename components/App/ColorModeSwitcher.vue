<script setup lang='ts'>

const colorMode = useColorMode()

const isDark = computed({
 get: (): boolean => colorMode.value === 'dark',
 set: () => colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
})
const icon = computed(() => `i-heroicons-${isDark.value ? 'sun' : 'moon'}-20-solid`)

</script>

<template>
 <ColorScheme tag='div' class="anime-pulse w-10 bg-red-900 aspect-square rounded-full">
  <UButton size='lg' @click="isDark = !isDark" square :icon="icon" class='rounded-full' color="white" />
 </ColorScheme>
</template>