import React, { ReactNode } from 'react';
import { ArrowLeft, User, ChevronRight, Wallet, Target, Repeat, Lightbulb, Calendar, Settings, LogOut, ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface ProfileViewProps {
  email: string;
  onBack: () => void;
  onSignOut: () => void;
}

export default function ProfileView({ email, onBack, onSignOut }: ProfileViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-[#1e88e5] text-white p-4 shadow-md flex items-center">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold ml-4">Profile</h1>
      </header>

      <div className="p-4 space-y-6">
        {/* Profile Card */}
        <Card className="bg-[#1e88e5] border-none text-white overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center">
            <Avatar className="w-20 h-20 border-4 border-white/20 mb-4">
              <AvatarImage src="" />
              <AvatarFallback className="bg-white/10 text-white">
                <User className="w-10 h-10" />
              </AvatarFallback>
            </Avatar>
            <div className="text-lg font-bold mb-6">{email}</div>
            
            <div className="w-full grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-[10px] opacity-70 uppercase tracking-wider">Balance</div>
                <div className="text-sm font-bold">₹110373</div>
              </div>
              <div>
                <div className="text-[10px] opacity-70 uppercase tracking-wider">Savings</div>
                <div className="text-sm font-bold">₹144500</div>
              </div>
              <div>
                <div className="text-[10px] opacity-70 uppercase tracking-wider">Transactions</div>
                <div className="text-sm font-bold">26</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Tools */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">Financial Tools</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <ToolItem icon={<Wallet className="w-5 h-5 text-blue-500" />} label="Accounts" />
            <Separator className="mx-4 w-auto" />
            <ToolItem icon={<Target className="w-5 h-5 text-pink-500" />} label="Savings Goals" />
            <Separator className="mx-4 w-auto" />
            <ToolItem icon={<ArrowRightLeft className="w-5 h-5 text-green-500" />} label="Transfers" />
            <Separator className="mx-4 w-auto" />
            <ToolItem icon={<Repeat className="w-5 h-5 text-orange-500" />} label="Recurring Transactions" />
          </div>
        </div>

        {/* Reports & Insights */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">Reports & Insights</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <ToolItem icon={<Lightbulb className="w-5 h-5 text-yellow-500" />} label="Insights" />
            <Separator className="mx-4 w-auto" />
            <ToolItem icon={<Calendar className="w-5 h-5 text-purple-500" />} label="Year Summary" />
          </div>
        </div>

        {/* App */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">App</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <ToolItem icon={<Settings className="w-5 h-5 text-gray-500" />} label="Settings" />
            <Separator className="mx-4 w-auto" />
            <button 
              onClick={onSignOut}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <LogOut className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-sm font-medium text-red-500">Sign Out</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-300" />
    </button>
  );
}
