<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"


</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <Analytics />
      <SpeedInsights />
    </NuxtLayout>
  </div>
</template>
