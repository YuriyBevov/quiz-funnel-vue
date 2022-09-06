<template>
    <div class="quiz">

            <transition name="fade" >
              <div class="range" v-if="this.current !== this.current + 1 && !this.isResultShowed">
                <div 
                  class="range-track" 
                  :style="'width:' + this.getRangeWidth() "
                ></div>
              </div>
            </transition>

            <div class="cmn__wrapper quiz__wrapper">
              <ul class="quiz__list">
                  <li v-for="(item, index) in quizData" :key="item.id">
                      <transition :name="index === 0 ? 'move-up' : 'fade'" :appear="true" mode="out-in" >
                          <div class="quiz__list-container" v-if="current === index + 1">
                              <h2>{{ item.title }}</h2>
                              <p v-if="item.desc">{{item.desc}}</p>

                              <button type="button" class="quiz__skip" v-if="item.isSkipBtnExist" @click="onClickChangeStep(current + 1)">
                                  Skip this question
                              </button>

                              <ul
                                class="quiz__card-list"
                              >
                                  <li
                                      class="quiz__card-item"
                                      v-for="(card, i) of item.cards"
                                      :key="'card_' + i"
                                  >
                                      <button
                                          :disabled="card.isDisabled"
                                          :class="card.isActive ? 'active' : null"
                                          :data-id="card.label"
                                          @click.stop="card.isActive = true, onClickChangeStep(card.nextCardId, item.cards, item.title, card.desc, item.step)"
                                      ><span v-for="(text,i) of card.desc" :key="'text_' + i" class="card__text" :style="item.textCentered ? 'text-align: center' : 'text-align: left'">{{text}}</span>
                                      </button>
                                  </li>
                              </ul>
                          </div>
                      </transition>
                  </li>
              </ul>

              <div v-if="isResultShowed" class="quiz__result" :class="this.isResultShowed ? 'active' : null">
                  <h2>Your report is ready!</h2>
                  <p>Click a button below, and my automatic virtual assistant will send to you in whatsapp right now</p>
                  <img :src="require('@/assets/images/quiz-result-img.png')" alt="Survey">
                  <a href="#" class="cmn__link">Get your result in Whatsapp</a>
              </div>
            </div>
        </div>
</template>

<script>
  import { quiz } from '@/data/quiz-data.js'

  export default {
    name: "Quiz",

    data() {
      return {
        current: 1,
        isResultShowed: false,
        quizData: quiz,

        quizResultData: {}
      }
    },

    methods: {
      scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
      },

      onClickChangeStep(step, list = null, title = null, desc = null, nextStep) {
        let str = '';

        title !== null ?
        desc.forEach(item => {
          str += item
        }) : null
      
        this.quizResultData[title] = str

        list !== null ?
        list.forEach(item => {
          item.isDisabled = true
        }) : null

        setTimeout(() => {
          this.current = step
          if(this.current === 9) {
            setTimeout(() => {
              this.isResultShowed = true
              this.$router.push('/quiz/' + 'result')
            }, 1000);
          } else {
            this.$router.push('/quiz/' + 'step_' + (nextStep + 1))
          }

          this.scrollToTop();
        }, 1000);
      },

      getRangeWidth() {
        return String((100 / 8 ) * (this.current - 1)) + '%'
      }
    },

  }
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';

  .range {
      height: 1rem;

      &-track {
        height: 100%;
        background-color: #4075FF;
        transition: width 0.3s ease-out;
      }
  }

  .quiz {
      width: 100%;
      
      &__wrapper {
        padding-top: 5rem;
      }

      h2 {
          font-weight: bold;
          font-size: 2.6rem;
          line-height: 3.6rem;
          color: #001234;
          margin-bottom: 4rem;
          text-align: center;
      }

      p {
          font-size: 1.8rem;
          line-height: 2.7rem;
          text-align: center;
          color: $primary;
          opacity: 0.9;
          margin-bottom: 2.5rem;
      }

      &__skip {
          width: 12.4rem;
          
          font-size: 1.4rem;
          line-height: 1.8rem;
          text-align: center;
          opacity: 0.9;
          margin: 0 auto;
          margin-bottom: 2.8rem;
          padding: 0.8rem 0;
          border: 0;
          border-bottom: 1px solid $col_black;

          background-color: transparent;
          color: $primary;
      }

      &__list {
          width: 100%;
          height: 100%;

          &-container {
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 100%;
          }
      }

      &__card-list {
          display: flex;
          flex-direction: column;
          width: 100%;
      }

      &__card-item {
          button {
              width: 100%;
              height: 100%;
              padding: 28px 10px;
              background: #ffffff;
              border: 1px solid rgba(56, 81, 120, 0.2);
              box-sizing: border-box;
              box-shadow: 0px 2px 12px rgba(0, 18, 52, 0.05);
              border-radius: 12px;
              margin-bottom: 1.2rem;
              transition: transform 0.3s linear;

              span {
                  display: block;
                  width: 100%;
                  font-family: $font_mono;
                  font-weight: 500;
                  font-size: 2rem;
                  line-height: 2.6rem;

                  color: #1B1B1B;
                  opacity: 0.8;
                  &:not(:last-child) {
                    margin-bottom: 2.5rem;
                  }
                  
              }

              &.active {
                  transform: scale(0.9);
              }
          }
      }

      &__result {
        transform: translateY(1000px);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          margin-bottom: 2.5rem;
        }

        a {
          margin-bottom: 7rem;
        }

        &.active {
            animation: move-up 0.4s linear forwards;
        }
      }

      @keyframes move-up {
        0% {
          transform: translateY(1000px);
        }

        100% {
          transform: translateY(0);
        }
      }
  }
</style>
