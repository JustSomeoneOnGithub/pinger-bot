@echo off
npm install discord.js@12.2.0

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)
