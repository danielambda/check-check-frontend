export type ReceiptData = {
  items: ReceiptItemData[]
}

export type ReceiptItemData = {
  name: string
  amount: number
  price: number
}
