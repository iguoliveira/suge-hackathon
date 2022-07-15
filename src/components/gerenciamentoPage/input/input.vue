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

label {
    color:rgb(0, 0, 0);
}
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid rgb(0, 0, 0);
    
    box-sizing: border-box;
  }
  

</style>