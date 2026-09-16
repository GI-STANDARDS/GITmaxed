import { Account } from '../models/account'

const appName = (): string => (__DEV__ ? 'GITmaxed Dev' : 'GITmaxed')

/** Get the auth key for the user, unique per account login on the endpoint. */
export function getKeyForAccount(account: Account): string {
  return `${appName()} - ${account.endpoint}/${account.login}`
}

/**
 * Get the legacy auth key for an endpoint (single-account per endpoint).
 *
 * Used only during migration of pre-multi-account tokens.
 */
export function getLegacyKeyForEndpoint(endpoint: string): string {
  return `${appName()} - ${endpoint}`
}

/** Get the auth key for the endpoint. */
export function getKeyForEndpoint(endpoint: string): string {
  return `${appName()} - ${endpoint}`
}