---
sidebar_position: 2
---

# Getting Started

Here you'll learn a little bit about a template theme code base, and how to get ready to make a theme

## Creating a Theme

Creating a theme is a very straight forward process. Simply follow the README instructions given in the [theme example](https://github.com/SteamClientHomebrew/Millennium/tree/main/examples/theme#readme) found in the Millennium repository.

## Getting Ready 

1. Boot up steam with parameters `-cef-enable-debugging -dev`. This enables CEF Remote Debugging and Developer mode allowing you to *develop* Steam.
2. Navigate to http://localhost:8080/

This page allows you to see all inspect-able windows on the Steam Client and windows you can't normally just inspect element on. These names are useful when you need to select a certain window to insert CSS or JS into.
