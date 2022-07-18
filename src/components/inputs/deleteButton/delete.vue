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
    border: 0;
    background-color: #ad0707;
    color: white;
    cursor: pointer;
    padding: 2px 10px;
    font-size: 1.1em;
}
button:hover{
    background-color: #8d0606;
}
</style>