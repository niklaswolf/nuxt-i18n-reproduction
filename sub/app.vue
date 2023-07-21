<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>
<template>
  <div>
    Sub-project
    {{$t('test')}}
  </div>
</template>
