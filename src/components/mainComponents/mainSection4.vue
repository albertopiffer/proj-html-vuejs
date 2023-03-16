<script>

import cardS4 from './cards/cardS4.vue'

export default {
    data() {
        return {
            cardElements: [
                {
                    "image": "./src/img/avada-movers-serviceonephoto-final-600x383.jpg",
                    "title": "Two Man Teams",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    "buttonText": "read more",
                    "position": "left"
                },
                {
                    "image": "./src/img/avada-movers-servicetwophoto-final-600x383.jpg",
                    "title": "We Do All The Lifting",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    "buttonText": "read more",
                    "position": "center"
                },
                {
                    "image": "./src/img/avada-movers-servicethreephoto-final-600x383.jpg",
                    "title": "Coast To Coast",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    "buttonText": "read more",
                    "position": "right"
                },
            ]
        }
    },

    components: {
        cardS4,
    },

    mounted() {
        const options = {
            rootMargin: '0px',
            threshold: 0.5
        };

        const elementsToObserve = document.querySelectorAll('.observedS4');

        elementsToObserve.forEach(element => {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    element.classList.add('fade-in');
                    observer.unobserve(element);
                }
            }, options);

            observer.observe(element);
        });
    }
}

</script>

<template>
    <section class="s4">
        <div class="container">
            <h6>we are a professional</h6>
            <h4>Full-Service Solution</h4>
            <ul class="cards">
                <cardS4 v-for="(element, i) in cardElements" :key="i" :cardS4Elements="element" />
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

.s4 {
    height: 1100px;

    background-color: white;

    text-align: center;

    padding: 0 30px;

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

        gap: 25px;

        h4 {
            margin-bottom: 25px;
        }

        .cards {
            display: flex;
            justify-content: center;

            gap: 50px;

            .left {
                opacity: 0;
                transform: translateX(-30px);
                transition: opacity 0.5s ease-out,
                    transform 0.5s ease-out;
            }

            .center {
                opacity: 0;
                transform: translateY(-30px);
                transition: opacity 0.5s ease-out,
                    transform 0.5s ease-out;
            }

            .right {
                opacity: 0;
                transform: translateX(+30px);
                transition: opacity 0.5s ease-out,
                    transform 0.5s ease-out;
            }

            @media (max-width: 1024px) {
                flex-direction: column;
            }
        }
    }

}
</style>