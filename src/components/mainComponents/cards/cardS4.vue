<template>
    <li>
        <img :src="cardS4Elements.image" alt="">
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

    img {
        margin-bottom: 20px;
    }

    .cardText {
        background-color: white;

        display: flex;
        flex-direction: column;
        align-items: center;

        line-height: 30px;
    }
}
</style>