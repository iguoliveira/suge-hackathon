<script>
export default{
    name: 'textLink',
    props: {
        text: String,
    }
}
</script>

<template>
    <div>{{ text }} <a>Click here</a></div>
</template>

<style scoped>
div{
    font-size: 0.8em;
    color: #007BC0;
}

div a{
    cursor: pointer;
}

div a:hover{
    color: rgb(0, 86, 145);
    transition: 200ms;
}
</style>