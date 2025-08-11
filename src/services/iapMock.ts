export type Product = { productId: string; title: string; description: string; price: string };

const MOCK_PRODUCT: Product = {
  productId: 'sweetbible_pro',
  title: 'SweetBible Pro',
  description: 'Unlock all sweets and premium content',
  price: '$4.99',
};

export const IAP = {
  initConnection: async () => true,
  getProducts: async (_ids: string[]) => [MOCK_PRODUCT],
  requestPurchase: async (_id: string) => ({ transactionId: 'mock_tx_1' }),
  finishTransaction: async (_purchase: any) => true,
  getAvailablePurchases: async () => [],
  flushFailedPurchasesCachedAsPendingAndroid: async () => {},
  endConnection: async () => {},
};

