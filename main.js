const { app, BrowserWindow } = require('electron');

// Fonction pour créer une fenêtre de navigateur
function createWindow() {
  // Création d'une fenêtre de navigateur
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 1000,
    title: 'Nouvelle fenêtre',
    webPreferences: {
      nodeIntegration: true // Activation de l'intégration de Node.js dans la fenêtre de rendu
    }
  });

  // Chargement de l'index.html dans la fenêtre de navigateur
  mainWindow.loadFile('index.html');

  // Affichage de la console DevTools (facultatif)
  mainWindow.webContents.openDevTools();
}

// Lorsque l'application est prête, créez une fenêtre de navigateur
app.whenReady().then(createWindow);

// Gestionnaire d'événements pour macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
