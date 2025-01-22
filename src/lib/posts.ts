import { create } from "zustand";

const usePosts = create((set) => ({
  // State posts
  posts: [],
  setPosts: (posts) => set(() => ({ posts: posts })),
  clearPosts: () => set(() => ({ posts: [] })),
}));

export default usePosts;
