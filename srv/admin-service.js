const cds = require('@sap/cds')

module.exports = class AdminService extends cds.ApplicationService { init() {

  const { Books } = cds.entities('AdminService')

  this.before (['CREATE', 'UPDATE'], Books, async (req) => {
    console.log('Before CREATE/UPDATE Books', req.data)
  })
  this.after ('READ', Books, async (books, req) => {
    console.log('After READ Books', books)
  })


  return super.init()
}}
