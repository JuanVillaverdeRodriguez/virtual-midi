import { API_CONFIG } from '../config/api';

export const getMidiDevices = async () => {
    try {
        const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.midiDevices}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching MIDI devices:', error);
        throw error;
    }
};

export const sendMidiNote = async (note: number, velocity: number, channel: number, isNoteOn: boolean) => {
    try {
        const endpoint = isNoteOn ? API_CONFIG.endpoints.noteOn : API_CONFIG.endpoints.noteOff;
        const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ note, velocity, channel }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error sending MIDI note:', error);
        throw error;
    }
};

export const sendMidiCC = async (controller: number, value: number, channel: number) => {
    try {
        const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.controlChange}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ controller, value, channel }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error sending MIDI CC:', error);
        throw error;
    }
};