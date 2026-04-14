import { Transaction, Account, SavingsGoal, Budget, UpcomingExpense } from '../types/finance';

export const MOCK_ACCOUNTS: Account[] = [
  { id: '1', userId: 'user1', name: 'HDFC Savings', balance: 110373, type: 'savings', color: '#3b82f6' },
  { id: '2', userId: 'user1', name: 'FD / Investment', balance: 250000, type: 'investment', color: '#10b981' },
  { id: '3', userId: 'user1', name: 'Cash Wallet', balance: 5000, type: 'cash', color: '#f59e0b' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', userId: 'user1', type: 'expense', category: 'Rent', amount: 15000, description: 'April rent', date: '2026-04-12T10:00:00Z', accountId: '1' },
  { id: '2', userId: 'user1', type: 'expense', category: 'Transport', amount: 180, description: 'Auto to office', date: '2026-04-12T08:30:00Z', accountId: '3' },
  { id: '3', userId: 'user1', type: 'expense', category: 'Food', amount: 1200, description: 'Dinner at restaurant', date: '2026-04-11T20:00:00Z', accountId: '1' },
  { id: '4', userId: 'user1', type: 'expense', category: 'Entertainment', amount: 499, description: 'Netflix subscription', date: '2026-04-10T09:00:00Z', accountId: '1' },
  { id: '5', userId: 'user1', type: 'expense', category: 'Entertainment', amount: 999, description: 'Spotify subscription', date: '2026-04-10T09:05:00Z', accountId: '1' },
  { id: '6', userId: 'user1', type: 'income', category: 'Salary', amount: 180200, description: 'Monthly salary', date: '2026-04-01T09:00:00Z', accountId: '1' },
];

export const MOCK_SAVINGS_GOALS: SavingsGoal[] = [
  { id: '1', userId: 'user1', name: 'Wedding Fund', targetAmount: 1200000, currentAmount: 144500, color: '#ec4899' },
  { id: '2', userId: 'user1', name: 'Goa Vacation', targetAmount: 100000, currentAmount: 50000, color: '#06b6d4' },
  { id: '3', userId: 'user1', name: 'New Laptop', targetAmount: 150000, currentAmount: 55500, color: '#8b5cf6' },
];

export const MOCK_BUDGETS: Budget[] = [
  { id: '1', userId: 'user1', category: 'Shopping', limit: 5000, spent: 4500, period: 'monthly' },
  { id: '2', userId: 'user1', category: 'Food', limit: 8000, spent: 2300, period: 'monthly' },
  { id: '3', userId: 'user1', category: 'Transport', limit: 2000, spent: 530, period: 'monthly' },
  { id: '4', userId: 'user1', category: 'Entertainment', limit: 1500, spent: 748, period: 'monthly' },
  { id: '5', userId: 'user1', category: 'Groceries', limit: 6000, spent: 3400, period: 'monthly' },
  { id: '6', userId: 'user1', category: 'Health', limit: 2000, spent: 1350, period: 'monthly' },
];

export const MOCK_UPCOMING_EXPENSES: UpcomingExpense[] = [
  { id: '1', userId: 'user1', name: 'Domain Renewal', amount: 850, date: '2026-04-05T00:00:00Z', category: 'Education' },
  { id: '2', userId: 'user1', name: 'Gym Membership', amount: 1200, date: '2026-04-11T00:00:00Z', category: 'Health' },
  { id: '3', userId: 'user1', name: 'House Rent', amount: 15000, date: '2026-04-15T00:00:00Z', category: 'Rent' },
  { id: '4', userId: 'user1', name: 'Car EMI', amount: 8200, date: '2026-04-18T00:00:00Z', category: 'Transport' },
  { id: '5', userId: 'user1', name: 'Electricity Bill', amount: 1850, date: '2026-04-21T00:00:00Z', category: 'Utilities' },
];
