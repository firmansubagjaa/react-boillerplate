import { useUsers, usePosts, useCreatePost } from '@/hooks/useApi';
import { useCounterStore } from '@/stores/counterStore';
import { useAuthStore } from '@/stores/authStore';
import { Button } from '@/components/ui/button';
import { TypographyH2, TypographyH3, TypographyP, TypographyMuted } from '@/components/ui/typography';
import { useState } from 'react';
import { Container } from '@/components/ui/container';

export default function Demo() {
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');

    // React Query hooks
    const { data: users, isLoading: usersLoading, error: usersError } = useUsers();
    const { data: posts, isLoading: postsLoading } = usePosts();
    const createPost = useCreatePost();

    // Zustand hooks
    const { count, increment, decrement, reset } = useCounterStore();
    const { user, isAuthenticated, login, logout } = useAuthStore();

    // Handlers
    const handleLogin = () => {
        login(
            { id: '1', name: 'John Doe', email: 'john@example.com' },
            'fake-jwt-token'
        );
    };

    const handleCreatePost = () => {
        if (newPostTitle && newPostBody) {
            createPost.mutate({
                title: newPostTitle,
                body: newPostBody,
                userId: 1,
            });
            setNewPostTitle('');
            setNewPostBody('');
        }
    };

    return (
        <Container size="lg" className="p-8 space-y-8">
            {/* Zustand Counter Demo */}
            <section className="border rounded-lg p-6">
                <TypographyH2>Zustand Counter Store</TypographyH2>
                <div className="mt-4 space-y-4">
                    <TypographyH3>Count: {count}</TypographyH3>
                    <div className="flex gap-2">
                        <Button onClick={increment}>Increment</Button>
                        <Button onClick={decrement} variant="outline">Decrement</Button>
                        <Button onClick={reset} variant="destructive">Reset</Button>
                    </div>
                </div>
            </section>

            {/* Zustand Auth Demo */}
            <section className="border rounded-lg p-6">
                <TypographyH2>Zustand Auth Store</TypographyH2>
                <div className="mt-4 space-y-4">
                    {isAuthenticated ? (
                        <>
                            <TypographyP>Welcome, {user?.name}!</TypographyP>
                            <TypographyMuted>Email: {user?.email}</TypographyMuted>
                            <Button onClick={logout} variant="outline">Logout</Button>
                        </>
                    ) : (
                        <>
                            <TypographyP>You are not logged in.</TypographyP>
                            <Button onClick={handleLogin}>Login</Button>
                        </>
                    )}
                </div>
            </section>

            {/* React Query Users Demo */}
            <section className="border rounded-lg p-6">
                <TypographyH2>React Query - Users</TypographyH2>
                <div className="mt-4">
                    {usersLoading && <TypographyP>Loading users...</TypographyP>}
                    {usersError && <TypographyP className="text-red-500">Error: {usersError.message}</TypographyP>}
                    {users && (
                        <div className="space-y-2">
                            {users.slice(0, 5).map((user) => (
                                <div key={user.id} className="p-3 bg-gray-50 rounded">
                                    <TypographyP className="font-semibold">{user.name}</TypographyP>
                                    <TypographyMuted>{user.email}</TypographyMuted>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* React Query Posts Demo with Mutation */}
            <section className="border rounded-lg p-6">
                <TypographyH2>React Query - Posts & Mutation</TypographyH2>

                {/* Create Post Form */}
                <div className="mt-4 space-y-3 p-4 bg-gray-50 rounded">
                    <TypographyH3>Create New Post</TypographyH3>
                    <input
                        type="text"
                        placeholder="Post Title"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        placeholder="Post Body"
                        value={newPostBody}
                        onChange={(e) => setNewPostBody(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows={3}
                    />
                    <Button
                        onClick={handleCreatePost}
                        disabled={createPost.isPending || !newPostTitle || !newPostBody}
                    >
                        {createPost.isPending ? 'Creating...' : 'Create Post'}
                    </Button>
                    {createPost.isSuccess && (
                        <TypographyP className="text-green-600">Post created successfully!</TypographyP>
                    )}
                </div>

                {/* Posts List */}
                <div className="mt-6">
                    {postsLoading && <TypographyP>Loading posts...</TypographyP>}
                    {posts && (
                        <div className="space-y-2">
                            <TypographyH3>Recent Posts (5)</TypographyH3>
                            {posts.slice(0, 5).map((post) => (
                                <div key={post.id} className="p-3 bg-gray-50 rounded">
                                    <TypographyP className="font-semibold">{post.title}</TypographyP>
                                    <TypographyMuted>{post.body.slice(0, 100)}...</TypographyMuted>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Container>
    );
}
