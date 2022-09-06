<template>
    <div class="result">
        
        <section class="goals">
            <div class="cmn__wrapper result__wrapper">
                <h2 class="cmn__section-subtitle">{{goals.title}}</h2>

                <p v-for="(par, i) of goals.paras" :key="'goal_' + i" class="cmn__text">
                    {{par}}
                </p>
            </div>
        </section>

        <section class="proposition">
            <div class="cmn__wrapper result__wrapper">
                <h2 class="cmn__section-subtitle">{{proposition.title}}</h2>

                <p v-for="(par, i) of proposition.paras" :key="'proposition_' + i" class="cmn__text">
                    {{par}}
                </p>
            </div>
        </section>

        <section class="strategy">
            <div class="cmn__wrapper result__wrapper">
                <h2 class="cmn__section-subtitle">{{strategy.title}}</h2>

                <p v-for="(par, i) of strategy.paras" :key="'strategy_' + i" class="cmn__text">
                    {{par}}
                </p>

                <p class="cmn__text">{{strategy.list.title}}</p>

                <ul>
                    <li
                        v-for="(item, i) of strategy.list.items" :key="'item_' + i"
                        class="strategy__item"
                    >
                        <p class="cmn__text">
                            <span class="cmn__text">{{i + 1}}.</span>
                            {{item}}
                        </p>
                    </li>
                </ul>

                <p class="cmn__text">{{strategy.conclusion}}</p>
            </div>
        </section>

        <section class="conclusion js-observed">
            <div class="conclusion__banner" id="banner">
                <div class="cmn__wrapper result__wrapper">

                    <h2 class="cmn__text cmn__text--white">
                        Claim your 100% free no-obligation 30-minute competitive analysis and strategy call ($685 value)
                    </h2>
                    <a href="#" class="cmn__link">Claim your FREE session</a>

                    <p class="cmn__text cmn__text--white">Be quick! As of today 19 december, all spots for this month are almost gone!</p>
                </div>
            </div>
            <div class="cmn__wrapper result__wrapper">
                <p v-for="(par, i) of conclusion.paras" :key="'conclusion_' + i" class="cmn__text">
                    {{par}}
                </p>
            </div>
        </section>

        <transition name="fade-in">
            <div class="floating-button" v-if="isFloatingButtonShowed">
                <a href="#" class="cmn__link cmn__link--floating" @click.stop="scrollTo('#banner')">
                    Get extensive report
                </a>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "QuizResults",

        data() {
            return {
                isFloatingButtonShowed: true,

                goals: {
                    title: 'Start with defining your goals',
                    
                    paras: [
                        'While we should always start a web or marketing project with goals, we need to consider both ourselves and the user with our website.',
                        'The site can only generate traffic, leads, and sales when we make sure we have what our target audience wants and we can deliver it for them in a satisfactory way.',
                        'Defining goals for both your organization and your user should be easy to do.',
                        'It is painful to invest time and money into a site to learn that everyone is bouncing from, where no one understands why they should buy from you. This is a big clue that you focused too much on your end goals and not theirs.'
                    ]
                },

                proposition: {
                    title: 'Determine key messages and design value proposition',

                    paras: [
                        'Be clear and transparent in what you are offering and what you want your audience to do.',
                        'Know what motivates them and what you’re strong at.',
                        'Leverage that.',
                        'Too often, websites lack the emotional or credibility connections needed to earn trust and the lead or sale.',
                        'Users want to know who they are doing business with and not that you’re just another commodity site in the space.',
                        'If you can’t put names, pictures, culture, philosophy, or some type of story on your website, you’ll lack the ability to state what you’re about.',
                        'Customers care about your intentions.',
                        'Even cost-conscious shoppers simply looking for the lowest price need to feel like you’re a legit business before plugging in credit card details.',
                        'When you tell your story and create factors like price, quality, customer service, what you do with profits, how you give back, etc., you create the bond needed to stand out from the rest of the competition'
                    ]
                },

                strategy: {
                    title: 'Strategy is the key',

                    paras: [
                        'You may have the fanciest website made by a big-name designer - but if your copy is vague and visitors are not convinced by your offer - you might be outperformed by a simpler website with a strong proposition and clear messaging.',
                        'If you want create the most compelling proposition on the market - the best way to start is to conduct a deep competitive analysis',
                        'It will help you better understand the competitive landscape of your market and how you can differentiate to get the maximum ROI on your marketing investments',
                        'Fortunately, this is what we can help you with. Based on your test results, I think you will get a huge value from our FREE competitive analysis session.'
                    ],

                    list: {
                        title: 'On this session we’ll show you:',
                        items: [
                            'What traffic channels your competitors are using (where they get their traffic from)',
                            'Which keywords your competitors are targeting for their SEO strategy and how you can use it in your strategy',
                            'What kind of ads they run in the social media campaigns',
                            'And what tactics do they use to attract prospects and convert these leads into sales'
                        ]
                    },

                    conclusion: 'You will get a ton of competitive intel and business insights that will help you get the maximum ROI on your marketing investments in 2022'
                },

                conclusion: {
                    paras: [
                        'You also will receive PDF-file with personalised competitive analysis on the day of the session',
                        'Pre-session preparation is a rather time-consuming routine for us, that’s why this offer won’t last long.',
                        'We just feel a desire to help the most serious-minded entrepreneus to get new year off the right foot',
                        'If it’s you - book now to save your spot! Don’t miss this limited offer'
                    ]
                },
            }
        },

        methods: {
            scrollTo() {
                let anchor = document.querySelector('#banner')

                let pos = anchor.getBoundingClientRect().top;
                window.scrollTo({
                    top: pos - 200,
                    left: 0,
                    behavior: 'smooth'
                });
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

            let conclusion = document.querySelector('.conclusion');
            observer.observe(conclusion)
        }

    }
</script>

<style lang="scss">
    .result {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5rem;

        &__wrapper {
            padding: 0 2.6rem;
        }

        h2 {
            margin-bottom: 3rem;
        }

        p {
            margin-bottom: 3rem;
        }
    }

    .strategy__item {
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

    .conclusion {
        width: 100vw;
        &__banner {
            position: relative;
            padding-top: 2.7rem;
            padding-bottom: 3.9rem;
            background: radial-gradient(52.93% 55.21% at 50.13% 58.78%, #004F98 0.01%, #163B83 100%);
            opacity: 0.9;
            margin-bottom: 2.5rem;

            &::before,
            &::after {
                position: absolute;
                left: 0;
                width: 100%;
                height: 6px;
                content: '';
                background: rgba(0, 133, 255, 1);
            }

            &::before {
                top: 0;
            }

            &::after {
                bottom: 0;
            }

            h2 {
                text-align: center;
                font-weight: 400;
                max-width: 32rem;
                margin: 0 auto;
                margin-bottom: 2.8rem;
            }

            a {
                margin-bottom: 2.8rem;
            }


            p {
                font-size: 1.6rem;
                line-height: 1.9rem;
                max-width: 31rem;
                text-align: center;
                margin: 0 auto;
            }
        }
    }

    .fade-in-enter-active {
        transition: all .4s .5s ease;
    }

    .fade-in-leave-active {
        transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-in-enter {
        opacity: 0;
    }

    .fade-in-leave-to {
      opacity: 0;
    }
</style>