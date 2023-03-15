<template>
    <header>
        <div class="container">
            <p>Call us for a Free Quote: 1.800.555.6789</p>
            <ul>
                <li>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                </li>
                <li>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                </li>
                <li>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                </li>
                <li>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;

header {
    height: 47px;

    font-size: 13px;
    color: white;

    padding: 0 30px;

    .container {
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        ul {
            display: flex;

            gap: 20px;

            font-size: 16px;
        }
    }
}
</style>