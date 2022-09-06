<template>
    <div class="cmn__layout">
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/common/Header'
    import Main from '@/components/common/Main'
    import Footer from '@/components/common/Footer'

    export default {
        name: "MainLayout",
        components: {
            Header,
            Main,
            Footer
        }
    }
</script>