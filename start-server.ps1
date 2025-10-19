Write-Host "启动本地HTTP服务器..." -ForegroundColor Green
Write-Host ""
Write-Host "服务器将在 http://localhost:8000 启动" -ForegroundColor Yellow
Write-Host "请在浏览器中访问: http://localhost:8000/homework1/homework2/server-version.html" -ForegroundColor Yellow
Write-Host ""
Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Red
Write-Host ""

# 切换到脚本所在目录
Set-Location $PSScriptRoot

# 启动Python HTTP服务器
try {
    python -m http.server 8000
} catch {
    Write-Host "错误: 无法启动Python服务器" -ForegroundColor Red
    Write-Host "请确保已安装Python并添加到PATH环境变量" -ForegroundColor Red
    Write-Host ""
    Write-Host "或者手动运行以下命令:" -ForegroundColor Yellow
    Write-Host "cd $PSScriptRoot" -ForegroundColor Cyan
    Write-Host "python -m http.server 8000" -ForegroundColor Cyan
}

Read-Host "按任意键退出"
