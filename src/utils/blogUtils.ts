import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  tags: string[] | null;
  author: string | null;
  published: boolean | null;
  read_time: string | null;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResponse {
  data: BlogPost[];
  count: number;
  hasMore: boolean;
}

export const fetchPublishedPosts = async (
  page: number = 1, 
  pageSize: number = 9
): Promise<PaginatedResponse> => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact' })
    .eq('published', true)
    .order('created_at', { ascending: false })
    .range(from, to);
  
  if (error) {
    console.error('Error fetching posts:', error);
    return { data: [], count: 0, hasMore: false };
  }
  
  const totalCount = count || 0;
  const hasMore = to < totalCount - 1;
  
  return { 
    data: data || [], 
    count: totalCount, 
    hasMore 
  };
};

export const fetchAllPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
  
  return data || [];
};

export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();
  
  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }
  
  return data;
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
