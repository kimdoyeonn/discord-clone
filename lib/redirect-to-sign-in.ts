import { redirectToSignIn as clerkRedirectToSignIn } from '@clerk/nextjs';

export const redirectToSignIn = ({ returnBackUrl }: {returnBackUrl?: string} = {}) => {
  return clerkRedirectToSignIn({ returnBackUrl: returnBackUrl || process.env.NEXT_PUBLIC_SITE_URL })
}