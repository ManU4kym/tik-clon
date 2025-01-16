<template>
  <div class="flex w-full hover:bg-gray-100 p-2.5 rounded-md items-center">
    <div class="flex items-center lg:mx-0 mx-auto">
        <Icon :name="icon"  :class="colorString" :size="sizeString"/>
        <span class="lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px]" :class="`text-[${colorString}]`">
            {{ iconString }}
        </span>
        
    </div>
    
  </div>
</template>

<script  setup>
    
    const props = defineProps([
        'iconString',
        'colorString',
        'sizeString'
    ])
    const { iconString, sizeString, colorString } = toRefs(props)
    let icon = ref('')

    if ((iconString.value === 'For You')) {
        icon.value = 'uil:home-alt'
    } else if ((iconString.value === 'Following')) {
        icon.value = 'ic:round-people'
    } else if ((iconString.value === 'LIVE')) {
        icon.value = 'uil:play-circle'
    }

</script>
