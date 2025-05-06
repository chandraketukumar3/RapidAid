@echo off
echo Uninstalling existing packages...
call npm uninstall tailwindcss postcss autoprefixer

echo Installing specific versions...
call npm install -D tailwindcss@3.1.8 postcss@8.4.14 autoprefixer@10.4.14

echo Done! CSS packages have been reinstalled. 