---
title: Introduction
---
# Introduction

Millennium gives us the ability to modify portions of the Steam Client using plugins. These plugins contain 2 notable portions; a frontend, written in typescript, and a backend, written in python. A frontend is something that interacts with Steams UI, and the backend is something that can interact with the end-users PC.

An additional (optional) portion is the webkit part, written in typescript, that interacts with the webpages loaded by Steam (e.g. Store, Community pages).

Do we need a backend and a frontend? Simply put, you don't. Most of the code that interacts with steam will be done in Typescript. The backend and frontend are symbiotically intended to seamlessly connect between the 2 languages. The backend is primarily used whenever you need to interact with the user's PC, and the frontend is primarily used to interact with the Steam Client internally. 

# Getting Started

Creating a plugin is a very straight forward process. Simply follow the README instructions given in the [plugin example](https://github.com/SteamClientHomebrew/Millennium/tree/main/examples/plugin#readme) found in the Millennium repository.

## Language API Reference

* [Python API](/developers/plugins/python)
    * Main file `backend/main.py`
* [Frontend TypeScript API](/developers/plugins/typescript/client)
    * Main file `frontend/index.tsx`
* [Webkit TypeScript API](/developers/plugins/typescript/webkit)
    * Main file `webkit/index.tsx`
