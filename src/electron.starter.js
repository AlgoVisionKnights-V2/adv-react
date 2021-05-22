const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	// Removes the top menu toolbar
	win.setMenu(null);

	win.loadURL('http://localhost:3000');

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
