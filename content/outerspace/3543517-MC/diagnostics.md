---
title: "> Run Diagnostics"
date: "2021-04-25"
draft: false
aliases: [
    "/puzzles/diagnostics",
    "/3543517-MC/diagnostics"
]
weight: 1
---

Run emergency diagnostics to evaluate what components needs to be fixed and what planetary data needs to be recovered to route the VCS Nuevo to it's destination, Kepler 186f.

<!--more-->
<!-- the above comment is to provide a blurb of the puzzle, do not remove -->

Once done, each component needed for ship maintenance can be found in the list seen by clicking the Nuvi logo on the top left of the page.

<button onclick="displayDiagnostics()"> Run Diagnostics </button>
<div id="runStatus"></div>
<div id = "shipDiagnostics" style="display:none;">

```
VCS Nuevo diagnostics: run completed, !danger detected.

    Oxygen: LOW 
    Pressure: UNSTABLE
    Communications: PING FAILED
    Navigation: NO TRAJECTORY FOUND

Planetary data recovery: partial recovery complete.

    Missing data for:
    1. Planet A
    2. Planet B
    3. Planet C

```
</div>
