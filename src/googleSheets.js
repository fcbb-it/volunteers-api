import { GoogleSpreadsheet } from 'google-spreadsheet'

import Credentials from '/etc/secrets/volunteers-api-spreadsheet.json' assert { type: 'json' }

export const googleSheets = async (app) => {
  const spreadsheet = app.get('spreadsheet')

  const doc = new GoogleSpreadsheet(spreadsheet.sheetId);

  await doc.useServiceAccountAuth(Credentials, spreadsheet.email);

  app.set('googleSheet', doc)
}
