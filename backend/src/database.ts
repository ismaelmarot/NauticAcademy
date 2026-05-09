import sqlite3 from 'sqlite3';
import { promisify } from 'util';

const db = new sqlite3.Database('./nauticacademy.db', (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      nickname TEXT UNIQUE,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      emailVerified INTEGER DEFAULT 0,
      verificationToken TEXT,
      verificationExpiresAt TEXT,
      avatarUrl TEXT,
      xp INTEGER DEFAULT 0,
      level INTEGER DEFAULT 1,
      streak INTEGER DEFAULT 0,
      lastActiveDate TEXT,
      language TEXT DEFAULT 'es',
      theme TEXT DEFAULT 'system',
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
      updatedAt TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      topicId TEXT NOT NULL,
      completed INTEGER DEFAULT 0,
      completedAt TEXT,
      FOREIGN KEY (userId) REFERENCES users(id),
      UNIQUE(userId, topicId)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS quiz_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      topicId TEXT NOT NULL,
      score INTEGER NOT NULL,
      totalQuestions INTEGER NOT NULL,
      completedAt TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (userId) REFERENCES users(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS password_resets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      token TEXT UNIQUE NOT NULL,
      expiresAt TEXT NOT NULL,
      used INTEGER DEFAULT 0,
      FOREIGN KEY (userId) REFERENCES users(id)
    )
  `);

  db.run(`ALTER TABLE users ADD COLUMN emailVerified INTEGER DEFAULT 0`, (err: any) => {
    if (err && !err.message.includes('duplicate column')) {
      console.error('Migration error (emailVerified):', err.message);
    }
  });

  db.run(`ALTER TABLE users ADD COLUMN verificationToken TEXT`, (err: any) => {
    if (err && !err.message.includes('duplicate column')) {
      console.error('Migration error (verificationToken):', err.message);
    }
  });

  db.run(`ALTER TABLE users ADD COLUMN verificationExpiresAt TEXT`, (err: any) => {
    if (err && !err.message.includes('duplicate column')) {
      console.error('Migration error (verificationExpiresAt):', err.message);
    }
  });

  db.run(`INSERT OR IGNORE INTO users (firstName, lastName, nickname, email, password, emailVerified) VALUES ('Invitado', '', 'invitado', 'guest@nauticacademy.com', '', 1)`, (err: any) => {
    if (err) console.error('Error creating guest user:', err.message);
  });
});

export const run = (sql: string, params: any[] = []): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
};

export const get = (sql: string, params: any[] = []): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

export const all = (sql: string, params: any[] = []): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

export default db;
