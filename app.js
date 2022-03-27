let db = {};

function name(item) {
  // Checking data is avaialable or not
  const strored = localStorage.getItem("name");
  if (strored) {
    db = JSON.parse(strored);
  }
  // Adding Data if not exist
  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }
  localStorage.setItem("name", JSON.stringify(db));
}
