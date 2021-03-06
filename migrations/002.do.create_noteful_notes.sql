CREATE TABLE IF NOT EXISTS noteful_notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    modified TIMESTAMPTZ NOT NULL DEFAULT now(),
    folderid INTEGER REFERENCES noteful_folders(id) ON DELETE CASCADE NOT NULL,
    content TEXT NOT NULL
);