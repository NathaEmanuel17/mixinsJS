export default {
    data: () => ({
        itens: [],
        item: '',
        titulo: 'AAAA'
    }),
    methods: {
        adicionarItem() {
            this.itens.push(this.item)
            this.item = ''
        },

    },
    created() {
        console.log('ListaMixin criado')
    }
}
