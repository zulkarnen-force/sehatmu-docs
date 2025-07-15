# Environment Configuration Guide

This documentation site supports multiple environments (Production and Development/Staging) with different configurations and URLs.

## Available Environments

### Production Environment

- **URL**: https://sehat.muhammadiyah.or.id/docs/
- **Console URL**: https://sehat.muhammadiyah.or.id/console
- **API Base URL**: https://api.sehat.muhammadiyah.or.id
- **Config File**: `docusaurus.config.prod.js`

### Development/Staging Environment

- **URL**: https://staging.sehat.muhammadiyah.or.id/
- **Console URL**: https://staging.sehat.muhammadiyah.or.id
- **API Base URL**: https://staging-api.sehat.muhammadiyah.or.id
- **Config File**: `docusaurus.config.dev.js`

## Quick Start Commands

### Development

```bash
# Start development server for production config
npm run start:prod

# Start development server for staging config
npm run start:dev

# Default start (uses original config)
npm start
```

### Building

```bash
# Build for production
npm run build:prod

# Build for staging/development
npm run build:dev

# Default build (uses original config)
npm run build
```

### Full Build and Deploy

```bash
# Production: Build and optionally deploy
./production.bash

# Development/Staging: Build and optionally deploy
./development.bash
```

## Configuration Differences

| Feature          | Production                     | Development/Staging              |
| ---------------- | ------------------------------ | -------------------------------- |
| URL              | sehat.muhammadiyah.or.id       | staging.sehat.muhammadiyah.or.id |
| Base Path        | /docs/                         | /                                |
| Console Link     | Production Console             | Staging Console                  |
| Announcement Bar | Production indicator           | Staging warning                  |
| Navbar Badge     | Green "Production"             | Yellow "Staging"                 |
| API Specs        | Stable only                    | Stable + Candidate               |
| Error Handling   | Strict (throw on broken links) | Lenient (warn only)              |

## Environment Variables

The build scripts automatically set these environment variables:

### Production

```bash
NODE_ENV=production
DOCUSAURUS_CONFIG=docusaurus.config.prod.js
```

### Development

```bash
NODE_ENV=development
DOCUSAURUS_CONFIG=docusaurus.config.dev.js
```

## Access URLs in Documentation

The "Pengajuan dan Verifikasi Akses" page automatically displays the correct URLs based on the environment:

- **Production**: Links to `sehat.muhammadiyah.or.id/console`
- **Staging**: Links to `staging.sehat.muhammadiyah.or.id`

## Deployment

### Production Deployment

1. Run `./production.bash`
2. Builds using production config
3. Deploys to production server via rsync

### Staging Deployment

1. Run `./development.bash`
2. Builds using development config
3. Deploys to staging server via rsync

## Troubleshooting

### Build Issues

- Ensure you're using the correct config file
- Check that all environment-specific URLs are accessible
- Verify API spec files exist for the target environment

### Deployment Issues

- Confirm SSH access to target servers
- Verify rsync permissions
- Check server paths match deployment scripts

## Making Environment-Specific Changes

To add environment-specific content:

1. **Use customFields** in config files:

   ```javascript
   customFields: {
     environment: "production",
     apiBaseUrl: "https://api.sehat.muhammadiyah.or.id",
     consoleUrl: "https://sehat.muhammadiyah.or.id/console",
   }
   ```

2. **Access in components**:

   ```javascript
   import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

   const { siteConfig } = useDocusaurusContext();
   const consoleUrl = siteConfig.customFields.consoleUrl;
   ```

3. **Use environment checks** in MDX files if needed.
