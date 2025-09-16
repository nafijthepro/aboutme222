
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/actions';
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await submitContactForm(values);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem sending your message. Please try again.',
      });
    }
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-4xl font-black text-center text-foreground tracking-tighter mb-12 animate-fade-in-up hover:text-primary transition-colors duration-500 cursor-pointer">
          Contact ME
        </h2>
        <div className="animate-fade-in-up hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-500 rounded-lg p-6" style={{ animationDelay: '150ms' }}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} disabled={isSubmitting} className="transition-all duration-300 focus:scale-[1.02] hover:border-primary/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} disabled={isSubmitting} className="transition-all duration-300 focus:scale-[1.02] hover:border-primary/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me how I can help you."
                        className="min-h-[150px] transition-all duration-300 focus:scale-[1.02] hover:border-primary/50"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300" disabled={isSubmitting} size="lg">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <a href="mailto:nafijthepro@gmail.com" className="inline-flex items-center text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/20 rounded-lg p-2">
            <Mail className="h-5 w-5 mr-2" />
            nafijthepro@gmail.com
          </a>
          <a href="tel:01944955128" className="inline-flex items-center text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/20 rounded-lg p-2">
            <Phone className="h-5 w-5 mr-2" />
            01944955128
          </a>
        </div>
      </div>
    </section>
  );
}
