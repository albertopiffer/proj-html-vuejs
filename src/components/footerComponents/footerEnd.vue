<template>
    <footer>
        <p>© Copyright 2012 - 2023 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
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
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    height: 140px;

    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 25px;

    p {
        font-size: 14px;
    }

    ul {
        display: flex;
        justify-content: center;

        gap: 15px;

        font-size: 20px;
    }
}
</style>