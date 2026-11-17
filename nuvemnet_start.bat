@echo off
rem Nuvemnet Site — web :5182
chcp 65001 >nul
cd /d "%~dp0"
set "FRONTEND_PORT=5182"

where npm >nul 2>nul
if errorlevel 1 (
  echo npm nao encontrado. Instale Node.js em https://nodejs.org
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo Falha no npm install.
    pause
    exit /b 1
  )
)

echo.
echo Nuvemnet Site — http://localhost:%FRONTEND_PORT%
echo.
call npm run dev -- --port %FRONTEND_PORT%
pause
