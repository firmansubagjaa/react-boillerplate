import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/axios';
import { AxiosError } from 'axios';

// Types
interface User {
    id: number;
    name: string;
    email: string;
    username: string;
}

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface CreatePostData {
    title: string;
    body: string;
    userId: number;
}

// API functions
const fetchUsers = async (): Promise<User[]> => {
    const { data } = await api.get('https://jsonplaceholder.typicode.com/users');
    return data;
};

const fetchUser = async (id: number): Promise<User> => {
    const { data } = await api.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data;
};

const fetchPosts = async (): Promise<Post[]> => {
    const { data } = await api.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const createPost = async (postData: CreatePostData): Promise<Post> => {
    const { data } = await api.post('https://jsonplaceholder.typicode.com/posts', postData);
    return data;
};

// Hooks
export const useUsers = () => {
    return useQuery<User[], AxiosError>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });
};

export const useUser = (id: number) => {
    return useQuery<User, AxiosError>({
        queryKey: ['user', id],
        queryFn: () => fetchUser(id),
        enabled: !!id, // Only run query if id exists
    });
};

export const usePosts = () => {
    return useQuery<Post[], AxiosError>({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });
};

export const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation<Post, AxiosError, CreatePostData>({
        mutationFn: createPost,
        onSuccess: (newPost) => {
            // Invalidate and refetch posts query after creating a new post
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            console.log('Post created successfully:', newPost);
        },
        onError: (error) => {
            console.error('Error creating post:', error.message);
        },
    });
};
