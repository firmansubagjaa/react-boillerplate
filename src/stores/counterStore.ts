import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Define the state interface
interface CounterState {
    count: number;
    // Actions
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setCount: (count: number) => void;
}

// Create a simple counter store
export const useCounterStore = create<CounterState>()(
    devtools(
        (set) => ({
            // Initial state
            count: 0,

            // Actions
            increment: () =>
                set((state) => ({ count: state.count + 1 }), false, 'counter/increment'),

            decrement: () =>
                set((state) => ({ count: state.count - 1 }), false, 'counter/decrement'),

            reset: () => set({ count: 0 }, false, 'counter/reset'),

            setCount: (count) => set({ count }, false, 'counter/setCount'),
        }),
        { name: 'CounterStore' }
    )
);
