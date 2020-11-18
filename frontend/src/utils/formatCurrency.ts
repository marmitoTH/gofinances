function formatCurrency(currency: number) {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(currency)
}

export default formatCurrency
