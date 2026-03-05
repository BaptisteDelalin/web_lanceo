const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

/**
 * Rate limiter in-memory simple.
 * Retourne true si la requete est autorisee, false si la limite est atteinte.
 *
 * @param ip - Adresse IP du client
 * @param limit - Nombre max de requetes par fenetre (defaut: 5)
 * @param windowMs - Duree de la fenetre en ms (defaut: 60 000 = 1 min)
 */
export function rateLimit(
  ip: string,
  limit = 5,
  windowMs = 60_000
): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset >= windowMs) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (entry.count < limit) {
    entry.count++;
    return true;
  }

  return false;
}
