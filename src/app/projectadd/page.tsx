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
import { useState, useCallback, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Loader2, ExternalLink, Image as ImageIcon, Code, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }).max(100, {
    message: 'Title must be less than 100 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }).max(500, {
    message: 'Description must be less than 500 characters.',
  }),
  image: z.string().url({
    message: 'Please enter a valid image URL.',
  }),
  liveLink: z.string().url({
    message: 'Please enter a valid live demo URL.',
  }),
  tags: z.array(z.string()).min(1, {
    message: 'Please add at least one tag.',
  }).max(10, {
    message: 'Maximum 10 tags allowed.',
  }),
  dataAiHint: z.string().min(2, {
    message: 'AI hint must be at least 2 characters.',
  }).max(50, {
    message: 'AI hint must be less than 50 characters.',
  }),
});

type FormData = z.infer<typeof formSchema>;

const suggestedTags = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express',
  'MongoDB', 'Firebase', 'Tailwind CSS', 'API', 'Full Stack', 'Frontend',
  'Backend', 'Mobile', 'Web App', 'E-commerce', 'Dashboard', 'Portfolio',
  'Blog', 'Social Media', 'Authentication', 'Database', 'Real-time',
  'Responsive', 'PWA', 'GraphQL', 'REST API', 'Microservices'
];

const aiHintSuggestions = [
  'social network', 'e-commerce store', 'dashboard', 'blog platform',
  'portfolio site', 'chat application', 'task manager', 'weather app',
  'music player', 'photo gallery', 'code editor', 'game', 'calculator',
  'todo app', 'booking system', 'learning platform', 'news aggregator'
];

export default function ProjectAddPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTag, setCurrentTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isImageLoading, setIsImageLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      liveLink: '',
      tags: [],
      dataAiHint: '',
    },
    mode: 'onChange',
  });

  const watchedImage = form.watch('image');

  // Debounced image preview
  const handleImagePreview = useCallback(async (url: string) => {
    if (!url || !url.startsWith('http')) {
      setImagePreview('');
      return;
    }

    setIsImageLoading(true);
    try {
      const img = new Image();
      img.onload = () => {
        setImagePreview(url);
        setIsImageLoading(false);
      };
      img.onerror = () => {
        setImagePreview('');
        setIsImageLoading(false);
      };
      img.src = url;
    } catch {
      setImagePreview('');
      setIsImageLoading(false);
    }
  }, []);

  // Update image preview when URL changes
  useState(() => {
    const timeoutId = setTimeout(() => {
      handleImagePreview(watchedImage);
    }, 500);
    return () => clearTimeout(timeoutId);
  });

  const addTag = useCallback((tagToAdd?: string) => {
    const tag = tagToAdd || currentTag.trim();
    if (tag && !tags.includes(tag) && tags.length < 10) {
      const newTags = [...tags, tag];
      setTags(newTags);
      form.setValue('tags', newTags);
      setCurrentTag('');
    }
  }, [currentTag, tags, form]);

  const removeTag = useCallback((tagToRemove: string) => {
    const newTags = tags.filter(tag => tag !== tagToRemove);
    setTags(newTags);
    form.setValue('tags', newTags);
  }, [tags, form]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  }, [addTag]);

  const filteredSuggestedTags = useMemo(() => 
    suggestedTags.filter(tag => !tags.includes(tag)).slice(0, 8),
    [tags]
  );

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: 'Project Added Successfully! 🎉',
        description: 'Your project has been added to the portfolio.',
      });
      
      // Reset form
      form.reset();
      setTags([]);
      setImagePreview('');
      
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error!',
        description: 'There was a problem adding your project. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const formErrors = form.formState.errors;
  const hasErrors = Object.keys(formErrors).length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Add New Project
            </h1>
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Showcase your latest creation to the world. Fill in the details below to add your project to the portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Code className="h-6 w-6 text-primary" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Title and AI Hint Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Project Title</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="My Awesome Project" 
                                {...field} 
                                disabled={isSubmitting}
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02] hover:border-primary/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="dataAiHint"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">AI Hint</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="e.g., social network, code editor" 
                                  {...field} 
                                  disabled={isSubmitting}
                                  className="h-12 text-base transition-all duration-200 focus:scale-[1.02] hover:border-primary/50"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                  <div className="flex gap-1">
                                    {aiHintSuggestions.slice(0, 3).map((hint) => (
                                      <button
                                        key={hint}
                                        type="button"
                                        onClick={() => form.setValue('dataAiHint', hint)}
                                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                      >
                                        {hint.split(' ')[0]}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Description */}
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your project in detail..."
                              className="min-h-[120px] text-base resize-none transition-all duration-200 focus:scale-[1.02] hover:border-primary/50"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <FormMessage />
                            <span>{field.value?.length || 0}/500</span>
                          </div>
                        </FormItem>
                      )}
                    />

                    {/* URLs Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold flex items-center gap-2">
                              <ImageIcon className="h-4 w-4" />
                              Image URL
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="https://example.com/image.jpg" 
                                {...field} 
                                disabled={isSubmitting}
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02] hover:border-primary/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="liveLink"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold flex items-center gap-2">
                              <ExternalLink className="h-4 w-4" />
                              Live Demo URL
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="https://your-project.com" 
                                {...field} 
                                disabled={isSubmitting}
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02] hover:border-primary/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Tags Section */}
                    <FormField
                      control={form.control}
                      name="tags"
                      render={() => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Tags</FormLabel>
                          <div className="space-y-4">
                            <div className="flex gap-2">
                              <Input
                                placeholder="Add a tag..."
                                value={currentTag}
                                onChange={(e) => setCurrentTag(e.target.value)}
                                onKeyPress={handleKeyPress}
                                disabled={isSubmitting || tags.length >= 10}
                                className="flex-1 h-12 text-base transition-all duration-200 focus:scale-[1.02] hover:border-primary/50"
                              />
                              <Button 
                                type="button" 
                                onClick={() => addTag()} 
                                disabled={isSubmitting || !currentTag.trim() || tags.length >= 10} 
                                variant="outline"
                                size="lg"
                                className="px-6"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            {/* Current Tags */}
                            <AnimatePresence>
                              {tags.length > 0 && (
                                <motion.div 
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="flex flex-wrap gap-2"
                                >
                                  {tags.map((tag) => (
                                    <motion.div
                                      key={tag}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.8 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <Badge 
                                        variant="secondary" 
                                        className="flex items-center gap-1 px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer"
                                      >
                                        {tag}
                                        <button
                                          type="button"
                                          onClick={() => removeTag(tag)}
                                          className="ml-1 hover:text-destructive transition-colors"
                                          disabled={isSubmitting}
                                        >
                                          <X className="h-3 w-3" />
                                        </button>
                                      </Badge>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Suggested Tags */}
                            {filteredSuggestedTags.length > 0 && (
                              <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Suggested tags:</p>
                                <div className="flex flex-wrap gap-2">
                                  {filteredSuggestedTags.map((tag) => (
                                    <button
                                      key={tag}
                                      type="button"
                                      onClick={() => addTag(tag)}
                                      disabled={isSubmitting}
                                      className="text-xs px-3 py-1 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                                    >
                                      {tag}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Button 
                        type="submit" 
                        className={cn(
                          "w-full h-14 text-lg font-semibold transition-all duration-300",
                          "hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]",
                          hasErrors && "opacity-50 cursor-not-allowed"
                        )}
                        disabled={isSubmitting || hasErrors} 
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Adding Project...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-5 w-5" />
                            Add Project
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Preview Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-8 shadow-xl border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Image Preview */}
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden border-2 border-dashed border-border">
                  {isImageLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : imagePreview ? (
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Image preview will appear here</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info Preview */}
                <div className="space-y-3">
                  <h3 className="font-bold text-lg">
                    {form.watch('title') || 'Project Title'}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {form.watch('description') || 'Project description will appear here...'}
                  </p>
                  
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {tags.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{tags.length - 4} more
                        </Badge>
                      )}
                    </div>
                  )}

                  {form.watch('liveLink') && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={form.watch('liveLink')} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}