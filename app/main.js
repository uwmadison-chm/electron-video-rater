'use strict';

const path = require('path');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 800,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            nodeIntegrationInWorker: false,
            preload: path.join(__dirname, 'rater.js')
          }
    });
    mainWindow.loadFile('app/index.html');
    mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);
