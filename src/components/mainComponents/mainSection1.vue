<template>
    <section class="s1" ref="myDiv">
        <h6>moving without the hassle</h6>
        <h3>we make it simple</h3>
        <h6>professional service with quality and costumer satisfaction</h6>
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

.s1 {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 35px;

    h3 {
        color: $title;
        font-size: 64px;
        text-transform: uppercase;
    }

    opacity: 0;
    transform: translateY(-30px);
    transition: opacity 0.5s ease-out,
    transform 0.5s ease-out;

}
</style>