import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const pdt = action.payload

      if (state.itens.find((produto) => produto.id === pdt.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(pdt)
      }
    }
  }
})
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
