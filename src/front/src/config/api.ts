export const API_CONFIG = {
    baseUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'http://localhost:8000', // Change this for production
    endpoints: {
        midiDevices: '/devices',
        noteOn: '/note_on',
        noteOff: '/note_off',
        controlChange: '/control_change'
    }
} as const;