import React from 'react';
import { StockMovement, Product } from '../types';
import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

interface StockMovementsProps {
  movements: StockMovement[];
  products: Product[];
}

const StockMovements: React.FC<StockMovementsProps> = ({ movements, products }) => {
  const getProductName = (productId: string) => {
    return products.find(p => p.id === productId)?.name || 'Unknown Product';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Stock Movements</h2>
        <div className="space-y-4">
          {movements.map((movement) => (
            <div key={movement.id} className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {movement.type === 'inbound' ? (
                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-medium text-gray-800">
                    {getProductName(movement.productId)}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  movement.type === 'inbound' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {movement.type === 'inbound' ? '+' : '-'}{movement.quantity}
                </span>
              </div>
              
              <div className="text-sm text-gray-600 mb-3">
                Reference: {movement.reference}
                {movement.notes && (
                  <p className="mt-1 text-gray-500">{movement.notes}</p>
                )}
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>{new Date(movement.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
          
          {movements.length === 0 && (
            <p className="text-center text-gray-500 py-4">No stock movements recorded</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockMovements;