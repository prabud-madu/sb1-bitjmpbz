export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  price: number;
  reorderPoint: number;
  lastUpdated: string;
  description?: string;
}

export interface StockMovement {
  id: string;
  productId: string;
  type: 'inbound' | 'outbound';
  quantity: number;
  date: string;
  reference: string;
  notes?: string;
}

// Mock data
export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Mouse',
    sku: 'WM-001',
    category: 'Electronics',
    quantity: 150,
    price: 29.99,
    reorderPoint: 20,
    lastUpdated: '2024-03-15',
    description: 'High-performance wireless mouse with ergonomic design'
  },
  {
    id: '2',
    name: 'USB-C Cable',
    sku: 'USB-001',
    category: 'Accessories',
    quantity: 300,
    price: 12.99,
    reorderPoint: 50,
    lastUpdated: '2024-03-14',
    description: 'Premium braided USB-C cable, 2m length'
  }
];

export const stockMovements: StockMovement[] = [
  {
    id: '1',
    productId: '1',
    type: 'inbound',
    quantity: 50,
    date: '2024-03-15',
    reference: 'PO-2024-001',
    notes: 'Regular stock replenishment'
  },
  {
    id: '2',
    productId: '2',
    type: 'outbound',
    quantity: 20,
    date: '2024-03-14',
    reference: 'SO-2024-001',
    notes: 'Bulk order for client'
  }
];