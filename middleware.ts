export const config = {
  matcher: '/(.*)',
};

export default function middleware(request: Request) {
  const basicAuthEnabled = process.env.ENABLE_BASIC_AUTH === 'true';
  if (!basicAuthEnabled) {
    return;
  }

  const authorizationHeader = request.headers.get('authorization');
  const unauthorizedResponse = new Response('Basic Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });

  if (!authorizationHeader) {
    return unauthorizedResponse;
  }

  const [scheme, encodedCredentials] = authorizationHeader.split(' ');
  if (scheme !== 'Basic' || !encodedCredentials) {
    return unauthorizedResponse;
  }

  let decodedCredentials = '';
  try {
    decodedCredentials = atob(encodedCredentials);
  } catch {
    return unauthorizedResponse;
  }

  const separatorIndex = decodedCredentials.indexOf(':');
  if (separatorIndex === -1) {
    return unauthorizedResponse;
  }

  const user = decodedCredentials.slice(0, separatorIndex);
  const password = decodedCredentials.slice(separatorIndex + 1);

  if (
    user === process.env.BASIC_AUTH_USER &&
    password === process.env.BASIC_AUTH_PASSWORD
  ) {
    return;
  }

  return unauthorizedResponse;
}
