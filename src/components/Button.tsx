import { cn } from '@/lib/utils';
import { Toast } from '@base-ui-components/react';
import React, { useState } from 'react';

type ButtonProps = {
	children: React.ReactNode;
  className: string;
  userEmail: string;
};

const Button: React.FC<ButtonProps> = ({
	children,
	className,
  userEmail
}) => {
  const toastManager = Toast.useToastManager();
  const [count, setCount] = useState(0);
  
  const createToast = () => {
    setCount(prev => prev + 1);
		toastManager.add({
			title: `Email sent successfully`,
			description: `An email was sent to ${userEmail}`,
		});
  }
	return (
		<button
			type='submit'
      className={className}
      onClick={createToast}
		>
			{children}
		</button>
	);
};

export default Button;
