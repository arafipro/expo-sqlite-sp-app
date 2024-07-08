import { SQLiteDatabase } from "expo-sqlite";

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let result = await db.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version"
  );
  let currentDbVersion = result ? result.user_version : 0;
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
			PRAGMA journal_mode = 'wal';
			CREATE TABLE todos (
				id INTEGER PRIMARY KEY NOT NULL,
				title TEXT NOT NULL,
				content TEXT NOT NULL);
`);
    await db.runAsync(
      "INSERT INTO todos (title, content) VALUES (?, ?)",
      "掃除",
      "トイレ"
    );
    await db.runAsync(
      "INSERT INTO todos (title, content) VALUES (?, ?)",
      "買い物",
      "食料品"
    );
    currentDbVersion = 1;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
