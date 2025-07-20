import { cn } from '@/lib/utils';
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Send,
	Twitter,
} from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

type ContactProps = {};

const Contact: React.FC<ContactProps> = props => {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.FormEvent): void => {
		e.preventDefault();
		console.log('sending email...');

		if (form.current) {
			emailjs
				.sendForm(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_TEMPLATE_ID}`,
					form.current,
					{
						publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
					}
				)
				.then(
					response => {
						console.log(
							'Email sent successfully!',
							response.status,
							response.text
						);
					},
					error => {
						console.log('Failed to send email:', error.text);
					}
				);
		}
	};

	return (
		<section
			id='contact'
			className='py-24 px-4 relative'
		>
			<div className='container mx-auto max-w-5xl'>
				<h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
					Get In <span className='text-primary'>Touch</span>
				</h2>

				<p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
					Have a question, want to collaborate, or just want
					to say hello? Feel free to reach out! I'm always
					open to discussing new projects, creative ideas,
					or opportunities to be part of your vision.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					<div className='space-y-8'>
						<h3 className='text-2xl font-semibold mb-6'>
							Contact Information
						</h3>

						<div className='space-y-6 justify-center'>
							<div className='flex items-center space-x-4'>
								<div className='p-3 rounded-full bg-primary/30'>
									<Mail className='h-6 w-6 text-primary' />
								</div>
								<div className='text-left'>
									<h4 className='font-medium'>Email:</h4>
									<a
										href='mailto:ubahchuks91@gmail.com'
										className='text-muted-foreground hover:text-primary transition-colors'
									>
										ubahchuks91@gmail.com
									</a>
								</div>
							</div>
							<div className='flex items-center space-x-4'>
								<div className='p-3 rounded-full bg-primary/30'>
									<Phone className='h-6 w-6 text-primary' />
								</div>
								<div className='text-left'>
									<h4 className='font-medium'>Phone:</h4>
									<a
										href='tel:+2349051776591'
										className='text-muted-foreground hover:text-primary transition-colors'
									>
										+2349051776591
									</a>
								</div>
							</div>
							<div className='flex items-center space-x-4'>
								<div className='p-3 rounded-full bg-primary/30'>
									<MapPin className='h-6 w-6 text-primary' />
								</div>
								<div className='text-left'>
									<h4 className='font-medium'>Location:</h4>
									<a
										href='https://www.google.com/maps/search/?api=1&query=Ebute_Metta+Lagos+Nigeria'
										target='_blank'
										rel='noopener noreferrer'
										className='text-muted-foreground hover:text-primary transition-colors'
									>
										Lagos, Nigeria
									</a>
								</div>
							</div>
						</div>

						<div className='pt-6'>
							<h4 className='font-medium mb-4'>
								Connect With Me
							</h4>
							<div className='flex space-x-4 justify-center'>
								<a
									href='https://x.com/Dhar_nnie'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Twitter />
								</a>
								<a
									href='https://www.instagram.com/dharnnie'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Instagram />
								</a>
								<a
									href='https://www.facebook.com/dharnnie'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Facebook />
								</a>
							</div>
						</div>
					</div>

					<div className='glass p-8 rounded-lg shadow-xs'>
						<h3 className='text-2xl font-semibold mb-6'>
							Send A Message
						</h3>

						<form
							className='space-y-6'
							ref={form}
							onSubmit={sendEmail}
						>
							<div>
								<input
									type='text'
									name='name'
									id='name'
									required
									className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary'
									placeholder='Your Name...'
								/>
							</div>
							<div>
								<input
									type='email'
									name='email'
									id='email'
									required
									className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary'
									placeholder='Email...'
								/>
							</div>
							<div>
								<textarea
									name='message'
									id='message'
									required
									className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary resize-none'
									placeholder='Your Message...'
								/>
							</div>

							<button
								type='submit'
								className={cn(
									'cosmic-button w-full flex items-center justify-center gap-2'
								)}
							>
								Send Message
								<Send size={16} />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
