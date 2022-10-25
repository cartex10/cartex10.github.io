---
title: FightBoard v1
date: 2022-10-24
categories: [Current Projects, FightBoard]
tags: [fightboard, current-projects]     # TAG names should always be lowercase
---
<div align=center>
<h1> ⌨️ FightBoard v1 🎮 </h1>
<h4>
  <a href="https://github.com/cartex10/fightboard">GitHub</a>
  <span> · </span>
  <a href="/categories/fightboard">Project Logs</a>
</h4>
<h4> AUG 2022 - </h4>
<img src="/assets/fightboard/v1_silkscreen.jpg" height="2">
</div>

## Overview
<h5> The FightBoard is a completely custom mechanical keyboard running QMK firmware, built mainly for use with <a href="https://www.fightcade.com/">Fightcade</a>, an arcade game matchmaking tool. Fightboard features 12 hot-swappable Kailh sockets (4 for "WASD" movement, 8 for regular buttons) and 4 pushbuttons for common functions (inputting coins, start, etc). While it is built for use with Fightcade in mind, the FightBoard is a keyboard that can be used with any PC game, or as just a regular keyboard if you only need 12 letters. It runs QMK firmware written in C, on a XIAO Seeeduino RP2040, using a MCP23018 I/O expander and a custom PCB. v1 was originally finished in September, and a final v2 will include addressable RGB LEDs, and an LCD screen, which will hopefully be done within the next few weeks. </h5> 

## Project Purpose
<h5> So, I got a little bit distracted near the end of the summer after hitting a slight roadblock with <a href="/posts/robodachi">RoboDachi</a>, so I decided to shift my attention to something I had been interested in for a long time. In fact, I took two of my biggest interests, and smashed them together, those being mechanical keyboards, and fighting games. I designed the FightBoard in order to help familiarize myself with QMK before building a larger scale project. The next version of the FightBoard will hopefully be the final version, and will be include work on a case and metal plate. </h5>

## Pictures of the Project
<img src="/assets/fightboard/v1.jpg">

<h5> PCB in KiCAD </h5>
<img src="/assets/fightboard/v1_pcb.png">

## File Overview
<h4> <a href="https://github.com/cartex10/fightboard/blob/main/qmk_firmware/keyboards/fightboard/matrix.c">matrix.c</a> </h4>
<h5> This the file that handles the I/O expander and the custom matrix. On startup, "matrix_init_custom()" runs and sets up the I/O expander. Afterwards, "matrix_scan_custom()" runs in an infinite loop, and returns True whenever the matrix is different from the last time the function was run. </h5>

<h4> <a href="https://github.com/cartex10/fightboard/blob/main/qmk_firmware/keyboards/fightboard/keymaps/default/keymap.c">keymap.c</a> </h4>
<h5> This file handles the conversion from 16-bit binary matrix to a usable keymap. The folder can be copied and renamed to create more flashable keymaps that can be used for the same keyboard. </h5>
  
## Completed Objectives
<h5> Currently, the main function of the FightBoard is reading from an I/O expander in order to get around matrices and diodes. A lot of effort was also placed in the PCB design and routing. </h5>

## Objectives Left Undone
<h5> For v1, the only work remaining is designing a case in SolidWorks and 3D printed, but this effort will be saved for work on v2, which will include RGB LEDs and an LCD screen, and hopefully a slightly smaller PCB footprint. </h5>

## Continuing or Running the Project
<h5> After installing and setting up QMK using "qmk setup -b develop", setup the circuit following the KiCAD schematic, and flash the default keymap onto the RP2040. Most future changes will happen either to "matrix.c" or either "keymap.c"</h5>