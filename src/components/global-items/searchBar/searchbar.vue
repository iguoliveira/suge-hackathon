<template>
<div>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="inputType" :placeholder="inputName"/>
</div>
    
</template>

<script>
export default{
    name: 'searchBar',
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

input{
    background-color: white;
    font-size: 15px;
    border: 2px solid  #0096E8;
    border-radius: 3px;
    min-width: 150px;
    width: 25vw;
    height: 2vw;
    text-align: center;
}

</style>