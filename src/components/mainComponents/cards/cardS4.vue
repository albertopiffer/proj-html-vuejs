<template>
    <li :class="{ left: cardS4Elements.position == 'left', center: cardS4Elements.position == 'center', right: cardS4Elements.position == 'right' }"
        class="observedS4">
        <div class="imgContainer"> <!-- necessario per evitare che overflow occupi il padding -->
            <img :src="cardS4Elements.image" alt="imgS4">
        </div>
        <div class="cardText">
            <h5>{{ cardS4Elements.title }}</h5>
            <p>{{ cardS4Elements.description }}</p>
            <a href="#" class="button">{{ cardS4Elements.buttonText }}</a>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        cardS4Elements: {
            type: Object,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../../../style/partials/palette' as *;

li {
    padding: 20px;
    background-color: $sectionBg;

    .imgContainer {
        overflow: hidden;

        img {
            margin-bottom: 20px;
            transition: transform 1s ease;
        }

        img:hover {
            transform: scale(1.15);
        }
    }

    .cardText {
        background-color: white;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 25px;

        p {
            line-height: 30px;
        }

        padding: 30px 20px;
    }
}
</style>