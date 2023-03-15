<template>
    <li>
        <img :src="cardS6Elements.image" alt="imgS6">
        <h5>{{ cardS6Elements.title }}</h5>
        <p>{{ cardS6Elements.description }}</p>
    </li>
</template>

<script>
export default {
    props: {
        cardS6Elements: {
            type: Object,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../../../style/partials/palette' as *;

li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    gap: 40px;

    line-height: 30px;
    text-align: center;

    color: $smallTitle;

    img {
        width: 150px;
        border-radius: 999px;
    }
}
</style>