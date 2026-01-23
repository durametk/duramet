@echo off
REM Batch script to deploy to Vercel
REM Usage: deploy-vercel.bat

setlocal

echo === Vercel Deployment Script ===
echo.

REM Step 1: Build the project (optional, Vercel builds automatically)
echo Building project locally (for testing)...
call npm run build
if %errorlevel% neq 0 (
    echo Error: Build failed!
    exit /b 1
)
echo [OK] Build successful
echo.

REM Step 2: Deploy to Vercel
echo Deploying to Vercel...
echo Note: Make sure you're logged in (vercel login)
echo.
call vercel --prod
if %errorlevel% neq 0 (
    echo Error: Vercel deployment failed!
    echo Make sure you're logged in: vercel login
    exit /b 1
)
echo [OK] Deployment successful
echo.

echo === All done! ===
echo Your site is now live on Vercel!
endlocal

