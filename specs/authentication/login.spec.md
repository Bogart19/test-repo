---
testspace: true
title: Login Tests
validLogin: test@test.com
unregisteredEmail: testy@test.com
---

# {{ spec.title }}

Testing the display of manual tests found in the root of the spec folder.

## [setup]

Install the app.

1. Download the app from github
2. run `adb install <app name>`

## [teardown]

Uninstall the app

1. Long press on the app icon
2. Tap uninstall

## User can log in with email

Ensure that a user can log into the app using a valid email address.

1. Launch the app
2. Login with {{ spec.validLogin }}
3. View the landing page

The user should see the landing page, and it should display their login email.

## User cannot log in with an unregistered email

Ensure that users that have not registered are unable to login and are presented with a useful error message.

1. Launch the app
2. Login with {{ spec.unregisteredEmail }}

_Expected Results_:

- User is not logged in
- User is presented with an error message indicating their email is not valid
