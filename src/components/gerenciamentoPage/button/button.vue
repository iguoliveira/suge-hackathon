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
    width: 100%;
    background-color: #4998ff;
    color: rgb(0, 0, 0);
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
   
    cursor: pointer;
}
button:hover{
     background-color: #ffffff;
}
</style>