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

    const spreadsheetId = '102dHhHtgn5bdOrxb7-DXO6JpaGbOJ988eD53H77uDuk';
    const range = 'Cronograma :: IDS - 2025 - 1C!A8:Q24';

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
