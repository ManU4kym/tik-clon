<template>
    <div :class="route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'" id="SideNavMain" class="fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto">
        <div class="lg-full mx-auto w-[55px]">
            <nuxt-link to="/">
                <MenuItem iconString= "For You" colorStrings="#F02C56" sizeString="30"/>
            </nuxt-link>
            <MenuItem iconString= "Following" colorStrings="#000000" sizeString="27"/>
            <MenuItem iconString= "LIVE" colorStrings="#000000" sizeString="27"/>
        </div>
    </div>
</template>


<script setup>
const route = useRoute()
</script>