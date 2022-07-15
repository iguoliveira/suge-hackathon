<template>
<div>
    <button>{{btnName}}</button>
</div>
</template>

<script>
export default{
    name: 'buttonData',
    props: {
        btnName: String
    },
}
</script>

<style scoped>
button{
    border: 0;
    background-color: #007BC0;
    color: white;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 1.1em;
}
button:hover{
    background-color: rgb(0, 86, 145);
}
</style>