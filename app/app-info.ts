import * as path from 'path'
import * as fs from 'fs'
import { getSHA } from './git-info'
import { getUpdatesURL, getChannel } from '../script/dist-info'
import { version, productName } from './package.json'

const channel = getChannel()

const s = JSON.stringify

const optionalStringReplacement = (value: string | undefined) =>
  value === undefined || value.length === 0 ? 'undefined' : s(value)

/**
 * Load a local, gitignored `.env` file (next to this file) for development
 * and manual builds. Values in the environment take precedence. This is a
 * no-op when the file does not exist (e.g. CI, where `DESKTOP_OAUTH_*` are
 * injected as secrets).
 */
function loadLocalEnv(): void {
  const dotenvPath = path.join(__dirname, '.env')
  if (fs.existsSync(dotenvPath)) {
    process.loadEnvFile(dotenvPath)
  }
}

export function getReplacements() {
  const isDevBuild = channel === 'development'

  loadLocalEnv()

  const oauthClientId = process.env.DESKTOP_OAUTH_CLIENT_ID
  const oauthClientSecret = process.env.DESKTOP_OAUTH_CLIENT_SECRET

  if (
    !isDevBuild &&
    process.env.TEST_ENV !== '1' &&
    (oauthClientId === undefined ||
      oauthClientSecret === undefined ||
      oauthClientId.length === 0 ||
      oauthClientSecret.length === 0)
  ) {
    throw new Error(
      'Missing OAuth credentials for a release build. Set ' +
        'DESKTOP_OAUTH_CLIENT_ID and DESKTOP_OAUTH_CLIENT_SECRET (or provide ' +
        'them in app/.env).'
    )
  }

  return {
    __OAUTH_CLIENT_ID__: s(oauthClientId ?? ''),
    __OAUTH_SECRET__: s(oauthClientSecret ?? ''),
    __DARWIN__: process.platform === 'darwin',
    __WIN32__: process.platform === 'win32',
    __LINUX__: process.platform === 'linux',
    __APP_NAME__: s(productName),
    __APP_VERSION__: s(version),
    __DEV__: isDevBuild,
    __DEV_SECRETS__: isDevBuild || oauthClientSecret === undefined,
    __RELEASE_CHANNEL__: s(channel),
    __UPDATES_URL__: s(process.env.DESKTOP_E2E_UPDATES_URL ?? getUpdatesURL()),
    __ERROR_REPORTING_ENDPOINT__: optionalStringReplacement(
      process.env.DESKTOP_ERROR_REPORTING_ENDPOINT
    ),
    __NON_FATAL_ERROR_REPORTING_ENDPOINT__: optionalStringReplacement(
      process.env.DESKTOP_NON_FATAL_ERROR_REPORTING_ENDPOINT
    ),
    __SHA__: s(getSHA()),
    'process.platform': s(process.platform),
    'process.env.NODE_ENV': s(process.env.NODE_ENV || 'development'),
    'process.env.TEST_ENV': s(process.env.TEST_ENV),
  }
}