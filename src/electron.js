const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
	const win = new BrowserWindow({
		width: 1500,
		height: 1000,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	// Removes the top menu toolbar
	win.setMenu(null);
	// mainWindow.loadURL(startUrl);
	win.loadURL('http://localhost:3000');
	// win.loadURL('https://algovisionknights.com/');

	// Open DevTools
	// win.webContents.openDevTools();
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
