import { CSSProperties } from 'react';
import toast, { ToastOptions } from 'react-hot-toast';

export const showToast = (message: string, success: boolean) => {
  const toastOptions: ToastOptions = {
    style: {
      padding: '10px',
      color: '#0a0a0a',
      fontSize: '1rem',
      minWidth: '10em',
      letterSpacing: '-0.025em',
      fontWeight: '500',
      backdropFilter: 'blur(10px)',
    } as CSSProperties,
    iconTheme: {
      primary: '#FFF7F1',
      secondary: success ? '#14b8a6' : '#E53E3E',
    },
    duration: 3000,
  };
  toastOptions.style!.backgroundColor = success ? '#14b8a6' : 'rgba(231, 41, 41, 0.8)';
  toastOptions.style!.color = success ? 'rgb(255, 247, 241)' : 'rgb(255, 247, 241)';

  toast[success ? 'success' : 'error'](message, toastOptions);
};
