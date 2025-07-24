import mido
import tkinter as tk
from tkinter import ttk
import time
import threading

# Nombre del puerto MIDI creado en loopMIDI
PORT_NAME = 'LoopMidiPort 1'

try:
    output = mido.open_output(PORT_NAME)
except IOError:
    print(f"No se pudo abrir el puerto '{PORT_NAME}'. Asegúrate de que loopMIDI esté abierto y el puerto creado.")
    print(f"Puertos disponibles: {mido.get_output_names()}")
    exit(1)

# Función para enviar nota (en hilo aparte)
def play_note(note, velocity=100, duration=0.4, channel=0):
    def task():
        output.send(mido.Message('note_on', note=note, velocity=velocity, channel=channel))
        time.sleep(duration)
        output.send(mido.Message('note_off', note=note, velocity=0, channel=channel))
    threading.Thread(target=task).start()

# Crear ventana
root = tk.Tk()
root.title("Mini MIDI Sender")
root.geometry("380x180")
root.resizable(False, False)

style = ttk.Style()
style.configure("TButton", font=("Segoe UI", 12), padding=10)

# Escala básica de notas (C4 a G4)
notes = [
    ('C4', 60), ('D4', 62), ('E4', 64), ('F4', 65),
    ('G4', 67), ('A4', 69), ('B4', 71), ('C5', 72)
]

# Crear botones
frame = ttk.Frame(root, padding=20)
frame.pack(expand=True)

for i, (label, note) in enumerate(notes):
    btn = ttk.Button(frame, text=label, width=6, command=lambda n=note: play_note(n))
    btn.grid(row=0, column=i, padx=3)

# Salida
ttk.Label(root, text=f"Enviando a: '{PORT_NAME}'", font=("Segoe UI", 10)).pack(pady=5)

root.mainloop()
