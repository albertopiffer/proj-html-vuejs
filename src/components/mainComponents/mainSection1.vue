<template>
    <section class="s1">
        <h6>moving without the hassle</h6>
        <h3>we make it simple</h3>
        <h6>professional service with quality and costumer satisfaction</h6>
    </section>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            const myElement = document.querySelector('.s1');
            myElement.classList.add('fade-in');
        }, 200);
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

.s1 {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 35px;

    h3 {
        color: $title;
        font-size: 64px;
        text-transform: uppercase;
    }

    opacity: 0;
    transform: translateY(-30px);
    transition: opacity 0.5s ease-out,
    transform 0.5s ease-out;

}
</style>