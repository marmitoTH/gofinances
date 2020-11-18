import React, { Fragment, useState } from 'react'
import Dropzone, { FileWithPath } from 'react-dropzone'
import { Input } from './styles'

interface UploaderProps {
  onUpload: Function
}

function Uploader({ onUpload }: UploaderProps) {
  const [file, setFile] = useState<FileWithPath>()

  function upload(file: FileWithPath) {
    setFile(file)
    onUpload(file)
  }

  return (
    <Fragment>
      <Dropzone accept='.csv, text/csv' onDropAccepted={files => upload(files[0])}>
        {({ getRootProps, getInputProps, isDragActive }): any => (
          <Input
            {...getRootProps()}
            active={isDragActive}
          >
            <input {...getInputProps()} />
            <p>{(file && `${file.path} - ${file.size} bytes`) || 'Selecione ou arraste o arquivo aqui'}</p>
          </Input>
        )}
      </Dropzone>
    </Fragment>
  )
}

export default Uploader
