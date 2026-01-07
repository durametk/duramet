# PowerShell script to pull and push changes
# Usage: .\push-changes.ps1 [commit-message]

param(
    [string]$CommitMessage = "Update changes"
)

Write-Host "=== Git Pull and Push Script ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check for uncommitted changes
Write-Host "Checking git status..." -ForegroundColor Yellow
$status = git status --porcelain

if ($status) {
    Write-Host "Found uncommitted changes. Staging all changes..." -ForegroundColor Yellow
    git add .
    Write-Host "✓ All changes staged" -ForegroundColor Green
    Write-Host ""
    
    # Step 2: Commit changes
    Write-Host "Committing changes with message: '$CommitMessage'" -ForegroundColor Yellow
    git commit -m $CommitMessage
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Commit failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Changes committed" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "No uncommitted changes found." -ForegroundColor Green
    Write-Host ""
}

# Step 3: Pull latest changes from remote
Write-Host "Pulling latest changes from origin/main..." -ForegroundColor Yellow
git pull origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Pull failed! Please resolve conflicts manually." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Pull successful" -ForegroundColor Green
Write-Host ""

# Step 4: Push changes to remote
Write-Host "Pushing changes to origin/main..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Push failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Push successful" -ForegroundColor Green
Write-Host ""

Write-Host "=== All done! ===" -ForegroundColor Cyan

