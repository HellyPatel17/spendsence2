import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MOCK_BUDGETS } from '../lib/mockData';

interface AnalyticsViewProps {
  onBack: () => void;
}

const COLORS = ['#1e88e5', '#4caf50', '#ff9800', '#e91e63', '#9c27b0', '#00bcd4', '#ffeb3b', '#795548'];

export default function AnalyticsView({ onBack }: AnalyticsViewProps) {
  const data = MOCK_BUDGETS.map((b, i) => ({
    name: b.category,
    value: b.spent,
    color: COLORS[i % COLORS.length]
  }));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-[#1e88e5] text-white p-4 shadow-md flex items-center">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold ml-4">Analytics</h1>
      </header>

      <main className="flex-1 p-6 flex flex-col items-center">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Expenses by Category</h2>
        
        <div className="w-full h-64 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full space-y-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>
              <span className="text-sm font-bold text-gray-900">₹{item.value.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <Button className="w-full mt-10 bg-[#1e88e5] hover:bg-[#1976d2] text-white rounded-lg h-12 font-semibold">
          Export Report as CSV
        </Button>
      </main>
    </div>
  );
}
