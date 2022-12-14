export function loaderFunction(routes) {
  return async (...args) =>
    routes()
      .then((mod) => mod?.loader)
      .then((res) => (res === undefined ? null : res?.(...args)));
}
