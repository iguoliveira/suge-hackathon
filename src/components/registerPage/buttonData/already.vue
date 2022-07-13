<template>
    <div>Already have account? <a>Login here</a></div>
</template>

<script>
export default{
    name: 'isAccountCreated',
}
</script>

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