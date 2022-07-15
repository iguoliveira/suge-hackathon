<template>
    <div>
        <div><a className="link-name">{{ linkName }}</a></div>
    </div>
</template>

<script>
export default{
    name: 'navbarLinks',
    props: {
        linkName: String,
    }
}
</script>

<style scoped>
.link-name{
    cursor: pointer;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
}

.link-name:hover{
    color: rgb(58, 58, 58);
    transition: 200ms;
}
</style>