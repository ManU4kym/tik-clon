<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6">
        <div class="text-center max-w-2xl">
            <Icon name="mdi:alert-circle-outline" class="w-24 h-24 text-purple-600 mb-6 mx-auto" />
            <h1 class="text-6xl font-bold text-gray-900 mb-4">
                404
            </h1>
            <p class="text-2xl text-gray-700 mb-6">
                Oops! The page you're looking for doesn't exist.
            </p>
            <p class="text-gray-500 mb-8">
                It seems like you've wandered off the path. Don't worry, we'll help you get back home.
            </p>
            <button @click="goHome"
                class="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300">
                <Icon name="mdi:home" class="w-5 h-5 mr-2" />
                Go Back to Home
            </button>
        </div>
    </div>
</template>

<script setup>
const router = useRouter();
const goHome = () => {
    router.push('/');
};
</script>