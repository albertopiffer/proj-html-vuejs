<template>
    <section class="s3">
        <div class="container">
            <h6>headache free</h6>
            <h4>award winning<br>moving company</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue. Orci varius natoque penatibus et
                magnis dis parturient montes, ridiculus mus. Aliquam enim leo, condimentum facilisis nulla sed, cursus arcu.
                Aliquam enim leo.</p>
            <a href="#" class="button">read our testimonials</a>

        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

.s3 {
    text-align: center;

    height: 670px;
    background-color: $section3Bg;

    .container {
        width: 750px !important;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 40px;
    }
}
</style>