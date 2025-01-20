<template>

    <UploadLayout>
        <div class="w-full bg-white shadow-lg rounded-md py-6 md:px-10 px-4 mt-[80px] mb-[40px]">
            <div>
                <div class="font-semibold text-[23px]">Upload video</div>
                <div class="text-gray-400 mt-1">Post a video to your account</div>
            </div>

            <div class="mt-8 md:flex gap-6">
                <label for="fileinput"
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
            </div>
        </div>
    </UploadLayout>

</template>

<script setup>
import UploadLayout from '~/layouts/UploadLayout'
</script>
