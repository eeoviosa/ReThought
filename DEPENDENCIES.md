# Dependencies for ReThought
# Frontend and Backend use the same package manager

## Backend Dependencies

### Production
- **express**: Web server framework
- **mongoose**: MongoDB object modeling
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing
- **@upstash/ratelimit**: Rate limiting service
- **@upstash/redis**: Redis client for Upstash

### Development
- **nodemon**: Auto-reload development server

## Frontend Dependencies

### Production
- **react**: UI library
- **react-router**: Client-side routing
- **axios**: HTTP client
- **react-hot-toast**: Toast notifications
- **tailwindcss**: Utility-first CSS
- **daisyui**: Tailwind component library
- **lucide-react**: Icon library

### Development
- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: React support for Vite
- **@tailwindcss/vite**: Tailwind CSS plugin for Vite
- **eslint**: Code linting
- **eslint-plugin-react**: React linting rules
- **eslint-plugin-react-hooks**: React Hooks linting

## Root Dependencies

- **concurrently**: Run multiple commands concurrently

## Updating Dependencies

To update all dependencies:
```bash
npm update
```

To check for outdated packages:
```bash
npm outdated
```

To install a specific version:
```bash
npm install package@version
```

## Security

We use Dependabot to automatically check for security vulnerabilities. See [SECURITY.md](SECURITY.md) for more information.
