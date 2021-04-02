CREATE TABLE message(
    message_id SERIAL PRIMARY KEY,
    text VARCHAR(140),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);