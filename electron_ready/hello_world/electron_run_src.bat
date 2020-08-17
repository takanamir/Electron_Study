cd app
cd src
powershell -Command "electron . 2>&1 | Add-Content -Path ..\..\dbg.txt  -PassThru"

::pause
exit
