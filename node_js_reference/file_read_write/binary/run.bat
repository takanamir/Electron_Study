@ECHO OFF

:: �o�b�`�t�@�C���̃f�B���N�g�����擾
set THIS_DIR=%~dp0

:: package.json �̂����T�u�f�B���N�g�����T��
:: for /d �Ńf�B���N�g���̂�
for /d %%a in ("%THIS_DIR%*") do (
	if exist "%%a\package.json" set APP_DIR=%%a
)

echo -- app dir ----------
echo %APP_DIR%
echo.

:: �A�v���̃p�X���쐬
set APP_PTH="%APP_DIR%\."

:: �J�n
node %APP_PTH% %*

:: �f�o�b�O����pause���L���ɂ���
pause
exit
