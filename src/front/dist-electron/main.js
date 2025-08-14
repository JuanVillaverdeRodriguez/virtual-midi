import { app, BrowserWindow, ipcMain, session } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
import os from "node:os";
createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    titleBarStyle: "hidden",
    ...process.platform !== "darwin" ? { titleBarOverlay: true } : {},
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs")
    }
  });
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ipcMain.on("minimize-window", () => {
  var _a;
  (_a = BrowserWindow.getFocusedWindow()) == null ? void 0 : _a.minimize();
});
ipcMain.on("close-window", () => {
  app.quit();
});
const reactDevToolsPath = path.join(
  os.homedir(),
  "\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\6.1.5_0"
);
app.whenReady().then(async () => {
  console.log(reactDevToolsPath);
  await session.defaultSession.loadExtension(reactDevToolsPath);
}).then(createWindow);
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
