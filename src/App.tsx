import React, { useState } from 'react';
import { products as initialProducts, stockMovements as initialMovements, Product, StockMovement } from './types';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import StockMovements from './components/StockMovements';
import { Package } from 'lucide-react';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [movements, setMovements] = useState(initialMovements);

  const handleStockUpdate = (productId: string, type: 'inbound' | 'outbound', quantity: number) => {
    // Update product quantity
    setProducts(currentProducts => 
      currentProducts.map(product => {
        if (product.id === productId) {
          const newQuantity = type === 'inbound' 
            ? product.quantity + quantity
            : product.quantity - quantity;
          
          return {
            ...product,
            quantity: Math.max(0, newQuantity),
            lastUpdated: new Date().toISOString()
          };
        }
        return product;
      })
    );

    // Record stock movement
    const newMovement: StockMovement = {
      id: (movements.length + 1).toString(),
      productId,
      type,
      quantity,
      date: new Date().toISOString(),
      reference: `${type === 'inbound' ? 'IN' : 'OUT'}-${Date.now()}`,
      notes: `Manual ${type} adjustment`
    };

    setMovements([newMovement, ...movements]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Stock Management</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard products={products} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductList 
              products={products}
              onStockUpdate={handleStockUpdate}
            />
          </div>
          <div>
            <StockMovements 
              movements={movements}
              products={products}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;