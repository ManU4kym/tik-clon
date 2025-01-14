<template>
    <div id="TopNav" class="fixed bg-white z-30 flex items-center w-full border-b h-[61px]">
        <div :class="route.fullPath === '/' ? 'max-w-[1150px]' : ''"
            class="flex items-center justify-between w-full px-6 mx-auto">
            <div :class="route.fullPath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">
                <nuxt-link to="/" class="flex justify-start ">
                    <img src="https://cdn-icons-png.freepik.com/256/2549/2549120.png?semt=ais_hybrid" alt="Logo"
                          class="h-[38px] w-[38px] " />
                </nuxt-link>
            </div>
            <div class="hidden md:flex items-center bg-[#F1F1F2] p-1 rounded-full max-w-[380px] w-full">
                <input type="text" class="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none" placeholder="Search accounts">
                <div class="px-3 py-1 flex items-center border-l border-l-gray-300">
                    <Icon name="uil:search" style="color: black" />
                </div>
            </div>
            <div class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full">
                <button class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100">
                    <Icon name="uil:bell" style="color: black" />
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
const route = useRoute()
</script>

<style scoped>
/* Styles here */
</style>