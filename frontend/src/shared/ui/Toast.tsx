import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { Alert } from '@/shared/ui/Alert';

type ToastTone = 'info' | 'success' | 'warning' | 'error';

type ToastItem = {
  id: string;
  title?: string;
  message: string;
  tone: ToastTone;
};

type ToastContextValue = {
  pushToast: (toast: Omit<ToastItem, 'id'> & { id?: string }) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

type ToastProviderProps = {
  children: ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const pushToast = useCallback(
    (toast: Omit<ToastItem, 'id'> & { id?: string }) => {
      const id = toast.id ?? crypto.randomUUID();
      setToasts((current) => [...current, { ...toast, id }]);
      window.setTimeout(() => {
        setToasts((current) => current.filter((item) => item.id !== id));
      }, 4200);
    },
    [],
  );

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex flex-col items-stretch gap-2 p-4 sm:items-end sm:p-5">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="toast-item pointer-events-auto w-full max-w-sm shadow-[var(--shadow-md)]"
          >
            <Alert variant={toast.tone} title={toast.title}>
              {toast.message}
            </Alert>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
