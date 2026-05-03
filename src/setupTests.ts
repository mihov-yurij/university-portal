import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Заглушка для IntersectionObserver (нужна для Framer Motion)
class IntersectionObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

