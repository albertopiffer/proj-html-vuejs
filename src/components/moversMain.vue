<script>

import mainNavbar from './mainComponents/mainNavbar.vue'
import mainSection1 from './mainComponents/mainSection1.vue'


export default {
    components: {
        mainNavbar,
        mainSection1,
    }
}
</script>

<template>
    <div class="containerS1">
        <div class="container">
            <mainNavbar class="top-right" />
            <mainSection1 class="center" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerS1 {
    background-color: burlywood;

    padding: 0 30px;

    .container {
        height: 690px;
        background-color: beige;

        position: relative;

        .top-right {
            position: absolute;

            top: 0;
            right: 0;
        }

        .center {
            position: absolute;

            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>