<template>
    <MainLayout>
        <div class="pt-[80px] w-[calc(100%-90px)] max-w-[690px]">
            <PostMain />
        </div>
    </MainLayout>


</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
import MainLayout from '~/layouts/MainLayout.vue'
import PostMain from '~/components/PostMain.vue'

useHead({
    title: 'Tik Tac',
    meta: [
        {
            name: 'description',
            content: 'Awesome app'
        }
    ],
    link: [
        {
            rel: 'icon',
            href: 'https://cdn-icons-png.flaticon.com/128/4424/4424479.png', // Update with the correct path to your favicon
        },
    ],
})
</script>