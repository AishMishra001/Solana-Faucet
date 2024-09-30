# Learnings : 

## RPC URL ISSUE : 

### Solana RPC url v/s Alcemy RPC url 

#### Solana RPC:

Public nodes like https://api.devnet.solana.com are shared by many developers and projects, so you may hit rate limits (as in your case with the 429 "Too Many Requests" error).
Solana Foundation imposes rate limits to ensure fair use, but these limits can be restrictive for heavy or large-scale applications.

#### Alchemy RPC:

Alchemy offers higher rate limits and more generous quotas, depending on the pricing tier. You can start with a free tier, and as your application grows, you can scale up with paid tiers.
Alchemy also provides more transparent rate-limiting policies and monitoring tools to help you manage your usage effectively.