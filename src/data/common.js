// src/data/common.js

// Class representing a stored file
export class StoredFile {
    constructor(id, name, url, size) {
        this.id = id; // Unique identifier for the file
        this.name = name; // Name of the file
        this.url = url; // URL to access the file
        this.size = size; // Size of the file in bytes
    }
}

// Enum-like object representing the state of a stored file
export const StoredFileState = {
    UPLOADING: 'UPLOADING',
    UPLOADED: 'UPLOADED',
    FAILED: 'FAILED',
};
