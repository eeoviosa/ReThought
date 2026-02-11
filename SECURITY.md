# Security Policy

## Reporting Security Vulnerabilities

**Do not** open a public issue if you discover a security vulnerability. Instead:

1. Email security details to the repository maintainers
2. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

3. Allow time for a response and potential patch before public disclosure

## Supported Versions

| Version | Status |
|---------|--------|
| 1.x     | Current |

## Security Best Practices

When using ReThought in production:

1. **Environment Variables**: Keep `.env` files secure and never commit them
2. **MongoDB**: Use strong passwords and enable authentication
3. **Redis**: Use Upstash's secure endpoints and tokens
4. **CORS**: Configure CORS appropriately for your deployment
5. **Rate Limiting**: Keep rate limiting enabled to prevent abuse
6. **Updates**: Regularly update dependencies using `npm update`
7. **Dependencies**: Review dependency changes in pull requests

## Dependency Management

We use Dependabot to automatically check for security updates. You can see:
- [Security alerts](https://github.com/eeoviosa/ReThought/security)
- [Dependabot updates](https://github.com/eeoviosa/ReThought/dependabot)

## Known Issues

Check the [Issues](https://github.com/eeoviosa/ReThought/issues) page for any documented security concerns.
