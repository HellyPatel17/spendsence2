import { ArrowLeft, Search, Utensils, Home, Car, Film, Music, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MOCK_TRANSACTIONS } from '../lib/mockData';
import { motion } from 'motion/react';

interface TransactionsViewProps {
  onBack: () => void;
}

const CATEGORY_ICONS: Record<string, any> = {
  'Food': Utensils,
  'Rent': Home,
  'Transport': Car,
  'Entertainment': Film,
  'Salary': CreditCard,
  'Music': Music,
};

export default function TransactionsView({ onBack }: TransactionsViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-[#1e88e5] text-white p-4 shadow-md flex items-center">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold ml-4">Transactions</h1>
      </header>

      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search transactions..." className="pl-10 h-10 border-none shadow-sm bg-white" />
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
            <Button size="sm" className="bg-[#1e88e5] text-white rounded-full px-4 h-8 text-xs">All</Button>
            <Button size="sm" variant="outline" className="rounded-full px-4 h-8 text-xs border-gray-200 bg-white">Income</Button>
            <Button size="sm" variant="outline" className="rounded-full px-4 h-8 text-xs border-gray-200 bg-white">Expense</Button>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" className="bg-[#1e88e5] text-white rounded-full px-4 h-8 text-xs">All Time</Button>
            <Button size="sm" variant="outline" className="rounded-full px-4 h-8 text-xs border-gray-200 bg-white">This Month</Button>
            <Button size="sm" variant="outline" className="rounded-full px-4 h-8 text-xs border-gray-200 bg-white">This Year</Button>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 px-4">
        <div className="space-y-3 pb-6">
          {MOCK_TRANSACTIONS.map((tx, index) => {
            const Icon = CATEGORY_ICONS[tx.category] || CreditCard;
            return (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{tx.category}</div>
                    <div className="text-xs text-gray-500">{tx.description}</div>
                    <div className="text-[10px] text-gray-400">Apr 12, 2026</div>
                  </div>
                </div>
                <div className={`text-sm font-bold ${tx.type === 'income' ? 'text-green-600' : 'text-red-500'}`}>
                  {tx.type === 'income' ? '+' : '-'}₹{tx.amount.toFixed(2)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
