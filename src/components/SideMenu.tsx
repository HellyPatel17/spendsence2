import { 
  X, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  Wallet, 
  Calendar, 
  ArrowRightLeft, 
  Target, 
  BarChart3, 
  Settings,
  LayoutDashboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
}

export default function SideMenu({ isOpen, onClose, onNavigate }: SideMenuProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'income', label: 'Income', icon: TrendingUp },
    { id: 'expenses', label: 'Expenses', icon: TrendingDown },
    { id: 'spending-budget', label: 'Spending Budget', icon: PieChart },
    { id: 'budget', label: 'Budget', icon: Wallet },
    { id: 'upcoming-expenses', label: 'Upcoming Expenses', icon: Calendar },
    { id: 'transfers', label: 'Transfers', icon: ArrowRightLeft },
    { id: 'accounts', label: 'Accounts', icon: Wallet },
    { id: 'savings-goals', label: 'Savings Goals', icon: Target },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-72 bg-[#1e88e5] text-white h-full flex flex-col shadow-2xl"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">SpendSense</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-blue-100 text-sm">My Finances</p>
        </div>

        <ScrollArea className="flex-1 px-2">
          <div className="space-y-1 py-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-left"
              >
                <item.icon className="h-5 w-5 opacity-80" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </ScrollArea>

        <div className="p-6 bg-blue-700/50">
          <h3 className="text-xs font-bold uppercase tracking-wider opacity-60 mb-4">This Month Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="opacity-80">Income</span>
              <span className="font-bold text-green-400">₹180200.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="opacity-80">Expenses</span>
              <span className="font-bold text-red-400">₹69827.00</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
