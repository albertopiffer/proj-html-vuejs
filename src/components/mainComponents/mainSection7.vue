<template>
    <section class="s7">
        <div class="container">
            <h4>Request A Free Quote</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <a href="#" class="button">click here</a>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

.s7 {
    height: 535px;

    background-image: url(../../img/avada-movers-request-quote-background.jpg);
    background-position: top center;
    background-size: cover;

    padding: 0 30px;

    .container {
        width: 750px;
        height: 100%;

        text-align: center;
        color: $smallTitle;
        line-height: 30px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 35px;
    }
}
</style>