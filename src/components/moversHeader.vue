<template>
    <header>
        <div class="container">
            <p>Call us for a Free Quote: 1.800.555.6789</p>
            <ul>
                <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
                <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
                <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
                <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
            </ul>
        </div>
    </header>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@use '../style/partials/colors' as *;

header {
    height: 47px;
    background-color: $lima;

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
            justify-content: flex-end;

            gap: 20px;

            font-size: 16px;
        }
    }
}
</style>