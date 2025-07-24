import mido
import time

# Abre el puerto creado con loopMIDI
print(f"Listaje de puertos MIDI disponibles: {mido.get_output_names()}" )
output = mido.open_output('LoopMIDI 1 1')  # Usa el nombre exacto

def send_note(note=60, velocity=64, duration=0.5, channel=0):
    print(f"Enviando nota {note}")
    output.send(mido.Message('note_on', note=note, velocity=velocity, channel=channel))
    time.sleep(duration)
    output.send(mido.Message('note_off', note=note, velocity=0, channel=channel))

for note in range(60, 68):
    send_note(note)
