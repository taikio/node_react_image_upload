import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files }) => (
    <Container>
        {files.map(uploadedFile => (
            <li>
            <FileInfo>
                <Preview src={ uploadedFile.preview } />
                <div>
                    <strong>{ uploadedFile.name }</strong>
                    <span>{ uploadedFile.readableSize } <button onClick={() => {}}>Excluir</button></span>
                </div>
            </FileInfo>

            <div>
                { !uploadedFile.uploaded && !uploadedFile.error && (
                    <CircularProgressbar
                    styles={{
                        root:{ width: 24 },
                        path: { stroke: '#7159c1' }
                    }}
                    strokeWidth={10}
                    porcentage={uploadedFile.progress}
                />
                ) }

                { uploadedFile.url && (
                    <a 
                    href="https://github.blog/wp-content/uploads/2013/04/0cf7be70-a5e3-11e2-8943-6ac7a953f26d.jpg?resize=1234%2C631"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                    </a>
                ) }

                { uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" /> }
                { uploadedFile.error && <MdError size={24} color="#e57878" /> }
            </div>
        </li>
        ))}
    </Container>
);

export default FileList;
