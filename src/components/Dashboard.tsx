import React from 'react';
import { Product } from '../types';
import { Package, AlertTriangle, TrendingDown, DollarSign } from 'lucide-react';

interface DashboardProps {
  products: Product[];
}

const Dashboard: React.FC<DashboardProps> = ({ products }) => {
  const totalProducts = products.length;
  const lowStockProducts = products.filter(p => p.quantity <= p.reorderPoint).length;
  const totalValue = products.reduce((sum, product) => sum + (product.quantity * product.price), 0);
  const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);

  const stats = [
    {
      title: 'Total Products',
      value: totalProducts,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Items',
      value: totalItems,
      icon: Package,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Low Stock Items',
      value: lowStockProducts,
      icon: AlertTriangle,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      title: 'Inventory Value',
      value: `$${totalValue.toFixed(2)}`,
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
          </div>
          <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;