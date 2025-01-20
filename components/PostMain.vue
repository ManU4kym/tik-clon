<template>
    <div id="PostMain" class="flex border-b py-6">
        <div class="cursor-pointer">
            <img src="https://cdn-icons-png.flaticon.com/128/18717/18717265.png" alt=""
                class="rounded-full max-h-[60px]" width="60">
        </div>
        <div class="pl-3 w-full px-4">
            <div class="flex items-center justify-between pb-0 5">
                <button>
                    <span class="font-bold hover-underline cursor-pointer">
                        user name
                    </span>
                    <span class="text-light pl-1 cursor-painter text-gray-500 text-[13px]">
                        @user name
                    </span>
                </button>
                <button
                    class="border py-0 5 rounded-md font-semibold hover:bg-[#ffeef2] border-[#F02C56] text-[#F02C56] text-[15px] px-[21px]">Follow</button>
            </div>
            <div class="text-[15px] pb-0.5 break-words md:max-w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </div>
            <div class="text-[14px] text-gray-500 pb-0.5">
                #fun #cool #SuperAwesome
            </div>
            <div class="text-[14px] pb-0.5 flex items-center font-semibold">
                <Icon name="mdi:music" size="20" />
                <div class="px-1">original sound - AWESOME</div>
                <Icon name="mdi:heart" size="20" />
            </div>
            <div class="mt-2 5">
                <div
                    class="max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer max-h-[580px] min-h-[480px] relative">
                    <video src="https://cdn.pixabay.com/video/2025/01/03/250395_tiny.mp4" ref="video" loop muted />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

let video = ref(null)
onMounted(() => {
    video.value.play()
})
</script>
