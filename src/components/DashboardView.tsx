import { Menu, Plus, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'motion/react';
import { MOCK_ACCOUNTS, MOCK_SAVINGS_GOALS, MOCK_BUDGETS, MOCK_UPCOMING_EXPENSES } from '../lib/mockData';

interface DashboardViewProps {
  onOpenMenu: () => void;
}

export default function DashboardView({ onOpenMenu }: DashboardViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-[#1e88e5] text-white p-4 shadow-md sticky top-0 z-10 flex items-center">
        <Button variant="ghost" size="icon" onClick={onOpenMenu} className="text-white hover:bg-white/10">
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold ml-4">My Finances</h1>
      </header>

      <ScrollArea className="h-[calc(100vh-64px)]">
        <div className="p-4 space-y-4">
          {/* Income and Expenses Row */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-none shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Income</CardTitle>
                <div className="text-xl font-bold text-green-600">₹180200.00</div>
                <div className="text-[10px] text-gray-400">Year 2026</div>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Rental</span>
                  <span className="font-medium">₹1000</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Gift</span>
                  <span className="font-medium">₹500</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Dividends</span>
                  <span className="font-medium">₹2000</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2 text-[#1e88e5] border-[#1e88e5] text-[10px] h-7">
                  <Plus className="h-3 w-3 mr-1" /> Add New Income
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Expenses</CardTitle>
                <div className="text-xl font-bold text-red-500">₹69827.00</div>
                <div className="text-[10px] text-gray-400">Year 2026</div>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Rent</span>
                  <span className="font-medium">₹30000</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Transport</span>
                  <span className="font-medium">₹2030</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Food</span>
                  <span className="font-medium">₹2300</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Entertainment</span>
                  <span className="font-medium">₹1548</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Groceries</span>
                  <span className="font-medium">₹6200</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Balance and Savings Row */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-none shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Balance</CardTitle>
                <div className="text-xl font-bold text-gray-900">₹110373.00</div>
                <div className="text-[10px] text-gray-400">Year 2026</div>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-4">
                {MOCK_ACCOUNTS.map(account => (
                  <div key={account.id} className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-gray-600">{account.name}</span>
                      <span className="font-medium">{(account.balance / 400000 * 100).toFixed(0)}%</span>
                    </div>
                    <Progress value={(account.balance / 400000) * 100} className="h-1" indicatorColor="bg-blue-500" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Savings</CardTitle>
                <div className="text-xl font-bold text-[#1e88e5]">₹144500.00</div>
                <div className="text-[10px] text-gray-400">Total Savings</div>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-4">
                {MOCK_SAVINGS_GOALS.map(goal => (
                  <div key={goal.id} className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-gray-600">{goal.name}</span>
                      <span className="font-medium">{(goal.currentAmount / goal.targetAmount * 100).toFixed(0)}%</span>
                    </div>
                    <Progress value={(goal.currentAmount / goal.targetAmount) * 100} className="h-1" indicatorColor="bg-pink-500" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Spending Budget */}
          <Card className="border-none shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-900">Spending Budget</CardTitle>
              <Button variant="link" className="text-[#1e88e5] text-xs h-auto p-0">View All</Button>
            </CardHeader>
            <CardContent className="p-4 pt-0 grid grid-cols-2 gap-x-6 gap-y-4">
              {MOCK_BUDGETS.slice(0, 6).map(budget => (
                <div key={budget.id} className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-600">{budget.category}</span>
                    <span className="font-medium">₹{budget.spent}/₹{budget.limit}</span>
                  </div>
                  <Progress value={(budget.spent / budget.limit) * 100} className="h-1.5" indicatorColor={budget.spent > budget.limit * 0.8 ? 'bg-orange-500' : 'bg-blue-500'} />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Expenses */}
          <Card className="border-none shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-900">Upcoming Expenses</CardTitle>
              <Button variant="link" className="text-[#1e88e5] text-xs h-auto p-0">View All</Button>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
              {MOCK_UPCOMING_EXPENSES.map(expense => (
                <div key={expense.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-900">{expense.name}</div>
                      <div className="text-[10px] text-gray-400">{expense.category} • Apr 05, 2026</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-red-500">₹{expense.amount.toFixed(2)}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Transfers */}
          <Card className="border-none shadow-sm">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-gray-900">Transfers</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">HDFC Savings</span>
                  <ChevronRight className="h-3 w-3 text-gray-400" />
                  <span className="text-gray-600">Cash Wallet</span>
                </div>
                <span className="font-bold text-blue-600">₹5000.00</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">PayPal</span>
                  <ChevronRight className="h-3 w-3 text-gray-400" />
                  <span className="text-gray-600">HDFC Savings</span>
                </div>
                <span className="font-bold text-blue-600">₹8750.00</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">HDFC Savings</span>
                  <ChevronRight className="h-3 w-3 text-gray-400" />
                  <span className="text-gray-600">FD / Investment</span>
                </div>
                <span className="font-bold text-blue-600">₹10000.00</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>

      <Button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#1e88e5] hover:bg-[#1976d2] shadow-lg flex items-center justify-center">
        <Plus className="h-8 w-8 text-white" />
      </Button>
    </div>
  );
}
