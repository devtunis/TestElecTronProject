const { app, BrowserWindow } = require('electron')
const path = require("path")
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
      webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true, // ensures HTTPS requests work
    },
  })

  
   win.loadFile(path.join(__dirname, "my-vue-app", "dist", "index.html"));
}

 
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


 

