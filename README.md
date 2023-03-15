# TestSpace Test Implementation

## Overview

TestSpace takes generated `.xml` outputs from test runs and uploads them to a linked testspace website to provide a dashboard view of automated tests. The full list of supported data formats can be found [here|https://help.testspace.com/reference/data-formats#test-output-formats].

## Details of this Demo

A very simple function was written and has some example tests written using Jest. Since Jest doesn't provide a supported style output, this project also uses [jest-junit|https://www.npmjs.com/package/jest-junit] to generate the output in the junit format.

A basic github actions workflow has been set up to try out the reporting, and does the following:

1. Checks out testspace dependencies
1. Installs NPM dependencies
1. Runs the tests
1. Publishes the `.xml` results to testspace

## Running tests

To run tests that generate the needed `.xml` for CI:

```
npm run test-ci
```

## Seeing the Dashboard

See the different branches that have been pushed and ran [here|https://bogart19.testspace.com/projects/67712/spaces].

The `test-workflow` branch shows the dashboard view of automated tests that have passed, failed, and been flaky and ends with tests finally passing.

The `manual-test-cases` branch shows how manual tests looks in the tool as well as how they also display in the dashboard alongside automated tests. See `MANUAL-TESTS-README` for more details on how the manual test case setup and display works.
