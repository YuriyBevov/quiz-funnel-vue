<template>
    <main class="main">
        <router-view/>
    </main>
</template>

<script>
    export default {
        name: 'Main',
    }
</script>

<style lang="scss">
    .main {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
</style>
