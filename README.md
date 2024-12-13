# Expo Linking.getInitialURL() returns null unexpectedly

This repository demonstrates a bug in Expo's `Linking` API where `getInitialURL()` inconsistently returns `null`, even when the app is launched with a valid deep link.  This can lead to unexpected app behavior and crashes if not handled properly.

## Bug Description

The `Linking.getInitialURL()` method is supposed to return the initial URL used to launch the application. However, in certain scenarios, especially when using custom URL schemes, this method may return `null` despite a deep link being successfully handled by the system. This inconsistency makes it difficult to rely on this function for handling deep links.

## Solution

The solution implemented in this repository uses `useEffect` to handle asynchronous calls more reliably and includes checks and logging to more precisely diagnose the issue.  Error handling is added to manage null or undefined cases gracefully.