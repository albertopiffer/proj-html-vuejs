<script>

import cardS6 from './cards/cardS6.vue'

export default {
    data() {
        return {
            cardElements: [
                {
                    "image": "./src/img/avada-movers-johndoe-final-200x200.jpg",
                    "title": "John Doe",
                    "description": "”Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”",
                    "position": "left"
                },
                {
                    "image": "./src/img/avada-movers-janedoe-final-200x200.jpg",
                    "title": "Jane Doe",
                    "description": "”Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”",
                    "position": "center"
                },
                {
                    "image": "./src/img/avada-movers-johnsmith-final-200x200.jpg",
                    "title": "John Smith",
                    "description": "”Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”",
                    "position": "right"
                },
            ]
        }
    },

    components: {
        cardS6,
    },

    mounted() {
        setTimeout(() => {
            const elementLeft = document.querySelector('.s6 .left');
            const elementCenter = document.querySelector('.s6 .center');
            const elementRight = document.querySelector('.s6 .right');

            elementLeft.classList.add('fade-in');
            elementCenter.classList.add('fade-in');
            elementRight.classList.add('fade-in');
        }, 200);
    }
}

</script>

<template>
    <section class="s6">
        <div class="container">
            <h6>happy customers</h6>
            <h4>Testimonials</h4>
            <ul class="cards">
                <cardS6 v-for="(element, i) in cardElements" :key="i" :cardS6Elements="element" />
            </ul>
            <a href="#" class="button">read more testimonials</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

.s6 {
    height: 1020px;

    background-image: url(../../img/avada-movers-testimonial-background.jpg);
    background-position: top left;
    background-size: cover;

    padding: 0 30px;

    overflow: hidden;

    .container {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 20px;

        .cards {
            display: flex;
            justify-content: center;

            gap: 50px;

            margin: 40px 0 85px;

            .left {
                transform: translateX(calc(-100% - ((100vw - 1300px) / 2) - 400px)); //400px è la width dell'elemento
                transition: transform 0.5s ease-out;
            }

            .center {
                transform: translateY(calc(-100% - 380px)); //380px è la height dell'elemento
                transition: transform 0.5s ease-out;
            }

            .right {
                transform: translateX(calc(100% + ((100vw - 1300px) / 2) + 400px));
                transition: transform 0.5s ease-out;
            }
        }
    }
}
</style>