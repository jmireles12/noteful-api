module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://mjhyspbvfasdsa:a80c5079620826bf5bd738126cd686d4fc6c56d19ca7f7a476fd3cbd7b1d8e35@ec2-54-163-47-62.compute-1.amazonaws.com:5432/dfjnrsa5n5f4ap',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin:Selerim1@localhost/noteful-test'
}