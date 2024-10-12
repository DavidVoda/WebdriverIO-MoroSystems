# WebdriverIO-MoroSystems
- This is an example of webdriverIO test for MoroSystems
- This project has set up GitHub action which generates allure report:
[GitHub Actions](https://github.com/DavidVoda/WebdriverIO-MoroSystems/actions/workflows/ci.yaml?query=branch%3Amain)
- Allure report can be seen here:
[Allure report](https://davidvoda.github.io/WebdriverIO-MoroSystems)
## Prerequisites
- node

## Installation
```bash
npm install
```

## Usage (local run)
- Run tests:
```bash
npm run wdio
```
- (Optional) Generate allure report (requires Java):
```bash
allure generate --clean
```
```bash
allure open
```