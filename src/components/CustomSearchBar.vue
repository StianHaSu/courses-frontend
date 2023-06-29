<script lang="ts">
export default{}
</script>

<template>
    <div class="wrapper max-w-[350px]">
        <div class="border border-black px-3 py-2 shadow-sm shadow-black rounded-sm">
            <div class="flex justify-between space-x-3">
                <div>
                    <input class="h-9 w-60 border border-black" type="text" id="search" name="search" placeholder="Søk etter emne">
                </div>
                <div>
                    <i class="fa fa-search text-xl" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;


</style>