<template>
<div>
    <label>{{label}}</label>
    <input :type="inputType" :placeholder="inputName" />
</div>
</template>

<script>
export default{
    name: 'inputData',
    props: {
        inputName: String,
        label: String,
        inputType: String,
    },
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
}

label{
    font-size: 1.25em;
    font-weight: bold;
}

input{
    border: 0;
    border-bottom: 1px solid black;
    background-color: transparent;
    min-width: 150px;
    width: 25vw;
    height: 2vw;
}
</style>