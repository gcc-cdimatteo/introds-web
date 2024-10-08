const { google } = require('googleapis');

export const getSheetData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = '1mlXN37dyvSaf9WZcYHv8PJbe93Tie4hVKbFNZtvMWHQ';
    const range = 'IDS - 2024 - 2C!A8:G23';

    const response = await googleSheets.spreadsheets.values.get({
        spreadsheetId,
        range,
    });

    const rows = response.data.values;

    if (rows.length) {
        return rows;
    } else {
        console.log('No data found.');
    }
}
