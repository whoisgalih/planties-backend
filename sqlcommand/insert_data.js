const plantQuery = {
    text: 'INSERT INTO oxygen VALUES ($1, $2) RETURNING id, oxygen',
    values: [id, oxygen],
};

const userQuery = {
    text: 'INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, oxygen_id, username, email, password, fullname, profileImage',
    values: [id, oxygen_id, username, email, password, fullname, profileImage]
}

const authQuery = {
    text: 'INSERT INTO authentications VALUES ($1) RETURNING token',
    values: [token],
};

const gardenQuery = {
    text: 'INSERT INTO gardens VALUES ($1, $2, $3, $4) RETURNING id, user_id, name, type',
    values: [id, user_id, name, type],
};

const reminderQuery = {
    text: 'INSERT INTO reminders VALUES ($1, $2, $3, $4) RETURNING id, garden_id, name, type',
    values: [id, garden_id, name, type]
}
