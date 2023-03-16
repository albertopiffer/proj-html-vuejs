<template>
    <section class="s3">
        <div class="container" ref="myDiv">
            <h6>headache free</h6>
            <h4>award winning<br>moving company</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue. Orci varius natoque penatibus et
                magnis dis parturient montes, ridiculus mus. Aliquam enim leo, condimentum facilisis nulla sed, cursus arcu.
                Aliquam enim leo.</p>
            <a href="#" class="button">read our testimonials</a>

        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        const options = {
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(this.$refs.myDiv);
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/palette' as *;

.s3 {
    text-align: center;

    height: 670px;
    background-color: $sectionBg;

    padding: 0 30px;

    .container {
        width: 750px !important;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 40px;

        p {
            line-height: 30px;
        }

        opacity: 0;
        transform: translateX(-30px);
        transition: opacity 0.5s ease-out,
        transform 0.5s ease-out;

    }
}
</style>
