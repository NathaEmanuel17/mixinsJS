<template>
    <div>
        <h3>{{ titulo }}</h3>
        <input type="text" placeholder="Nome do Filme" v-model="item">
        <button type="button" @click="adicionarItem">Adicionar</button>
        <br>
        <ul>
            <li v-for="(item, index) in itens" :key="index">{{  item }}</li>
        </ul>
        <button type="button" @click="removerItem">Remover</button>
    </div>
</template>

<script>
import ListaMixin from '@/mixins/ListaMixin';
import RemoverItemListaMixin from '@/mixins/RemoverItemListaMixin';

export default {
    name: 'ListaFilmes',
    mixins: [ListaMixin, RemoverItemListaMixin],
    created() {
        console.log('Lista filmes criado')
    },
    data: () => ({
        titulo: 'Lista Filmes'
    })
}
</script>