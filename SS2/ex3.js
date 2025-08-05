const typeConsole = (type = "log") => {
  console[type](`Đây là type: ${type}`);
};


typeConsole("log");   // Đây là type: log, dùng console.log
typeConsole("warn");  //Đây là type: warn, dùng console.warn
typeConsole("error"); //Đây là type: error, dùng console.error
typeConsole();        // Đây là type: log ,mặc định
