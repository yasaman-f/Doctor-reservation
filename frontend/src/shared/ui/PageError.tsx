import type { ReactNode } from 'react';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';

type PageErrorProps = {
  title?: string;
  message: string;
  onRetry?: () => void;
  children?: ReactNode;
};

export function PageError({
  title = 'مشکلی پیش آمد',
  message,
  onRetry,
  children,
}: PageErrorProps) {
  return (
    <div className="space-y-4">
      <Alert variant="error" title={title}>
        {message}
      </Alert>
      {onRetry ? (
        <Button variant="secondary" onClick={onRetry}>
          تلاش دوباره
        </Button>
      ) : null}
      {children}
    </div>
  );
}
