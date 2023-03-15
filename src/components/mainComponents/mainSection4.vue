<script>

import cardS4 from './cards/cardS4.vue'

export default {
    components: {
        cardS4,
    }
}

</script>

<template>
    <section class="s4">
        <div class="container">
            <h6>we are a professional</h6>
            <h4>Full-Service Solution</h4>
            <div class="cards">
                <cardS4 />
                <cardS4 />
                <cardS4 />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

.s4 {
    text-align: center;

    .container {
        .cards {
            display: flex;
            justify-content: center;
            gap: 100px;
        }
    }
}
</style>