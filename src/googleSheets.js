import { GoogleSpreadsheet } from 'google-spreadsheet'
import fs from 'node:fs/promises'

const jsonPath = path.resolve('/etc/secrets/volunteers-api-spreadsheet.json');

export const googleSheets = async (app) => {
  const spreadsheet = app.get('spreadsheet')
  const Credentials = JSON.parse(await fs.readFile(jsonPath))

  const doc = new GoogleSpreadsheet(spreadsheet.sheetId);

  await doc.useServiceAccountAuth(Credentials, spreadsheet.email);

  app.set('googleSheet', doc)
}
