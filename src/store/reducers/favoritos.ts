import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const pdt = action.payload

      if (state.itens.find((produto) => produto.id === pdt.id)) {
        const indice = state.itens.indexOf(pdt)
        state.itens.splice(indice, 1)
      } else {
        state.itens.push(pdt)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
