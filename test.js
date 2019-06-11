const myAlert = () => {
  const x = "Help!";
  const alerter = () => {
    alert(x);
  };
  setTimeout(alerter, 1000);
  console.log("What happened?");
};

myAlert();
