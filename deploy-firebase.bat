@echo off
REM Batch script to build and deploy to Firebase
REM Usage: deploy-firebase.bat

setlocal

echo === Firebase Deployment Script ===
echo.

REM Step 1: Build the project
echo Building project...
call npm run build
if %errorlevel% neq 0 (
    echo Error: Build failed!
    exit /b 1
)
echo [OK] Build successful
echo.

REM Step 2: Deploy to Firebase
echo Deploying to Firebase...
call firebase deploy
if %errorlevel% neq 0 (
    echo Error: Firebase deployment failed!
    exit /b 1
)
echo [OK] Deployment successful
echo.

echo === All done! ===
endlocal

