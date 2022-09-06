<template>
    <header class="header">
        <div class="cmn__wrapper header__wrapper">
            <router-link :to="'/'">
                <img :src="require('@/assets/images/logo.png')" alt="Логотип">
            </router-link>
        </div>
    </header>
</template>

<style lang="scss">
    .header {
        min-height: 7.5rem;
        background: radial-gradient(161.4% 126.62% at 51.33% 65.69%, #001234 0%, #0E3774 100%);
        opacity: 0.9;

        &__wrapper {
            display: flex;
            align-items: center;
            min-height: inherit;
        }
    }
</style>