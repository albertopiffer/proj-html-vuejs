<template>
    <section class="f1">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h5>about</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis ex ut sem accumsan vehicula.
                        Integer elit arcu, hendrerit id sapien ut, facilisis accumsan arcu.</p>
                    <img src="../../img/avada-movers-logo.png" alt="logo-avada">
                </div>
                <div class="col">
                    <h5>avada movers</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Rates</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Free Quote</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h5>recent posts</h5>
                    <ul>
                        <li><a href="#">Heading Out To College?</a></li>
                        <li><a href="#">Moving Your Business</a></li>
                        <li><a href="#">Outstanding Quality</a></li>
                        <li><a href="#">Cost of Moving</a></li>
                        <li><a href="#">Best Moving Tips</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

.f1 {
    height: 465px;

    background-color: white;

    padding: 70px 30px 50px;

    .container {
        height: 100%;

        .row {
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            gap: 50px;

            .col {
                flex-basis: calc(100% / 3);

                display: flex;
                flex-direction: column;

                img {
                    align-self: flex-start;

                }

                h5 {
                    color: black;
                    text-transform: uppercase;
                    font-size: 19px;

                    margin-bottom: 40px;
                }

                p {
                    line-height: 30px;
                    color: $smallTitle;

                    margin-bottom: 40px;
                }

                ul {
                    display: flex;
                    flex-direction: column;

                    color: $smallTitle;

                    gap: 40px;
                }

            }
        }
    }
}
</style>