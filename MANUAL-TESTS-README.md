## Manual Test Config

The `.testspace.yml` file in root controls the configuration for manual tests. By default, it checks for manual test files to exist within a `specs` folder within root, but this can be set in config to poing elsewhere.

## Writing Tests

### Metadata

Tests, at minimum, require metadata tags at the top of the file, and at minimum looks like:

```
---
testspace: true
---
```

You can set `testspace` to false, and this will hide the file from being rendered in the testspace website.
Additionally, you can pass in other data, including variables and set up a testing matrix for specific configurations, similar to what exists in the example matrix test spec.

```
---
testspace:
title: OS Systems
matrix: # test different OS systems
  - name: Windows
    timeout: 27 seconds
    reqs: "[Windows details](https://staging7.newco.com/windows)"
  - name: Linux
    timeout: 14 seconds
    reqs: "[Linux details](https://staging7.newco.com/linus)"
---
```

Variables can be input into the markdown using the format of `{{ spec.VariableName }}`.

### Writing a Test

Writing a simple test after the markdown is just using basic markdown.

```
# Titles will use H1

## Test case names use H2.
```

Typical markdown - lists, tables, general formatting etc generally works.

The main difference is that you can use the [template language](https://help.testspace.com/manual/implementation-spec#template-language), Liquid to utilize both custom and global variables. This includes some basic logic based on the spec to minimize repeated text. To see the documentation on Liquid, [find it on Shopify's domain](https://shopify.github.io/liquid/).

### Fixtures

Testspace has a concept of fixtures, where you can create repeated setup and teardown steps within a given test spec. These can be put anywhere in the file, and will display on every test case within the spec.

```
## [setup]

## [teardown]
```

### Previewing Tests

Markdown formatting and some loose similarities to actual view in Testspace can be previewed using [Jekyll](https://help.testspace.com/manual/desktop-preview). Note that this is not at all a 1:1 and many aspects of the preview don't work the same as they actually do in Testspace, so your mileage may vary on usefulness.

Note that the `Gemfile`, `_config.yml`, and `index.md` files in this repo are required for use with Jekyll.

### Viewing Tests in Testspace

Manual tests will be uploaded to the repo's associated testspace site. For this investigative session, that can be found at https://bogart19.testspace.com/projects/67712/spaces.

Once in TestSpace:

1. Click on the branch you want to run tests on - see `manual-test-cases` branch.
1. Click on Manual tab
1. Click through the folders to see the current test specs. Select a test to view the execution details.

## Executing Tests

> By default, you can only execute tests on `main`. This can be changed in the `.testspace.yml` configuration file. For the sake of demoing, the `manual-test-cases` branch has been configured to allow for test case execution.

To execute tests:

1. Click on the branch you want to run tests on - see `manual-test-cases` branch.
1. Click on Manual tab
1. Find the tests you want to execute and click "start" in the top right.

You can select each Case that has been set up and indicate the results of the testing status in its UI, as well as leave notes in the comment boxes. Once done testing, click `stop`.

### Organization

You can create new folders in the `specs` folder to organize tests. These are automatically detected and will be displayed as long as a test file exists within it.

If a file is placed in the root spec folder when other folders are in use, it will be listed under `ungrouped` (see roottest.spec.md).

### Generating Issues

It is possible to automatically generate issues on test failures through this UI, but appears to only support GitHub Issues and JIRA.

> It seems like by default, any tests marked as failed will generate Github Issues, as can be seen [here](https://github.com/Bogart19/test-repo/issues). To bypass this, when marking a test as failed you must update the dropdown next to `issue` to `do not report`. Note that failures in manual test runs will still trigger a testspace notification to the repo owners unless they have specifically opted out in notification settings from within Testspace.

## Viewing Results

View results under Results tab for the branch executed on. This view shows both the automated and manual test execution details, including any re-run manual tests.

## Metrics

Test execution status for manual tests is reported by default in the `Metrics` tab alongside automation test results.

## Notifications

On setting a test to fail, an email notification is sent to notify owners about the test status.
