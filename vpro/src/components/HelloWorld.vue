<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="hello">
        <h1>{{ msg }}</h1>
        <!--{{1+1}}-->
        <h1>{{title}}</h1>
        <!--{{items}}-->
        <h2>dfg</h2>
        <ul>
            <!--<li v-for="item in items"></li>-->
            <li v-for="item in items" v-bind:class="{ 'removed':item.checked }">
                {{item.fruits}}
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="item.checked">
                    </label>
                </div>

            </li>

        </ul>
        <hr/>
        <input type="radio" v-model="myBox" value="Gigson">
        <input type="radio" v-model="myBox" value=Fender>
        <input type="radio" v-model="myBox" value="Ovation">
        {{myBox}}

        <a v-if="isPartA">isPartA</a>
        <a v-else>no data</a>
        <button v-on:click="newItem">add</button>
        <button v-on:click="toggle">gg</button>
        <div class="footer">
            <hr/>
            <em>Change the title of your shopping list here</em>
            <input v-model.trim="title"/>
            <!--{{title}}-->
        </div>
        <button v-on:click="newItem">NewItem</button>
        <keep-alive>
            <p :is="currentView"></p>
        </keep-alive>

        <ComA @my-event="onComaMyEvent"></ComA>

        <input type="text" v-model="myVal">
        {{valWithoutNum}}

        <hr/>
        <!--<select v-model="selection">-->
            <!--<option v-for="item in selOptions" :value="item.value">{{item.texts}}</option>-->
            <!--<option value=""></option>-->
        <!--</select>-->
        <vSelect @onSelect="" :list="selOptions">
        </vSelect>
        {{selection}}
    </div>

</template>

<script>
    import Vue from 'vue';
    import ComA from './a';
    //  var data = {
    //
    //  };
    export default {
        components:{
            ComA
        },
        name: 'HelloWorld',
        data () {
            return {
                currentView:'com-a',
                myVal:'',
                selOptions:[
                    {texts:'apple'},
                    {texts:'orange'}
                ],
                selection:null,
                myBox:[],
//                msg: 'Welcome to Your Vue.js App',
                items: [
                    {fruits: 'Bananas', checked: false},
                    {fruits: 'Apple', checked: true},
                    {fruits: 'Blueberry', checked: true}
                ],
//                items:['banana','apple','orange'],
                title: 'My Shopping List',
//                newItem:''
                isPartA:true,
            }
        },
        computed:{
            valWithoutNum(){
                return this.myVal.replace(/\d/g,'')
            }
        },
        methods:{
            newItem (){
                this.items.push({
                    fruits:'orange',
                    checked:true
                })
                Vue.set(this.items,0, {
                    fruits: 'coconut',
                    checked: false
                })
            },
            toggle(){
                this.isPartA = !this.isPartA;
            },
            onComaMyEvent(paramA){
                console.log('onComaMyEvent'+paramA);
            }
        }
    }
    //
    //var data = {
    //  items: [{ text: 'Bananas', checked: true },
    //    { text: 'Apples', checked: false }],
    //  title: 'My Shopping List',
    //  newItem: ''
    //};
    //
    //new Vue({
    //  el: 'hello',
    //  data: data
    //});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
