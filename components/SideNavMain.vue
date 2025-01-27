<template>
    <div :class="route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'" id="SideNavMain"
        class="fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto">
        <div class="lg:w-full lg:border-r mx-auto w-[55px]">
            <NuxtLink to="/">
                <MenuItem iconString="For You" class="whitespace-nowrap" colorString="text-[#C5283D]" sizeString="30" />
            </NuxtLink>
            <MenuItem iconString="Following" colorString="text-[#000000]" sizeString="27" />
            <MenuItem iconString="LIVE" colorString="text-[#000000]" sizeString="27" />


            <div class="border-b lg:ml-2 lg:mr-4 mt-2" />

            <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Suggested accounts
            </div>
            <div class="lg:hidden block pt-3" />

            <div class="cursor-pointer">
                <MenuItemFollow />
            </div>

            <button class="lg:block hidden pt-1.5 pl-2 text-[13px] text-[#F02C56]">
                See all
            </button>

            <div class="border-b lg:ml-2 mt-2 lg:mr-4" />

            <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Following accounts
            </div>
            <div class="cursor-pointer">
                <MenuItemFollow />
            </div>

            <button class="lg:block hidden pt-1.5 pl-2 text-[13px] text-[#F02C56]">
                See more
            </button>
            <div class="lg:block hidden border-b lg:ml-2 mt-2 lg:mr-4" />

            <div class="lg:block hidden   text-gray-500 text-[11px]">
                <div class="pt-4 px-2 ">About Newsroom TikTac Shop Contact Careers ByteDance</div>
                <div class="pt-4 px-2">TikTac for Good Advertise Developers Transparency TikTac Rewards</div>
                <div class="pt-4 px-2">Help Safety Terms Privacy Creator Portal Community Guidelines</div>
                <div class="pt-4 px-2">&copy; 2023 TikTac</div>
            </div>
            <div class="pb-14"></div>
        </div>
    </div>
</template>


<script setup>



const route = useRoute()
</script>