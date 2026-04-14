/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LoginView from './components/LoginView';
import DashboardView from './components/DashboardView';
import TransactionsView from './components/TransactionsView';
import AnalyticsView from './components/AnalyticsView';
import ProfileView from './components/ProfileView';
import SideMenu from './components/SideMenu';
import { AnimatePresence, motion } from 'motion/react';

type View = 'login' | 'dashboard' | 'transactions' | 'analytics' | 'profile';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('login');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setCurrentView('dashboard');
  };

  const handleSignOut = () => {
    setUserEmail(null);
    setCurrentView('login');
  };

  const handleNavigate = (viewId: string) => {
    if (viewId === 'analytics') setCurrentView('analytics');
    if (viewId === 'dashboard') setCurrentView('dashboard');
    if (viewId === 'expenses' || viewId === 'income') setCurrentView('transactions');
    if (viewId === 'settings') setCurrentView('profile');
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-gray-50 relative overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        {currentView === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full"
          >
            <LoginView onLogin={handleLogin} />
          </motion.div>
        )}

        {currentView === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full"
          >
            <DashboardView onOpenMenu={() => setIsMenuOpen(true)} />
          </motion.div>
        )}

        {currentView === 'transactions' && (
          <motion.div
            key="transactions"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full"
          >
            <TransactionsView onBack={() => setCurrentView('dashboard')} />
          </motion.div>
        )}

        {currentView === 'analytics' && (
          <motion.div
            key="analytics"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="h-full"
          >
            <AnalyticsView onBack={() => setCurrentView('dashboard')} />
          </motion.div>
        )}

        {currentView === 'profile' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="h-full"
          >
            <ProfileView 
              email={userEmail || 'user@example.com'} 
              onBack={() => setCurrentView('dashboard')} 
              onSignOut={handleSignOut}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={handleNavigate}
      />
    </div>
  );
}

