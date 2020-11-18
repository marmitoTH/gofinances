import fileUpload from 'express-fileupload'

export default fileUpload({
  safeFileNames: true,
  limits: {
    fileSize: 1 * 1024 * 1024
  }
})
