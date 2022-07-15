<template>
<div>
    <label>{{label}}</label>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="inputType" :placeholder="inputName"/>
</div>
    
</template>

<script>
export default{
    name: 'inputData',
    props: {
        inputName: String,            
        label: String,
        inputType: String,
        modelValue: String,
    },
    emits: ['update:modelValue']
    
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 3px;
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