class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
})

Object.defineProperty(window, 'IntersectionObserver', {
  value: MockIntersectionObserver,
  writable: true,
})
