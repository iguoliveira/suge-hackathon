<script>
export default{
    name: 'deleteButton',
    props: {
        btnName: String
    },
}
</script>

<template>
<div>
    <button>{{btnName}}</button>
</div>
</template>

<style scoped>
button{
    border: 1px solid black;
    background-color: #8d0606;
    color: white;
    cursor: pointer;
    padding: 2px 10px;
    font-size: 1.1em;
    width: 100%;
}
button:hover{
    background-color: #a30a0a;
}
</style>