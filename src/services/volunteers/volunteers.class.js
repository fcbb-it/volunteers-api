// This is a skeleton for a custom service class. Remove or add the methods you need here
export class VolunteersService {
  constructor(options) {
    this.options = options
  }

  async find(_params) {
    const googleSheet = this.options.app.get('googleSheet')

    await googleSheet.loadInfo(); // loads document properties and worksheets

    const sheet = googleSheet.sheetsByIndex[1];
    const rows = await sheet.getRows()
    
    const result = rows.map(({ Name, Position, Picture, LinkedIn, Division, Order, DivisionOrder }) => ({
      Name,
      Position,
      Picture,
      LinkedIn,
      Division,
      Order,
      DivisionOrder
    }))

    return result
  }

}

export const getOptions = (app) => {
  return { app }
}
