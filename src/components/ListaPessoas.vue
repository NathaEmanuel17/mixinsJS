<template>
    <div>
        <h3>{{ titulo }}</h3>
        <input type="text" placeholder="Nome da pessoa" v-model="item">
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
    name: 'ListaPessoas',
    mixins: [ListaMixin, RemoverItemListaMixin],
    data: () => ({
        titulo: 'Lista Pessoas'
    })
}
</script>