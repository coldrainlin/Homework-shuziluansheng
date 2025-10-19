@echo off
echo 启动本地HTTP服务器...
echo.
echo 服务器将在 http://localhost:8000 启动
echo 请在浏览器中访问: http://localhost:8000/homework1/homework2/server-version.html
echo.
echo 按 Ctrl+C 停止服务器
echo.
cd /d "%~dp0"
python -m http.server 8000
pause
