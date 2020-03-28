const devMode = process.env.NODE_ENV === 'development';

const { app, BrowserWindow } = require('electron');

// 保持对 window 对象的全局引用，如果不这么做的话，当 JavaScript 对象被垃圾回收的时候，window 对象将会自动的关闭
let win;

function createWindow() {
  // 创建浏览器窗口。
  win = new BrowserWindow({
    // resizable: false,
    minWidth: 1180,
    minHeight: 638,
    frame: false,
    transparent: true,
    webPreferences: {
      webSecurity: false // 跨域
    }
  });

  // 加载页面
  if (devMode) {
    win.loadURL('http://localhost:5354/#/');
  } else {
    win.loadFile('index.html');
  }

  // 打开开发者工具
  win.webContents.openDevTools();

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow);

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
});

