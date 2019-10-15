const asyncCallback = function(cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, "hello world");
    } else {
      cb(new Error("hello error"));
    }
  }, 2000);
};

asyncCallback((err, msg) => {
  if (err) {
    console.log('Log Error --> ', err);
  } else {
    console.log('Message --> ', msg);
  }
});
