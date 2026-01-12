import alchemy from 'alchemy'
import { TanStackStart } from 'alchemy/cloudflare'

const app = await alchemy('website')

export const website = await TanStackStart('website', {
  domains: app.stage === 'prod' ? ['kivlor.com', 'www.kivlor.com'] : undefined,
})

console.log({
  url: website.url,
})

await app.finalize()
