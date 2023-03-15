<template>
    <section class="s5">
        <div class="container">
            <div class="card">
                <div class="cardText">
                    <h6>we remove the headache from moving</h6>
                    <h4>Move With Ease</h4>
                    <p>With our super simple service we can take you from getting a quote, right through to being in your
                        new
                        home with all of your belongings securely packed and safely delivered, even in the rooms of your
                        choice.
                    </p>
                    <a href="#" class="button">get a free quote now</a>
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

.s5 {
    height: 800px;

    background-image: url(../../img/avada-movers-movewithease-background-new.jpg);
    background-position: top left;
    background-size: cover;

    padding: 0 30px;

    .container {
        height: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        .card {
            background-color: $cardS5Border;
            width: 625px;

            padding: 15px;

            .cardText {
                background-color: $lima;

                padding: 40px;

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                gap: 25px;

                h6,
                h4,
                p {
                    color: white;
                }

                h4 {
                    padding: 0 25px 25px 25px;
                    border-bottom: 1px solid white;
                }

                a {
                    font-size: 18px;

                    padding: 17px 40px;
                    margin: 25px 0;
                }
            }
        }
    }
}
</style>