// ===== Simple SPA Router =====

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.params = {};
    window.addEventListener('popstate', () => this.resolve());
  }

  on(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  navigate(path) {
    window.history.pushState({}, '', '#' + path);
    this.resolve();
  }

  resolve() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, query] = hash.split('?');
    this.params = {};
    if (query) {
      query.split('&').forEach(p => {
        const [k, v] = p.split('=');
        this.params[k] = decodeURIComponent(v);
      });
    }

    // Match routes
    for (const route in this.routes) {
      const paramNames = [];
      const regexStr = route.replace(/:(\w+)/g, (_, name) => {
        paramNames.push(name);
        return '([^/]+)';
      });
      const match = path.match(new RegExp('^' + regexStr + '$'));
      if (match) {
        paramNames.forEach((name, i) => {
          this.params[name] = match[i + 1];
        });
        this.currentRoute = route;
        this.routes[route](this.params);
        return;
      }
    }

    // Default to home
    if (this.routes['/']) {
      this.currentRoute = '/';
      this.routes['/'](this.params);
    }
  }
}

export const router = new Router();
