<template>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div>
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

  
input {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}


input:focus {
  width: 80vh;
}
</style>
