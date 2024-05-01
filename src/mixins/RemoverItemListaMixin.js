export default {
    methods: {
        removerItem() {
            this.itens.pop()
        }
    },
    created() {
        console.log('Remover item lista mixin criado')
    }
}