export function actionFunction(routes) {
  return async (...args) =>
    routes()
      .then((mod) => mod?.action)
      .then((res) => (res === undefined ? null : res?.(...args)));
}
