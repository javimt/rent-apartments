




export function importEnvironment(variableName) {

    return import.meta.env[variableName]
}

export const variablesList = {
    VITE_API_URL: 'VITE_API_URL',
    VITE_CLOUDINARY_URL: 'VITE_CLOUDINARY_URL',
    VITE_CLOUDINARY_PRESET: 'VITE_CLOUDINARY_PRESET',
} 