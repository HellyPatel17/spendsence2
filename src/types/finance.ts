export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  category: string;
  amount: number;
  description: string;
  date: string; // ISO string
  accountId: string;
}

export interface Account {
  id: string;
  userId: string;
  name: string;
  balance: number;
  type: 'savings' | 'investment' | 'cash';
  color?: string;
}

export interface SavingsGoal {
  id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string;
  color?: string;
}

export interface Budget {
  id: string;
  userId: string;
  category: string;
  limit: number;
  spent: number;
  period: 'monthly';
}

export interface UpcomingExpense {
  id: string;
  userId: string;
  name: string;
  amount: number;
  date: string;
  category: string;
}
