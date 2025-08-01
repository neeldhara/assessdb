// Global type declarations for window extensions

interface LoginModal {
  isLoggedIn(): boolean;
  show(): void;
  hide(): void;
}

interface BookmarkManager {
  isBookmarked(problemId: string): boolean;
  toggleBookmark(problemId: string, problemTitle: string): Promise<boolean>;
}

declare global {
  interface Window {
    loginModal: LoginModal;
    bookmarkManager: BookmarkManager;
    userbase: any; // Mock Userbase object
  }
}

export {};
