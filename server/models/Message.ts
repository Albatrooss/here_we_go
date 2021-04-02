export default {
    insert: {
        query: `
            INSERT INTO message(text)
            VALUES($1);
        `,
    },
    all: {
        query: `
            SELECT
                message_id,
                text, 
                created_at,
                updated_at
            FROM message;
        `,
    }
}