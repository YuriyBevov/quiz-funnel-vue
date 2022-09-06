<template>
    <footer class="footer">
        <div class="cmn__wrapper footer__wrapper">
            <img :src="require('@/assets/images/logo.png')" alt="Логотип">

            <p>
                We build strategic, engaging digital solutions that reinforce credibility, convey key messages, and turn prospects into profits.
            </p>

            <span>
                Ⓒ Done Global, Inc. All Rights Reserved 2021
            </span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style lang="scss">
    @import '@/assets/styles/index.scss';
    .footer {
        position: relative;
        z-index: 10;
        min-height: 7.5rem;
        background: radial-gradient(161.4% 126.62% at 51.33% 65.69%, #001234 0%, #0E3774 100%);
//        opacity: 0.9;
        padding: 3rem 2rem 7.5rem;

        &__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: inherit;
        }

        img {
            margin-bottom: 1.5rem;
        }

        p {
            font-family: $font_mono-reg;
            font-size: 1.4rem;
            line-height: 2rem;
            margin-bottom: 1rem;

            text-align: center;
            color: $col_white;
        }

        span {
            font-family: $font_mono-reg;
            font-size: 1.4rem;
            line-height: 1.4rem;

            text-align: center;
            opacity: 0.5;
            
            color: $col_white;
        }
    }
</style>