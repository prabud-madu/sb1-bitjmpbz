import React from 'react';
import { Product } from '../types';
import { Package, AlertTriangle } from 'lucide-react';

interface ProductListProps {
  products: Product[];
  onStockUpdate: (productId: string, type: 'inbound' | 'outbound', quantity: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onStockUpdate }) => {
  const handleStockUpdate = (productId: string, type: 'inbound' | 'outbound') => {
    const quantity = parseInt(prompt(`Enter quantity to ${type}:`) || '0', 10);
    if (quantity > 0) {
      onStockUpdate(productId, type, quantity);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Inventory</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Package className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sku}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900">{product.quantity}</span>
                      {product.quantity <= product.reorderPoint && (
                        <AlertTriangle className="h-4 w-4 text-amber-500 ml-2" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleStockUpdate(product.id, 'inbound')}
                      className="text-green-600 hover:text-green-900"
                    >
                      Add Stock
                    </button>
                    <button
                      onClick={() => handleStockUpdate(product.id, 'outbound')}
                      className="text-red-600 hover:text-red-900"
                    >
                      Remove Stock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;