<template>
    <li><a href="#"><i class="fa fa-window-maximize fa-lg"></i>{{title}}<i class="fa fa-chevron-down fa-lg fr_tsc listToggle"></i></a></li>
</template>
<script>
    export default{
        props:{
            title:{
                type: String,
                required: true
            }

        }
    }
</script>