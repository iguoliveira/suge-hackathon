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
    background-color: #5217d1;
    color: white;
    cursor: pointer;
    padding: 5px 10px;
}
button:hover{
    background-color: #5924c9;
}
</style>