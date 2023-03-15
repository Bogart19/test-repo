---
testspace: true
title: Example manual test
testvar: Example variable
---

[//]: # "test space is required at minimum. If set to false, it will not be rendered in the test cases so can be used to help us keep historical reference of tests without actually having them take up space"
[//]: # "Other elements in the metadata above can be used as variables in the tests. You can display these in markdown with {{ spec.testvar }}"

# Test Spec Name

Write a description about the test spec here.

## [setup]

This is a setup fixture. This can only be defined once per file, and can be placed anywhere.

- Do a thing here.
- Do a thing there.

## Case 1

Write a case description here.

- step 1 instructions can be written here. This is optional.
- step 2 instructions. This continues to be optional.

* Step 1 instructions
  - sub-step 1 instruction
* Step 2 instructions

  - sub-step 2 instruction

  Example reference of {{ spec.testvar }}

## [teardown]

This is a teardown fixture. This can be presented after each case.

## Case 2

    ..
