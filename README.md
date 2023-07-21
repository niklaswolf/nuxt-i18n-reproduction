# Reproduction
This is a reproduction repo for https://github.com/nuxt-modules/i18n/issues/2238
## Setup
1. Install both projects
```shell
cd main && npm ci && cd ../sub && npm ci
```
2. Edit your host file to include the following:
```
127.0.0.1	com.example.test
127.0.0.1	de.example.test
127.0.0.1	subcom.example.test
127.0.0.1	subde.example.test   
```
3. Start the sub-project in dev-mode:
```shell
npm run dev
```
4. Visit `http://subde.example.test:3000` and see the error

## Notes
- This happens only in dev mode, when building the project it works fine.
- Also if you remove both `i18n.config.ts`, it also works fine, also in dev mode
