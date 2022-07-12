<template>
<div>
    <label>{{label}}</label>
    <input :placeholder="inputName" />
</div>
</template>

<script>
export default{
    name: 'inputData',
    props: {
        inputName: String,
        label: String,
    },
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
}
input{
    border: 0;
    border-bottom: 1px solid black;
    background-color: transparent;
}
input:selector{
    
}
</style>