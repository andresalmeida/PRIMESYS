const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';

export function withBasePath(path) {
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
