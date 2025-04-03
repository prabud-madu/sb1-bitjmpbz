import React from 'react';
import { User } from '../types';
import { Calendar, Thermometer, User as UserIcon } from 'lucide-react';

interface LeaveBalanceProps {
  user: User;
}

const LeaveBalance: React.FC<LeaveBalanceProps> = ({ user }) => {
  const leaveTypes = [
    { type: 'Annual', balance: user.leaveBalance.annual, icon: Calendar },
    { type: 'Sick', balance: user.leaveBalance.sick, icon: Thermometer },
    { type: 'Personal', balance: user.leaveBalance.personal, icon: UserIcon },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {leaveTypes.map(({ type, balance, icon: Icon }) => (
        <div key={type} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{type} Leave</h3>
            <Icon className="text-blue-500 w-5 h-5" />
          </div>
          <p className="text-3xl font-bold text-blue-600">{balance}</p>
          <p className="text-sm text-gray-500">days remaining</p>
        </div>
      ))}
    </div>
  );
};

export default LeaveBalance;