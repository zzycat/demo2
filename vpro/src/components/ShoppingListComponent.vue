<template>
    <div>
        <h2>{{title}}</h2>
        <add-item-component></add-item-component>
        <items-component :items="items"></items-component>
        <div class="footer">
            <hr/>
            <em>Change the title</em>
            <input type="text" v-model="title">
            <change-title-component></change-title-component>
        </div>
    </div>
</template>

<script>
    import AddItemComponent from './AddItemComponent'
    import ItemsComponent from './ItemsComponent'
    import ChangeTitleComponent from './ChangeTitleComponent'

    export default{
        components:{
            AddItemComponent,
            ItemsComponent,
            ChangeTitleComponent
        },
        props:['title','items']
    }
</script>
<style scoped>
    .footer{
        font-size: 0.7em;
        margin-top:20vh;
    }
</style>