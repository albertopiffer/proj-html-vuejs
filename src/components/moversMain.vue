<script>

import mainNavbar from './mainComponents/mainNavbar.vue'
import mainSection1 from './mainComponents/mainSection1.vue'
import mainSection2 from './mainComponents/mainSection2.vue'
import mainSection3 from './mainComponents/mainSection3.vue'
import mainSection4 from './mainComponents/mainSection4.vue'

export default {
    components: {
        mainNavbar,
        mainSection1,
        mainSection2,
        mainSection3,
        mainSection4,
    }
}
</script>

<template>
    <div class="containerS1">
        <div class="container">
            <mainNavbar class="top-right" />
            <mainSection1 />
        </div>
    </div>
    <a href="#">
        <mainSection2 />
    </a>
    <mainSection3 />
    <mainSection4 />
</template>

<style lang="scss" scoped>
.containerS1 {
    background-image: url(../img/avada-movers-homeherobackground-final.jpg);
    background-position: center bottom;
    background-size: cover;
    height: 690px;

    padding: 0 30px;

    .container {
        height: 100%;

        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        .top-right {
            position: absolute;

            top: 0;
            right: 0;
        }
    }
}
</style>