# AuthJS Unhandled Callback Errors On The Edge Runtime

## What's the nature of this issue:

I noticed that if the signIn callback returns false there is a TypeError (TypeError: immutable) (on top of the AuthorizedCallbackError) only on the edge runtime. This only happens when the runtime is set to edge on the api route handler. By just commenting that line (src/app/api/auth/[...next-auth]/route.ts line two) the same flow redirects to the default error page and there is no TypeError error.

## How to replicate

To replicate the issue just pnpm install and add the Discord provider details to the .env file. (You can rename the .env.example). I chose Discord for this replication repo but I have reproduced the same error using the Google provider as well so feel free to use whichever one is easiest for you. It dosen't seem to be provider specific/related at all.

## Notes

- I also noticed the same error on-top of other AuthErrors anytime the auth flow breaks, including when getting an OAuthAccountNotLinked error.
- I did not include an adaptor or database in this repo for ease of reproduction but I have tested it with the planetscale databasejs HTTP connection (which is edge compatible) using the drizzle adapter (also edge compatible) and everything worked fine however the errors persisted
- I also tried starting the authentication flow using the signIn function from "next-auth/react" inside a client component and had the same results.
- I chose to make a custom error page but the same error and behaivour appears when using the default one and leaving the pages object in the auth config file empty/null
- Here there is no middleware but I am also getting the same erros when there is middleware used (tried importing straight from auth.ts and also from the split method to not load the adaptor using a separate auth.config.ts file)
- The same errors appear also on next-auth 5.0.0-beta.4
