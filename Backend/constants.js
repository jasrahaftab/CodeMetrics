export const DB_NAME = "CodeMetrics";
//why we write db name in different file and then import it in the intex.js?
//Ans: to keep our code organized and easy to maintain (If "CodeMetrics" is used in multiple files (DB connection, migrations, logs, etc.), and you need to rename it — you change it in one place only, not hunt it down everywhere.