<template>
    <nav>
        <div class="container">
            <img src="../../img/avada-movers-logo.png" alt="">
            <ul>
                <li v-for="(el, i) in navbarElements" :key="i"
                    :class="{ button: el.button == 'true', active: el.active == 'true' }">
                    <a href="#"> {{ el.name }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

    data() {
        return {
            navbarElements: [
                {
                    "name": "Home",
                    "active": "true",
                    "button": "false"
                },
                {
                    "name": "Rates",
                    "active": "false",
                    "button": "false"
                },
                {
                    "name": "Testimonials",
                    "active": "false",
                    "button": "false"
                },
                {
                    "name": "FAQ",
                    "active": "false",
                    "button": "false"
                },
                {
                    "name": "Blog",
                    "active": "false",
                    "button": "false"
                },
                {
                    "name": "Contact",
                    "active": "false",
                    "button": "false"
                },
                {
                    "name": "Free Quote",
                    "active": "false",
                    "button": "true"
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

nav {
    height: 105px;
    width: 100%;

    .container {
        height: 100%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            display: flex;
            align-items: center;

            gap: 50px;

            font-weight: 700;

            .active {
                color: $lima;
            }
        }


    }

}
</style>