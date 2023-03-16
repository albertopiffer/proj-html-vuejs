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
        const options = {
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');

                    const s6right = document.querySelector('.s6 .right');
                    const s6center = document.querySelector('.s6 .center');
                    s6right.classList.add('fade-in');
                    s6center.classList.add('fade-in');

                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const elementToObserve = this.$el.querySelector('.left');
        observer.observe(elementToObserve);
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

    @media (max-width: 1024px) {
        height: auto;
        padding: 80px 0;
    }

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
                opacity: 0;
                transform: translateX(-100%);
                transition: opacity 0.4s ease-out,
                    transform 0.5s ease-out;
            }

            .center {
                opacity: 0;
                transform: translateY(-100%);
                transition: opacity 0.4s ease-out,
                    transform 0.5s ease-out;
            }

            .right {
                opacity: 0;
                transform: translateX(100%);
                transition: opacity 0.4s ease-out,
                    transform 0.5s ease-out;
            }

            @media (max-width: 1024px) {
                flex-direction: column;
                align-items: center;
            }
        }
    }
}
</style>