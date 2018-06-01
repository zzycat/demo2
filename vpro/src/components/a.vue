<tmplate>
    <div>
        {{hello}}
        <button @click="emitMyEvent">emit</button>
    </div>
</tmplate>
<script>
    export default{
        data(){
            return{
                hello:'I am component a!'
            }
        },
        methods:{
            emitMyEvent(){
                this.$emit('my-event',this.hello)
            }
        }
    }
</script>
<style scoped></style>