<template>
    <section class="s1">
        <div class="container">
            <h6>moving without the hassle</h6>
            <h4>we make it simple</h4>
            <h6>professional service with quality and costumer satisfaction</h6>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

.s1 {
    .container {
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 35px;

        h6 {
            color: $smallTitle;
            font-size: 16px;
            text-transform: uppercase;
        }

        h4 {
            color: $title;
            font-size: 53px;
            text-transform: uppercase;
        }

    }
}
</style>