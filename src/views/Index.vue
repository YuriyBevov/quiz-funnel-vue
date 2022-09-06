<template>
    <div class="main__wrapper">
        <section class="intro">
            <div class="cmn__wrapper">
                <div class="intro__badge">
                    For business owners hungering for growth
                </div>

                <h1 class="intro__title">
                    Take a free survey and{{'\xa0'}}get personalised website strategy <strong>tailored to your business and goals</strong>
                </h1>
            </div>
        </section>

        <section class="reasons">
            <div class="cmn__wrapper">
                <ul class="reasons__list">
                    <li
                        v-for="(reason,i) of reasons"
                        :key="'reason_' + i"
                        class="reasons__item"
                    >
                        <p class="cmn__text reasons__text">{{reason}}</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="advantages">
            <div class="cmn__wrapper advantages__wrapper">
                <h2 class="advantages__title">{{advantages.title}}</h2>

                <ul class="advantages__list">
                    <li
                        v-for="(adv,i) of advantages.blocks"
                        :key="'adv_' + i"
                        class="advantages__item"
                        :style="!adv.img ? 'padding: 0 1.2rem;' : null"
                    >
                        <img :src="setImgUrl(adv.img)" alt="картинка" v-if="adv.img">
                        <p 
                            class="cmn__text advantages__text"
                            :style="adv.img ? 'padding: 0 1.2rem;' : null"
                        >{{adv.text}}</p>
                    </li>
                </ul>

                <div class="advantages__quiz-entry">
                    <router-link :to="'/quiz/step_1'" class="cmn__link advantages__link">
                        Take the quiz
                    </router-link>
                    <blockquote class="advantages__blockquote">{{advantages.blockquote}}</blockquote>
                </div>
            </div>
        </section>

        <section class="caveats">
            <div class="cmn__wrapper">
                <h2 class="cmn__section-title">{{caveats.title}}</h2>
                <ul class="caveats__list">
                    <li
                        v-for="(cav,i) of caveats.blocks"
                        :key="'cav_' + i"
                        class="caveats__item"
                    >
                        
                        <p class="cmn__text caveats__text">
                            <span class="cmn__text">{{i + 1}}.</span>
                            {{cav.text}}
                        </p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="expectations">
            <div class="cmn__wrapper">
                <h2 class="cmn__section-title">{{expectations.title}}</h2>

                <ul class="expectations__list">
                    <li
                        v-for="(exp,i) of expectations.blocks"
                        :key="'exp_' + i"
                        class="expectations__item"
                    >
                        
                        <p class="cmn__text expectations__text">
                            <span class="cmn__text">{{i + 1}}.</span>
                            {{exp.text}}
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        
        <transition name="fade-in">
            <div class="floating-button" v-if="isFloatingButtonShowed">
                <router-link :to="'/quiz/step_1'" class="cmn__link cmn__link--floating">
                    Take the quiz
                </router-link>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
               isFloatingButtonShowed: true,

                reasons: [
                    'Want to overhaul your website but don’t know how to approach it?',
                    'Or starting a new business and wonder what kind of website you need to skyrocket your new venture?'
                ],

                advantages: {
                    title: 'Then you’re in the right place...',

                    blocks: [
                        {
                            text: 'We’ve analyzed the experience of hundreds of businesses in different niches, both our clients and case studies of the industry, found out what works and what doesn’t in different niches and types of businesses'
                        },

                        {
                            text: 'We’ve analyzed the experience of hundreds of businesses in different niches, both our clients and case studies of the industry, found out what works and what doesn’t in different niches and types of businesses'
                        },

                        {
                            img : 'intro-img.png',
                            text: 'We’ve analyzed the experience of hundreds of businesses in different niches, both our clients and case studies of the industry, found out what works and what doesn’t in different niches and types of businesses'
                        }
                    ],

                    blockquote: '*You may surprise, but not always the higher\xa0price means the better result ;) '
                },

                caveats: {
                    title: 'You will avoid',

                    blocks: [
                        {
                            text: 'Wasting money on a site that doesn’t bring in leads and doesn’t make your company look more credible and trustworthy',
                        },

                        {
                            text: 'Signing up with contractors who are not the best choice for your situation'
                        }
                    ]
                },

                expectations: {
                    title: 'But also will gain',

                    blocks: [
                        {
                            text: 'A clear understanding of what you need to focus on in order to get a site that will benefit your business',
                        },
                        {
                            text: 'Useful tips about digital strategy that your competitors most likely don’t know about... Yet...'
                        },
                    ]
                }
            }
        },

        methods: {
            setImgUrl(img) { 
                return require('@/assets/images/' + img)
            },
        },
        
        mounted() {
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        this.isFloatingButtonShowed = false
                    } else {
                        this.isFloatingButtonShowed = true
                    }
                })
            }, { threeshold: 0 })

            let checkpoint = document.querySelector('.advantages__quiz-entry');
            observer.observe(checkpoint)
        }
    }
</script>

<style lang="scss">
    @import '@/assets/styles/index.scss';

    .floating-button {
        position: fixed;
        bottom: 0;
        background: linear-gradient(360deg, rgba(0, 7, 26, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
        backdrop-filter: blur(4px);
        width: 100%;
    }

    .main {
        &__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            padding: 4.5rem 0 26rem;
        }
    }

    .intro {
        padding: 1.5rem 0;

        &__badge {
            font-family: $font_mono;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            line-height: 2.2rem;
            padding: 0.8rem 1rem;
            margin-bottom: 2.5rem;
            border-radius: 44px;
            text-align: center;
            background: rgba(196,196,196, 0.4);
            color: rgba(27,27,27, 0.6);
        }

        &__title {
            font-family: $font_sec;
            font-weight: normal;
            font-size: 3rem;
            line-height: 4.2rem;
            color: #000F2D;

            strong {
                font-family: $font_sec-extra;
            }
        }
    }

    .reasons {
        padding: 1.5rem 0;

        &__item:not(:last-child) {
            margin-bottom: 2.4rem;
        }
    }

    .advantages {
        padding: 1.5rem 0;
        background-color: #fafafa;

        &__wrapper {
            padding: 0;
        }

        &__title {
            font-size: 1.8rem;
            line-height: 2.7rem;
            font-weight: normal;
            margin-bottom: 2.5rem;
            padding: 0 1.2rem;
            color: $primary;
        }

        &__list li:not(:last-child) {
            margin-bottom: 2.4rem;

            p {
                padding-bottom: 2.4rem !important;
            }
        }

        &__list li:last-child {
            
            p {
                padding-bottom: 2.4rem !important;
            }
        }

        &__quiz-entry { 
            padding: 1rem 0; 
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin-bottom: 4rem;
        }

        &__link {
            margin-bottom: 1.9rem;
        }

        &__blockquote {
            font-style: normal;
            font-size: 1.6rem;
            margin: 0 auto;
            text-align: center;
            line-height: 2.2rem;
            opacity: 0.8;
            color: #000000;
        }
    }

    .caveats,
    .expectations {
        padding: 1.5rem 0;

        h2 {
            margin-bottom: 2rem;
        }

        p {
            position: relative;
            padding-left: 2.5rem;
            margin-bottom: 2.4rem;

            span {
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }
</style>