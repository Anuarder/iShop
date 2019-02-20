<template>
   <div class="card" :class="hover ? 'hover-card' : ''">
        <div
            :class="{'card__front-rotate' : rotate}" 
            class="card__front card__part"
            :style="`background-color: ${color}`">
            <img 
                class="card__front-square card__square" 
                src="./assets/chip.svg">
            <div class="card__front-logo card__logo">BANK</div>
            <p class="card_numer" v-if="data.card.number">
                {{data.card.number}}
            </p>
            <p class="card_numer" v-else>**** **** **** ****</p>
            <div class="card__space-75">
            <span class="card__label">Card holder</span>
            <p class="card__info" v-if="data.card.fullName">
                {{data.card.fullName}}
            </p>
            <p class="card__info" v-else>Full name</p>
            </div>
            <div class="card__space-25">
            <span class="card__label">Expires</span>
                <p class="card__info" v-if="data.card.date">
                    {{data.card.date}}
                </p>
                <p class="card__info" v-else>MM/YY</p>
            </div>
        </div>
        
        <div
            :class="{'card__back-rotate' : rotate}"  
            class="card__back card__part"
            :style="`background-color: ${color}`">
            <div class="card__black-line"></div>
            <div class="card__back-content">
            <div class="card__secret">
                <p class="card__secret--last" v-if="data.card.cvc">
                    {{data.card.cvc}}
                </p>
                <p class="card__secret--last" v-else>cvc</p>
            </div>
            <img 
                class="card__back-square card__square" 
                src="./assets/chip.svg">
            <div class="card__back-logo card__logo">BANK</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data', 'rotate', 'color', 'hover'],
}
</script>
<style scoped>
.card{
    width: 320px;
    height: 190px;
    perspective: 600px;
}

.card__part{
    box-shadow: 1px 1px #aaa3a3;
    top: 0;
    position: absolute;
    z-index: 1000;
    left: 0;
    display: inline-block;
    width: 320px;
    height: 190px;
    background-image: url('./assets/creditCardBG.png');
    background-color: #252222;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
    backface-visibility: hidden;
}

.card__front{
    padding: 18px;
    transform: rotateY(0);
}

.card__back {
    padding: 18px 0;
    transform: rotateY(-180deg);
}

.card__black-line {
    margin-top: 5px;
    height: 38px;
    background-color: #303030;
}

.card__logo {
    color: #fff;
    font-weight: 600;
    height: 16px;
}

.card__front-logo{
    position: absolute;
    top: 18px;
    right: 18px;
}
.card__square {
    border-radius: 5px;
    height: 30px;
}

.card_numer {
    display: block;
    width: 100%;
    word-spacing: 4px;
    font-size: 20px;
    letter-spacing: 2px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
}

.card__space-75 {
    width: 75%;
    float: left;
}

.card__space-25 {
    width: 25%;
    float: left;
}

.card__label {
    font-size: 10px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.8);
    letter-spacing: 1px;
}

.card__info {
    margin-bottom: 0;
    margin-top: 5px;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.card__back-content {
    padding: 15px 15px 0;
}
.card__secret--last {
    color: #303030;
    text-align: right;
    margin: 0;
    font-size: 14px;
}

.card__secret {
    padding: 5px 12px;
    background-color: #fff;
    position:relative;
}

.card__secret:before{
    content:'';
    position: absolute;
    top: -3px;
    left: -3px;
    height: calc(100% + 6px);
    width: calc(100% - 42px);
    border-radius: 4px;
    background: repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px);
}

.card__back-logo {
    position: absolute;
    bottom: 15px;
    right: 15px;
}

.card__back-square {
    position: absolute;
    bottom: 15px;
    left: 15px;
}

.card__front-rotate{
    transform: rotateY(180deg);
}

.card__back-rotate{
    transform: rotateY(0deg);
}

.hover-card:hover .card__front {
    transform: rotateY(180deg);
}

.hover-card:hover .card__back {
    transform: rotateY(0deg);
}
</style>
