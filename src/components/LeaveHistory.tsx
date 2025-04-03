import React from 'react';
import { LeaveRequest } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface LeaveHistoryProps {
  requests: LeaveRequest[];
}

const LeaveHistory: React.FC<LeaveHistoryProps> = ({ requests }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Leave History</h3>
        
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-gray-800 capitalize">{request.type} Leave</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(request.status)}`}>
                  {request.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-3">{request.reason}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{request.startDate} - {request.endDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Requested on {new Date(request.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
          
          {requests.length === 0 && (
            <p className="text-center text-gray-500 py-4">No leave requests found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;