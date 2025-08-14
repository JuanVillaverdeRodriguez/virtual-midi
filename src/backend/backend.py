from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from midi_sender import MidiSender
import mido

app = FastAPI()
midi_sender = None

# Permitir peticiones desde Electron (localhost)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class NoteMessage(BaseModel):
    note: int
    velocity: int = 100
    channel: int = 0
    duration: float = 0.4

class ControlMessage(BaseModel):
    controller: int
    value: int
    channel: int = 0

@app.on_event("startup")
async def startup_event():
    global midi_sender
    try:
        midi_sender = MidiSender()
    except Exception as e:
        print(f"Error initializing MIDI: {e}")

@app.get("/devices")
async def get_devices():
    try:
        devices = mido.get_output_names()
        return {"devices": devices}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/note_on")
async def note_on(note_msg: NoteMessage):
    if not midi_sender:
        raise HTTPException(status_code=500, detail="MIDI not initialized")
    try:
        midi_sender.play_note(
            note=note_msg.note,
            velocity=note_msg.velocity,
            duration=note_msg.duration,
            channel=note_msg.channel
        )
        return {"status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/note_off")
async def note_off(note_msg: NoteMessage):
    if not midi_sender:
        raise HTTPException(status_code=500, detail="MIDI not initialized")
    try:
        midi_sender.stop_note(
            note=note_msg.note,
            channel=note_msg.channel
        )
        return {"status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/control_change")
async def control_change(ctrl_msg: ControlMessage):
    if not midi_sender:
        raise HTTPException(status_code=500, detail="MIDI not initialized")
    try:
        midi_sender.send_cc(
            controller=ctrl_msg.controller,
            value=ctrl_msg.value,
            channel=ctrl_msg.channel
        )
        return {"status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
