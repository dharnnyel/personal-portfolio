import { Toast } from '@base-ui-components/react';
import React from 'react';

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
  
  const createToast = () => {
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
