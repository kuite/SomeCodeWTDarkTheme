@echo "FROM BAT FILE WITAM"
cd %1
ng serve
timeout /t 10 /nobreak >NUL