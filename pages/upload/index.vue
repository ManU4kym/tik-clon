<template>

    <UploadLayout>
        <div class="w-full bg-white shadow-lg rounded-md py-6 md:px-10 px-4 mt-[80px] mb-[40px]">
            <div>
                <div class="font-semibold text-[23px]">Upload video</div>
                <div class="text-gray-400 mt-1">Post a video to your account</div>
            </div>

            <div class="mt-8 md:flex gap-6">
                <label v-if="false" for="fileinput"
                    class="md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <Icon name="majesticons:cloud-upload" size="40" class="text-[#b3b3b1]" />
                    <div class="mt-4 text-[17px]">
                        Select video to upload
                    </div>
                    <div class="mt-1.5 text-[13px] text-gray-500">or drag and drop file</div>
                    <div class="mt-12 text-sm text-gray-400">MP4</div>
                    <div class="mt-2 text-gray-400 text-[13px]">Up to 30 minutes</div>
                    <div class="text-gray-400 text-[13px]">Less than 2 GB</div>
                    <div class="px-2 mt-8 text-white rounded-sm py-1.5 text-[15px] bg-[#F02C56]">
                        Select file
                    </div>
                    <input type="file" ref="file" id="fileinput" hidden accept=".mp4">
                </label>
                <div v-else
                    class="md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-2xl cursor-pointer relative">

                    <div class="bg-black w-full h-full" />

                    <img src="~/assets/images/mobile-case.png" alt="" class="absolute z-20  pointer-events-none h-full">
                    <img src="~/assets/images/tiktok-logo-white.png" alt="" class="absolute right-4 bottom-6 z-20"
                        width="90">
                    <video autoplay loop muted src="https://cdn.pixabay.com/video/2024/12/26/248896_tiny.mp4"
                        class="absolute rounded-xl object-cover z-10 w-full h-full p-[13px]" />
                    <div
                        class="absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300">
                        <div class="flex items-center truncate">
                            <Icon name="clarity:success-standard-line" size="16" class="min-w-[16px]" />
                            <div class="pl-1 truncate text-ellipsis text-[11px]">Video name</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </UploadLayout>

</template>

<script setup>
import UploadLayout from '~/layouts/UploadLayout'


useHead({
    title: 'Upload video',
    meta: [
        {
            name: 'description',
            content: 'Upload video to your account'
        }
    ],
    link: [
        {
            rel: 'icon',
            href: 'https://cdn-icons-png.flaticon.com/128/4301/4301577.png', // Update with the correct path to your favicon
        },
    ],
})
</script>
