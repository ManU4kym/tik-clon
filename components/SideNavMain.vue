<template>
    <div :class="route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'" id="SideNavMain" class="fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto">
        <div class="lg-full mx-auto w-[55px]">
            <NuxtLink to="/">
                <MenuItem iconString= "For You" class="whitespace-nowrap" colorString="text-[#C5283D]" sizeString="30" />
            </NuxtLink>
            <MenuItem iconString= "Following" colorString="text-[#000000]"  sizeString="27"/>
            <MenuItem iconString= "LIVE" colorString="text-[#000000]" sizeString="27"/>


            <div class="border-b lg:ml-8 mt-2" />

            <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Suggested accounts
            </div>
            <div class="lg:hidden block pt-3"/>

            <div class="cursor-pointer">
                <MenuItemFollow/>
            </div>
        </div>
    </div>
</template>


<script setup>



const route = useRoute()
</script>