import '@testing-library/jest-dom';

// Simple localStorage mock for Node environment
class LocalStorageMock {
  store = {} as Record<string, string>;
  clear() { this.store = {}; }
  getItem(key: string) { return this.store[key] || null; }
  setItem(key: string, value: string) { this.store[key] = value.toString(); }
  removeItem(key: string) { delete this.store[key]; }
}

globalThis.localStorage = new LocalStorageMock() as any;




